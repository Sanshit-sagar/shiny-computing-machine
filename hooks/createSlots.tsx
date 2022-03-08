import { 
    useRef,
    useState, 
    useEffect, 
    useContext, 
    useCallback,
    createContext, 
    ReactNode 
} from 'react' 

const useForceUpdate = () => {
    const [, rerender] = useState({})
    return useCallback(() => rerender({}), [])
}

const createSlots = <SlotNames extends string>(slotNames: SlotNames[]) => {

    type Slots = {
        [key in SlotNames]?: ReactNode;
    }

    type ContextProps = {
        registerSlot: (name: SlotNames, contents: ReactNode) => void;
        unregisterSlot: (name: SlotNames) => void;
        context: Record<string, unknown>;
    }

    const SlotsContext = createContext<ContextProps>({
        registerSlot: () => null,
        unregisterSlot: () => null,
        context: {}
    })

    type SlotsProps = { 
        context: ContextProps['context']; 
        children: (slots: Slots) => ReactNode; 
    }

    const Slots = ({ context = {}, children }: SlotsProps) => {
        const slotsDefinition: Slots = {}
        slotNames.map((name) => {
            slotsDefinition[name] = null
        })

        const slotsRef = useRef<Slots>(slotsDefinition)

        const rerenderWithSlots = useForceUpdate()
        const [isMounted, setMounted] = useState<boolean>(false)

        useEffect(() => {
            rerenderWithSlots()
            setMounted(true)
        }, [rerenderWithSlots])

        const registerSlot = useCallback((name: SlotNames, contents: ReactNode) => {
            slotsRef.current[name] = contents

            if(isMounted) 
                rerenderWithSlots()
    
        }, [isMounted, rerenderWithSlots])

        const unregisterSlot = useCallback((name: SlotNames) => {
            slotsRef.current[name] = null
            rerenderWithSlots()
        }, [rerenderWithSlots])

        const slots = slotsRef.current

        return (
            <SlotsContext.Provider value={{ registerSlot, unregisterSlot, context }}>
                {children(slots)}
            </SlotsContext.Provider>
        )
    }

    type SlotProps = {
        name: SlotNames;
        children: ReactNode; 
    }

    const Slot = ({ name, children }: SlotProps) => {
        const { registerSlot, unregisterSlot, context } = useContext(SlotsContext)

        useEffect(() => {
            registerSlot(name, typeof children === 'function' ? children(context) : children)
            return (() => unregisterSlot(name))
        },[])

        return null
    }

    return { Slots, Slot }
}

export {
    createSlots,
    useForceUpdate
}
import { Children, ReactNode, ReactElement } from 'react' 


const findByType = (children: ReactNode, component) => {
    const result = []
    const type   = [component.displayName] || [component.name]

    Children.forEach(children, (child) => {
        const   childType = child 
            &&  child.type 
            && (child.type.displayName || child.type.name)

        if(type.includes(childType)) {
            result.push(child)
        }
    })
    
    return result[0]
}


export {
    findByType 
}



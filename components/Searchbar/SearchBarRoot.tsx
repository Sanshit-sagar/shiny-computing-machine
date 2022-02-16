import { useState, useRef, useEffect, ChangeEvent } from 'react'
import { CSS } from 'stitches.config'
import { 
    StyledLabel,
    StyledInput,
    StyledResults, 
    StyledResultItem,
    StyledSearchBar,
    StyledIconWrapper
} from './styles'

import { DOG_BREEDS } from './constants'

export const SearchIcon = () => (
    <StyledIconWrapper aria-hidden="true">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    </StyledIconWrapper>
)

export const SearchInput = ({ query, handleChange }) => (
    <StyledLabel>
        <SearchIcon /> 
        <StyledInput 
            placeholder="Search for dog breeds"
            type="Search"
            defaultValue={query}
            onChange={handleChange}
        />
    </StyledLabel>
)

type SearchResultProps = { 
    item: ItemWithType; 
    css: CSS 
}

export const SearchResult = ({ item, css }: SearchResultProps) => {
    const topRef = useRef<number>(0) 
    const elRef = useRef<HTMLLIElement | null>(null)

    const [dy, setDy] = useState<number>(0)
    const [top, setTop] = useState<number | null>(null)

    useEffect(() => {
        if(!elRef.current) return

        const nextTop = elRef.current.getBoundingClientRect().top
        if(nextTop === topRef.current) return
    
        const deltaY = nextTop - topRef.current
        topRef.current = nextTop
        setDy(deltaY)

        requestAnimationFrame(() => {
            setDy(0)
        })
    })

    if(!item.name?.length) return null 

    return (
        <StyledResultItem 
            css={{ 
                ...css, 
                '--dy': dy, 
                '&::before': { 
                    content: item.type 
                }}
            }
            ref={elRef}
        >
            {item.name}
        </StyledResultItem>
    ) 
}

export const SearchResults = ({ 
    data = [] 
}) => {
    const elRef = useRef<HTMLUListElement | null>(null)
    const [height, setHeight] = useState<number | null>(null)

    useEffect(() => {
        if(!elRef.current) return

        const rect = elRef.current.getBoundingClientRect()
        setHeight(rect.height)
    }, [])

    return (
        <StyledResults ref={elRef} data-height={height} css={{ '--height': height }}>
            {data.map((item, index: number) => (
                <SearchResult key={`result-item-${index}`} item={item} css={{ '--i': index }} />
            ))}
        </StyledResults>
    )
}

type ItemWithType = { 
    name: string; 
    type: string; 
}
const testItems = DOG_BREEDS.filter((item: ItemWithType) => item.type !== 'unknown')

export const SearchAutocomplete = ({ 
    items = testItems 
}) => {
    const [query, setQuery] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        try {
            setQuery(event.currentTarget?.value ?? '')
        } catch(error) {
            setQuery('saved from error!!') 
        }
    }

    const matchedResults = query?.length >= 2 ? items.filter((item: ItemWithType) => (
            item.name.startsWith(query) 
        ||  item.name.endsWith(query) 
        ||  item.name.includes(query)
    )) : []
   
    return (
        <StyledSearchBar>
            <SearchInput 
                query={query} 
                handleChange={handleChange} />
            <SearchResults data={matchedResults} /> 
        </StyledSearchBar> 
    )
}

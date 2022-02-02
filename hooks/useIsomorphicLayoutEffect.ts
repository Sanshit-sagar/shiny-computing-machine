import { useEffect, useLayoutEffect } from 'react'  

export const useIsomorphicLayoutEffect = useEffect
                //  window 
    // &&  typeof   window                         !== undefined    
    // &&  typeof   window.document                !== undefined
    // &&  typeof   window.document.createElement  !== undefined 
    // ?   useEffect 
    // :   useLayoutEffect
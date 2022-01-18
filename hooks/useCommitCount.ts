import { MutableRefObject, useRef, useEffect } from 'react'

const INIT_COMMITS = 0;
const INCREMENT_SIZE = 1;

interface UseCommitCountProps {
    initCommits: number;
    increment: number; 
}

export const useCommitCount = ({ initCommits = INIT_COMMITS, increment = INCREMENT_SIZE}: UseCommitCountProps) => {
    const commitCountRef: MutableRefObject<number> = useRef<number>(initCommits);
    
    useEffect(() => {
        commitCountRef.current += increment;
    });

    return commitCountRef.current; 
};
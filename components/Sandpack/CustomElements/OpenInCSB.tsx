
import Link from 'next/link'
import { useCodeSandboxLink } from "@codesandbox/sandpack-react";

export const OpenInCSB = () => {
    const url = useCodeSandboxLink();

    return (
        <Link href={url}> 
            Open in CodeSandbox 
        </Link>
    )
}


// <a href={url} target="_blank" rel="noopener noreferrer">
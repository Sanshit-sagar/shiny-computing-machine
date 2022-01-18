import React from 'react'

type IconProps = {
    style: { 
        opacity: number; 
        width: string;
        height: string; 
        cursor: string; 
        verticalAlign: string; 
        marginRight: number; 
    }; 
    onClick: () => void; 
};

export const FolderOpenIcon = (props: IconProps) => (
    <button {...props}>
        <i className='bx bx-folder-open'></i>
    </button>
);

export const FolderClosedIcon = (props: IconProps) => (
    <button {...props}>
        <i className='bx bx-folder'></i>
    </button>
);

export const FileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bx-file'></i> </button>
export const PdfFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-pdf'></i> </button>
export const DocFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-doc'></i> </button>
export const MdFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-md'></i> </button>
export const JsonFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-json'></i> </button>
export const PngFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-png'></i> </button>
export const JpgFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-jpg'></i> </button>
export const HtmlFileIcon = (props: IconProps) =>  <button {...props}> <i className='bx bxs-file-html'></i> </button>
export const ArchivedFileIcon = (props: IconProps) => <button {...props}> <i className='bx bxs-file-archive'></i> </button>

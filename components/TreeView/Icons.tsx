import { ReactNode } from 'react' 

import {
    FileCodeIcon,
    FileBinaryIcon,
    FilePlayIcon,
    DocFileIcon,
    JpgFileIcon,
    ZipFileIcon,
    TxtFileIcon,
    PdfFileIcon,
    PptFileIcon,
    XclFileIcon,
    FileIcon,
    FolderIcon,
    FolderOpenIcon,
    FolderClosedIcon,
} from '@/components/Icons'

type MappedIcons = { 
    [key: string]: ReactNode;
}

const FILE_ICONS: MappedIcons = {
    'js': <FileCodeIcon />,
    'css': <FileCodeIcon />,
    'html': <FileCodeIcon />,
    'pdf': <PdfFileIcon />,
    'txt': <TxtFileIcon />,
    'jsx': <FileCodeIcon />,
    'jpg': <JpgFileIcon />,
    'doc': <DocFileIcon />,
    'zip': <ZipFileIcon />,
    'json': <FileCodeIcon />,
    'gif': <FilePlayIcon />,
    'md': <FileBinaryIcon />,
    '$': <FileIcon />,
    '~': <FolderOpenIcon />,
    '|': <FolderClosedIcon />
}

export default FILE_ICONS
import { ReactNode } from 'react' 

const JsIcon = () => <i className='bx bxl-javascript'></i>
const JsxIcon = () => <i className='bx bxl-react'></i>
const CssIcon = () => <i className='bx bxs-file-css'></i>
const HtmlIcon = () => <i className='bx bxs-file-html'></i>
const TxtIcon = () => <i className='bx bxs-file-txt'></i>
const PdfIcon = () => <i className='bx bxs-file-pdf'></i>
const GifIcon = () => <i className='bx bxs-file-gif'></i>
const DocIcon = () => <i className='bx bxs-file-doc'></i>
const ZipIcon = () => <i className='bx bxs-file-archive'></i>
const JsonIcon = () => <i className='bx bxs-file-json'></i>
const JpgIcon = () => <i className='bx bxs-file-jpg'></i>
const MdIcon = () => <i className='bx bxs-file-md'></i>
const FileBlankIcon = () => <i className='bx bxs-file-gif'></i>
const FolderClosedIcon = () => <i className='bx bxs-folder'></i>
const FolderOpenIcon = () => <i className='bx bxs-folder-open'></i>

type MappedIcons = { 
    [key: string]: ReactNode;
}

const FILE_ICONS: MappedIcons = {
    'js': <JsIcon />,
    'css': <CssIcon />,
    'html': <HtmlIcon />,
    'pdf': <PdfIcon />,
    'txt': <TxtIcon />,
    'jsx': <JsxIcon />,
    'jpg': <JpgIcon />,
    'doc': <DocIcon />,
    'zip': <ZipIcon />,
    'json': <JsonIcon />,
    'gif': <GifIcon />,
    'md': <MdIcon />,
    '$': <FileBlankIcon />,
    '~': <FolderOpenIcon />,
    '|': <FolderClosedIcon />
}

export default FILE_ICONS
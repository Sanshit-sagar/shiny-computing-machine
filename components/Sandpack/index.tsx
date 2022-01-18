import { SandpackState } from './interfaces' 
import DefaultEditor from './DefaultEditor'

// import dynamic from 'next/dynamic'
// const DynamicCustomEditor = dynamic(
//     () => import('./CustomEditor'),
// ); 
// import CustomEditor from './CustomEditor'

const SandpackEditor = (props: SandpackState) =>  (
    <DefaultEditor {...props} />
); 

export default SandpackEditor



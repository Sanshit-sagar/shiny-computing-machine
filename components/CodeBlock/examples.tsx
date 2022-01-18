import { ExampleBase } from '@/components/ExampleBase'
import { CodeIcon } from '@radix-ui/react-icons'
import LiveCodeBlock from './ReactLive'
import CodeBlock from './index'

const wavingHandCodeString = `
    const WavingHand = () =>  (
        <>
            <p> yoyo </p> 
            <button> 👋 </button>
            <input 
                type="range"
                style={{ width: '50px', height: '30px' }} 
            /> 
        </>
    );

    const Hi = () => (
        <h1>
            Hi <WavingHand /> !
        </h1>
    );
    render(<Hi />);
`

const LiveCodeBlockInstance = () => (
    <LiveCodeBlock
        live
        metastring=""
        language="javascript"
        codeString={wavingHandCodeString}
    />
)

const CodeBlockInstance = () => (
    <CodeBlock
        live={false}
        render={true}
        language="javascript"
        metastring=""
        codeString={wavingHandCodeString}
    />
)


const ExampleCodeBlock = () => {

    return (
        <ExampleBase
            heading="Code Block"
            description={''}
            icon={<CodeIcon />}
            component={
                <CodeBlockInstance /> 
            }
            controls={[]}
        />
    )
}

export default ExampleCodeBlock
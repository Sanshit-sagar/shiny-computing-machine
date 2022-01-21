
import { ExampleBase } from '@/components/ExampleBase'
import PinCode from './PinCode'
import { KeyIcon } from '@/components/Icons'

export const PinCodeInstance = () => {

    return (
        <PinCode 
            name="PinCode"
            fields={6} 
            type="number" 
            forceUppercase 
            val="123456" 
            filterChars={['8']}
            isDisabled={false}
            onChange={() => console.log('changing')} 
        />
    )
}


const ExamplePinCode = () => {

    return (
        <ExampleBase
            heading={''}
            description={''}
            icon={<KeyIcon />}
            component={<PinCodeInstance />}
            controls={[]}
        />
    )
}

export default ExamplePinCode
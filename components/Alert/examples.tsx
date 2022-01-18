import { Alert } from './index'

const ExampleAlert = () => (
    <Alert
        trigger={'Click me!'}
        title={'Example Dialog'}
        description={'Description goes here'}
        content={'Content goes here'}
        cancelText={'Cancel'}
        confirmText={'confirm'}
        handleCancel={() => console.log('canceled')}
        handleConfirm={() => console.log('confirmed')}
    />
); 

export default ExampleAlert
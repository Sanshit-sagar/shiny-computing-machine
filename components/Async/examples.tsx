import Async from '@/components/Async'

import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { Button } from '@/components/Buttons'
import { Spinner } from '@/components/Spinner'


const myFunction = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10
        rnd <= 5
          ? resolve("Submitted successfully 🙌")
          : reject("Oh no there was an error 😞")
      }, 2000);
    });
}

const AsyncFunction = () => (
    <Async.Root asyncFn={myFunction} delay={0}> 
        {({ execute, status, error, isAwaiting, isResolved, isRejected, data }) => (
            <Box 
                css={{ 
                    bc: isAwaiting ? '$infoBg' : isRejected ? '$dangerBg' : isResolved ? '$successBg' : '$accentBg',
                    p: '$3',
                    br: '$3'
                }}
            >
                <Text> Current Status: {status} </Text>

                <Async.Idle 
                    element={Button} 
                    onPress={execute}
                    code="0000"
                    variant="secondary"
                    theme="info"
                >  
                    Start your journey by clicking a button 
                </Async.Idle>

                <Async.Awaiting> 
                    <Spinner /> 
                </Async.Awaiting>

                <Async.Rejected
                    element={Button}
                    onPress={execute}
                    code="0100"
                    variant="secondary"
                    theme="danger"
                > 
                   {error} Oh no :( 
                </Async.Rejected>

                <Async.Resolved 
                    element={Button} 
                    onPress={execute} 
                    code="1000" 
                    variant="primary"
                    theme="success"
                > 
                    {data}
                </Async.Resolved>
            </Box>
        )}
    </Async.Root>
)

export const AsyncInstance = () => <AsyncFunction />

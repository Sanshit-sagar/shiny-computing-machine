import { ExampleBase } from '@/components/ExampleBase'
import { IdCardIcon } from '@radix-ui/react-icons'

import Card from './Card'

const ExampleCard = () => {

    return (
        <ExampleBase
            heading="Card"
            description={''}
            icon={<IdCardIcon />}
            component={
                <Card.Wrapper title="Another title here"> 
                    <Card.Header> 
                        <Card.Heading>
                            Card title right here 
                        </Card.Heading>
                        <Card.Description> 
                            Consequat anim nisi magna irure enim deserunt dolore id id magna deserunt aute.
                        </Card.Description>
                    </Card.Header>
                    <Card.Body>
                        Nisi commodo adipisicing eu adipisicing id. Excepteur consequat fugiat ad 
                        eiusmod aute eu aute pariatur amet ut esse incididunt. Incididunt dolor et non
                        dolor qui consectetur excepteur do aute amet deserunt amet.
                    </Card.Body>
                </Card.Wrapper>
                
            }
            controls={[]}
        />
    )
}

export default ExampleCard
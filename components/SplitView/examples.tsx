import { ExampleBase } from '@/components/ExampleBase'
import { SizeIcon } from '@radix-ui/react-icons'
import SplitView from './SplitView'

const quotes = [
    {
      id: 1,
      author: "Nelson Mandela",
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      id: 2,
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      id: 3,
      author: "Oprah Winfrey",
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    }
]

const ExampleSplitView = () => {

    return (
        <ExampleBase
            heading={'SplitView'}
            description={''}
            component={<SplitView />}
            icon={<SizeIcon />}
            controls={[]}
        /> 
    )
}

export default ExampleSplitView
import { Link } from './index'

import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'
import { LinkState } from './interfaces'

import { ExternalLinkIcon } from '@radix-ui/react-icons'

const init = (): LinkState => {
    const initLinkState: LinkState = {
        id: 'exampleLink',
        href: 'https://sanshitsagar.com',
        target: '_blank',
        disabled: false,
        children: <> Sanshit's Portfolio </>
    }
    return initLinkState
}


export const LinkInstance = () => {
    const { state } = StateFactory<LinkState>(init)

    return <Link {...state} />
}

const ExampleLink = () => {

    return (
        <ExampleBase
            heading={'Link'}
            icon={<ExternalLinkIcon />}
            description={'A text element that links to another page or resource'}
            component={<LinkInstance  />}
            controls={[]}
        />
    );
}

export default ExampleLink
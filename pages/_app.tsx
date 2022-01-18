import '../styles/main.css'

import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import PersistentLayout from '../layouts/persistentLayout'
import { IdProvider } from '@radix-ui/react-id'
import { SSRProvider } from '@react-aria/ssr'
import { Provider } from "jotai"


import { OverlayProvider } from '@react-aria/overlays'


type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode; 
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
};

export default function Nextra({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = (children: ReactNode) => (
        <PersistentLayout> 
            {children} 
        </PersistentLayout>
    )

    return (
        <SSRProvider>
            <IdProvider>
                <OverlayProvider>
                    <Provider>
                        {getLayout(
                            <Component {...pageProps} />
                        )}
                    </Provider>
                </OverlayProvider>
            </IdProvider>
        </SSRProvider>
    );
}

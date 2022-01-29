import '../styles/main.css'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import { Provider } from 'jotai'
import { SSRProvider } from '@react-aria/ssr'
import { IdProvider } from '@radix-ui/react-id'
import { OverlayProvider } from '@react-aria/overlays'

import PersistentLayout from '../layouts/persistentLayout'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode; 
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    
    const getLayout = (children: ReactNode) => (
        <PersistentLayout> {children} </PersistentLayout>
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

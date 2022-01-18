import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const meta = {
            title: 'Modularity',
            description: 'An atomic design system',
            image:'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
        }

        return (
            <Html lang="en">
                <Head>  
                    <meta name="robots" content="follow, index" />
                    <meta name="description" content={meta.description} />
                    <meta property="og:site_name" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:image" content={meta.image} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@yourname" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
                    <meta charSet="utf-8"     
                /> 
                    <link 
                        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap" 
                        rel="stylesheet" 
                    />

                    <link 
                        href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" 
                        rel="stylesheet"
                    />

                    <link 
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
                        rel="stylesheet" 
                    />

                    <link 
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap" 
                        rel="stylesheet"
                    />

                    <style 
                        id='stitches'
                        dangerouslySetInnerHTML={{ __html: getCssText() }} 
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument











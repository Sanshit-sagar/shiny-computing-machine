import { styled } from './stitches.config'

export default {
    github: null,
    docsRepositoryBase: 'https://github.com/Sanshit-sagar/opus/tree/main',
    titleSuffix: '',
    search: false,
    unstable_stork: false,
    floatTOC: true,
    darkMode: false,
    defaultMenuCollapsed: false,
    font: false,
    prevLinks: false,
    nextLinks: false,
    footer: false,
    direction: 'ltr',
    logo: () => {
        return null
    },
    head: ({ title, meta }) => {
        return (
            <>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link 
                    rel="manifest" 
                    href="/favicon/site.webmanifest" 
                />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#ffffff"
                />
                <meta 
                    name="msapplication-TileColor" 
                    content="#ffffff" 
                />
                <meta 
                    name="theme-color" 
                    content="#ffffff" 
                />
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0" 
                />
                <meta 
                    httpEquiv="Content-Language" 
                    content="en" 
                />
                <meta
                    name="description"
                    content={
                        meta?.description || "an atomic design system"
                    }
                />
                <meta
                    name="og:description"
                    content={
                        meta?.description || "an atomic design system"
                    }
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vercel" />
                <meta
                    name="twitter:image"
                    content={
                        meta?.image || "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg"
                    }
                />
                <meta
                    name="og:title"
                    content={
                        title ? title + "Modularity" : "Modularity"
                    }
                />
                <meta
                    name="og:image"
                    content={
                        meta?.image || "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg"
                    }
                />
                <meta 
                    name="apple-mobile-web-app-title" 
                    content="Modularity" 
                />
                 <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
                    media="print"
                    onLoad="this.media='all'"
                />
            </>
        );
    },
    footerEditLink: () => {
        return null
    },
    footerText: () => {
        return null
    },
    i18n: [
        { locale: "en-US", text: "English" }, 
        { locale: "es-ES", text: "Español" }
    ],
    unstable_faviconGlyph: "⚛️"
}

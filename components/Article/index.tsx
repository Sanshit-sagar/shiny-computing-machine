import { ReactNode, createContext } from 'react'

type ArticleProps = {
    title: ReactNode | string;
    subtitle: ReactNode | string; 
    date: string | typeof Date | ReactNode; 
    author: string | ReactNode; 
    content: ReactNode | string;
    children: ReactNode;
}

const ArticleContext = createContext<ArticleProps>()

const Title = () => {
    return (
        <ArticleContext.Consumer>
            {({ title, subtitle }) => (
                <div style={{ textAlign: 'center' }}>
                    <h2> {title} </h2>
                    <div style={{ color: '#ccc' }}>
                        <h3> {subtitle} </h3> 
                    </div>
                </div>
            )}
        </ArticleContext.Consumer>
    )
}

const Metadata = () => {
    return (
        <ArticleContext.Consumer>
            {({ author, date }) => (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {author} {date}
                </div>
            )}
        </ArticleContext.Consumer>
    )
}

const Content = () => {
    return (
        <ArticleContext.Consumer>
            {({ content }) => (
                <div style={{ width: '500px', margin: '0 auto' }}>
                    {content} 
                </div>
            )}
        </ArticleContext.Consumer>
    )
}

const Article = (props: ArticleProps) => {
    return (
        <ArticleContext.Provider {...props}>
            {props.children}
        </ArticleContext.Provider>
    )
}


Article.Title = Title
Title.displayName = 'ArticleTitle'

Article.Metadata = Metadata
Metadata.displayName = 'ArticleMetadata'

Article.Content = Content
Content.displayName = 'ArticleContent'

export default Article 


export {
    Title, 
    Metadata,
    Content,
    ArticleContext
}

export type {
    ArticleProps
}
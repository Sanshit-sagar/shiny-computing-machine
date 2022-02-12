import {
    StyledSnapTabs,
    StyledLink,
    StyledHeader,
    StyledSection,
    StyledNav,
    StyledArticle 
} from './styles'

const Article1 = () => (
    <>
        <h2>Sit dolor</h2>
        <p>Lorem ipsum dolor sit amet consectet adipisicing elit</p>
        <h2>Lore sf</h2>
        <p>Lorem ipsum dolor sit amet consectet adipisicing elit</p>
        <p>Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
        <p>Ipsum, a? Tenetur aut a nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
        <p>nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
        <p>Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
        <p>Ipsum, a? Tenetur aut a nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
        <p>nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
    </>
)

const Article2 = () => (
    <>
        <h2>Tenetur</h2>
        <p>Lorem ipsum dolor sit amet consectet adipisicing elit. Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
        <h2>Tenet urs</h2>
        <p>Ipsum, a? Tenetur aut a nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
        <p>nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
        <h2>Lore s sdf</h2>
        <p>Lorem ipsum dolor sit amet consectet adipisicing elit</p>
        <p>Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
        <p>Ipsum, a? Tenetur aut a nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
        <p>nisi, aspernatur earum eligendi id quam nihil sint quas?</p>
    </>
)

const Article3 = () => (
    <>
        <h2>Lorems dolor</h2>
        <p>Lorem ipsum dolor sit amet consectet adipisicing elit</p>
        <p>Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
        <p>nisi, aspernatur earum eligendi id quam nihil sint quas?</p><ul>
            <li>Lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
        </ul>
        <p>Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
    </>
)

const Article4 = () => (
    <>
        <h2>Lores sdf</h2>
        <ul>
            <li>Lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>Lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
        </ul>
        <p>Sit molestiae itaque rem optio molestias voluptati obcaecati!</p>
    </>
)

const ArticleLastOne = () => (
    <>
        <menu>
            <li> yoyo opt 1 </li>
            <li> this ones two</li>
            <li> this ones three </li>   
            <li> and we have here, no 4 </li> 
        </menu>   
    </> 
)


export const AccessibleTabs = () => (
    <StyledSnapTabs>

        <StyledHeader className="scroll-snap-x">
            <StyledNav>
                <StyledLink href='#responsive'> Responsive </StyledLink>
                <StyledLink href='#accessible'> Accessible </StyledLink>
                <StyledLink href='#overflow'> Horizontal Overflow Snap </StyledLink>
                <StyledLink href='#lastone'> Last One </StyledLink> 
                <StyledLink href='#more'>
                    <svg 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        role="presentation" 
                        focusable="false"
                    >
                        <path 
                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" 
                        />
                    </svg>
                </StyledLink>
            </StyledNav>    
            <span className="snap-indicator"></span>
        </StyledHeader>

        <StyledSection className="scroll-snap-x">
            <StyledArticle id="responsive">
                <Article1 /> 
            </StyledArticle>
            <StyledArticle id="accessible">
                <Article2 />
            </StyledArticle>
            <StyledArticle id="overscroll">
                <Article3 /> 
            </StyledArticle>
            <StyledArticle id="lastone">
                <ArticleLastOne /> 
            </StyledArticle>
            <StyledArticle id="more">
                <Article4 /> 
            </StyledArticle>
        </StyledSection>

    </StyledSnapTabs>
)




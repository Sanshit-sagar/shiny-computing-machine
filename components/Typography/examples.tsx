import { Flex } from '../Flex'
import { Text } from '../Text/Text'
import { Separator } from '../Separator'
import {
    Title,
    Subtitle,
    Heading, 
    Subheading,
    Paragraph
} from './index'

export const ExampleTitle = () => <Title> Title </Title>
export const ExampleHeading = () => <Heading> Heading </Heading>
export const ExampleSubtitle = () => <Subtitle> Subtitle </Subtitle>
export const ExampleSubHeading = () => <Subheading> Subheading </Subheading>
export const ExampleParagraph = () => <Paragraph> Lorem Ipsum Dosum... </Paragraph>
export const FullWidthDivider = () => <Separator orientation='horizontal' size='full' /> 


const ExampleTypographyStack = () => (
    <Flex css={{ width: '100%', height: '100%', fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '$4' }}>
        <ExampleTitle />
      
        <ExampleSubtitle />
     
        <ExampleHeading />

        <ExampleSubHeading />

        <ExampleParagraph /> 
    </Flex>
);

export default ExampleTypographyStack
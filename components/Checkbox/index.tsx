import {
    VisuallyHidden,
    StyledContainer,
    StyledCheckbox,
    StyledLabel
} from './styles'

export const SvgCheckIcon = () => (
    <svg viewBox="0 0 100 100">
        <path 
            className="path" 
            fill="none" 
            stroke="#000" 
            stroke-width="13" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-miterlimit="10" 
            d="M12.1 52.1l24.4 24.4 53-53"
        />
    </svg>
)

const Checkbox = () => (
    <StyledContainer>
        <VisuallyHidden>
            <input class="sr-only" id="cs" type="checkbox" />
        </VisuallyHidden>

        <StyledLabel>
            <StyledCheckbox>
                <SvgCheckIcon />
            </StyledCheckbox>

            Custom Checkbox
        </StyledLabel>
    </StyledContainer>
)

export default Checkbox 

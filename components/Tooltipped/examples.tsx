import { StyledTooltip } from './Tooltip'

export const TooltipInstance = () => {

    return (
        <StyledTooltip aria-label="heres a tooltip heres a tooltip heres a tooltip heres a tooltip" placement="top-right" multiline={false}>
            <button> yo wheres the tooltip </button>
        </StyledTooltip>
    )
}
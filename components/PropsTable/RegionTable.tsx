import React from 'react'
import { Box } from '@/components/Box'

const RegionTable = ({
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...props
}) => (
    <Box 
        as="div"
        role="region"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        tabIndex={0}
        css={{
            position: 'relative',
            overflow: 'auto',
            '&:focus': {
                outline: 0
            }
        }}
    >
        <Box as="table" {...props} />
    </Box>
)

export default RegionTable
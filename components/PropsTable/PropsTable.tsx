import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import RegionTable from './RegionTable'


type PropsDef = {
    name: string;
    description?: string;
    required?: boolean;
    default?: string | boolean;
    type: string;
    typeSimple: string;
}

type PropsTableProps = {
    data: PropsDef;
    'aria-label': string;
    'aria-labelledby': string; 
}

const PropsTable = ({
    data,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy
}: PropsTableProps) => {

    const hasAriaLabel = !!(ariaLabelledBy || ariaLabel)

    return (
        <RegionTable
            css={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}
            aria-label={hasAriaLabel ? ariaLabel : 'Component Props'}
            aria-labelledby={ariaLabelledBy}
        >
            <thead>
                <tr>
                    <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
                      <Text size="2" css={{ color: '$gray11' }}>
                        Prop
                      </Text>
                    </Box>
                    <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
                      <Text size="2" css={{ color: '$gray11' }}>
                        Type
                      </Text>
                    </Box>
                    <Box as="th" css={{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }}>
                      <Text size="2" css={{ color: '$gray11' }}>
                        Default
                      </Text>
                    </Box>
                </tr>
            </thead>
            <tbody>
                



            </tbody>
        </RegionTable>
    )
}
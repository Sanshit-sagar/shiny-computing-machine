import { CountUp } from '@/components/CountUp'

const CountUpWithBoundsAndDuration = () => (
    <CountUp start={0} end={10} duration={2} />
)

export const CountUpInstance = () => <CountUpWithBoundsAndDuration /> 
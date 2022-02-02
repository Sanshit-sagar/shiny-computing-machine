import AsyncRoot from './AsyncRoot'
import AsyncIdle from './AsyncIdle' 
import AsyncResolved from './AsyncResolved'
import AsyncRejected from './AsyncRejected'
import AsyncAwaiting from './AsyncAwaiting'

const Async = {
    Root: AsyncRoot,
    Idle: AsyncIdle,
    Resolved: AsyncResolved,
    Rejected: AsyncRejected,
    Awaiting: AsyncAwaiting 
}


export default Async
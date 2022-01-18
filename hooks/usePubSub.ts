import React, { useContext, createContext, ReactElement } from 'react'


type Key = symbol | string | number;

export type Subscriber<T> = (t: T) => void;

export interface Props {
    children: string | ReactElement | ReactElement[];
}

export class Channel<T> {
    private subscribers: Subscriber<T>[] = [];

    publish(t: T): void {
        function invoke(subscriber: Subscriber<T>): void {
            subscriber(t);
        }
        this.subscribers.forEach(invoke);
    }

    subscribe(subscriber: Subscriber<T>): () => void {
        const index = this.subscribers.length;
        
        this.subscribers = [
            ...this.subscribers, 
            subscriber
        ];

        const ref = this;
        return function (): void {
            ref.subscribers.splice(index, 1);
        };
    }
}


export class PubSub {
    private channels: Record<Key, Channel<any>> = {};

    publish<T>(key: Key, message: T): void {
        this.channels[key].publish(message);
    }

    subscribe<T>(key: Key, subscriber: Subscriber<T>): void {
        this.getChannel<T>(key).subscribe(subscriber);
    }

    private getChannel<T>(key: Key): Channel<T> {
        return this.channels[key] || this.createChannel(key);
    }

    private createChannel<T>(key: Key): Channel<T> {
        const channel = new Channel<T>();

        this.channels = {
            ...this.channels,
            [key]: channel,
        };

        return channel;
    }
}

// PubSubContext
export const pubsub: PubSub = new PubSub();
export const PubSubContext: React.Context<PubSub> = createContext(pubsub);

// TODO: Fix error caused by uncommenting the block below
// function WithPubSub({ children }: Props): React.ReactElement {
//     return (
//         <PubSubContext.Provider value={pubsub}>
//             {children}
//         </PubSubContext.Provider>
//     );
// }


export function usePubSub() {
    const pubsub = useContext(PubSubContext);

    return {
        pubsub,
    };
}
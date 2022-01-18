import { Key } from 'react' 
import { ItemElement } from './Items'
import { SectionElement } from './Sections'


export type CollectionElement<T> = SectionElement<T> | ItemElement<T>
export type CollectionRenderer<T> = (item: T) => CollectionElement<T>
export type CollectionChildren<T> = CollectionElement<T> | CollectionElement<T>[] | CollectionRenderer<T>

export type CollectionBase<T> = {
    children: CollectionChildren<T>;
    items?: Iterable<T>;
    disabledKeys?: Iterable<Key>; 
}

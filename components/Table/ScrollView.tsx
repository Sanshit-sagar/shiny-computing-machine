import { styled } from '@stitches/react'
import { blackA } from '@radix-ui/color'
import { ScrollArea } from '@/components/ScrollArea'

export const TableScrollView = ({ content }: { content: any }) => (
    <ScrollArea> {content} </ScrollArea>
);


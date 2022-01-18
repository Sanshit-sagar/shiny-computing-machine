import React from 'react'; 
import { MultilineEdit } from './Multiline'
import { InlineEdit, InlineEditProps } from './Inline'


export function LinedEdit(props: InlineEditProps) {
    const { multiline, ...otherProps } = props;

    return multiline ? <MultilineEdit {...props} /> : <InlineEdit {...props} />;
} 

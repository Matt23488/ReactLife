import React from 'react';

import './Select.css';

export default function Select(props: SelectProperties) {
    return (
        <select className={`Select ${props.className || ''}`} style={props.style} onChange={props.onChange} value={props.value}>
            {props.children}
        </select>
    );
}

interface SelectProperties {
    children?: React.ReactNode | React.ReactNodeArray;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}
import React from 'react';

import './Button.css';

export default function Button(props: ButtonProperties) {
    return (
        <button className={`Button ${props.className || ''}`} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

interface ButtonProperties {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
import React from 'react';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';
import Button from './Button';

import './Range.css';

export default function Range(props: RangeProperties) {
    return (
        <div className="Range">
            <Button onClick={() => props.onChange(-1)}><VscChromeMinimize /></Button>
            <span className="Range_Display">{props.value}</span>
            <Button onClick={() => props.onChange(1)}><VscAdd /></Button>
        </div>
    );
}

interface RangeProperties {
    value: number;
    min: number;
    max: number;
    step: number;

    onChange: (dir: 1 | -1) => void;
}
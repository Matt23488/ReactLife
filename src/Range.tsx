import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import './Range.css';

export default function Range(props: RangeProperties) {
    return (
        <div className="Range">
            <button className="Range_Button" onClick={() => props.onChange(-1)}><FaMinusSquare /></button>
            <span className="Range_Display">{props.value}</span>
            <button className="Range_Button" onClick={() => props.onChange(1)}><FaPlusSquare /></button>
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
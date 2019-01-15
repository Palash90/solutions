import React from 'react';

export default function SVGComponent(props) {
    return (
        <svg className="div-box" height="200" width="200">
            <circle cx={props.measurement.cx} cy={props.measurement.cy}
                r={props.measurement.r} stroke="black" stroke-width="3"
                fill={props.measurement.color} />
            Sorry, your browser does not support inline SVG.
        </svg>

    );
}
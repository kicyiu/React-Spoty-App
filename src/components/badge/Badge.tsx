import './Badge.css';
import React from 'react';

type Artist = {
    name: string
}

function Badge(props: Artist): JSX.Element {
    return (
        <span className="badge badge-pill badge-primary">{props.name}</span>
    );
}

export default Badge;
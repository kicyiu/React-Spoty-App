import './Badge.css';
import React from 'react';

type Artist = {
    name: string
}

const Badge: React.FC<Artist> = (props: Artist) => {
    return (
        <span className="badge badge-pill badge-primary">{props.name}</span>
    );
}

export default Badge;
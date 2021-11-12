import React from 'react';
import Badge from '../badge/Badge';
import noImage from '../../assets/img/noimage.png';
import { useHistory } from "react-router-dom";
import Release from '../../models/release';
import './Card.css';



const Card: React.FC<Release> = (props: Release) => {
    const history = useHistory();

    const handleCardClick = (): void => {
        history.push(`/artist`, { artistId: props.artistId});
       // history.push({ pathname: '/artist', state: { artistId: props.id } });
    }


    return (
        <div className="card pointer" onClick={handleCardClick}>
            <img src={props.image ? props.image : noImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title c-title">{props.name}</h5>
                {props.artists && (
                    <p className="card-text">
                        {props.artists.map(artist => (
                            <Badge
                                key={artist.id}
                                name={artist.name}
                            />
                        ))}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Card;
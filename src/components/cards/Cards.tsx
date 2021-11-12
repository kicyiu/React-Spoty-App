import React from 'react';
import Card from '../card/Card'
import  Release  from '../../models/release';

type MusicProps = {
    musics: Release[]
}

const Cards: React.FC<MusicProps> = (props: MusicProps) => {

    return (
        <div className="card-columns m-5 animated fadeIn">
            {props.musics.map(item => (
                <Card
                    key={item.artistId}
                    artistId={item.artistId}
                    name={item.name}
                    artists={item.artists ? item.artists : []}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default Cards;
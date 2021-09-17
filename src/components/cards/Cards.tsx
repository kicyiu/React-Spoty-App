import React from 'react';
import Card from '../card/Card'

function Cards(props: any): JSX.Element {

    return (
        <div className="card-columns m-5 animated fadeIn">
            {props.musics.map(item => (
                <Card
                    key={item.artistId}
                    id={item.artistId}
                    name={item.name}
                    artists={item.artists ? item.artists : []}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default Cards;
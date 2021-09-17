import React, { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import Cards from '../components/cards/Cards';
import { SpotifyServices } from '../services/spotify.service';
import Wrapper from '../components/Helpers/Wrapper';

function Search(): JSX.Element {

    const spoty = new SpotifyServices();
    const [artists, setArtists] = useState([]);
    /* = {
        color: "white"
    }*/

    function searchArtists(term: string): void {
        console.log("init serachArtists term: ", term);
        spoty.searchArtists(term).then(data => {
            console.log('searchArtists resp: ', data);
            if (data.artists) {
                const artistsData = data.artists.items.map(artist => ({
                    artistId: artist.id,
                    name: artist.name,
                    type: artist.type,
                    image: artist.images && artist.images.length > 0 ? artist.images[0].url : '',
                }));
    
                setArtists(artistsData);
                //console.log("Artists search results: ", artists);
            }
        })
        .catch(error => {
            console.log('searchArtists error: ', error);
        });
    }

    return (
        <Wrapper>
            <SearchBar onSearch={ searchArtists }/>
            {artists.length > 0 && (
                <Cards musics={artists}/>
            )}
        </Wrapper>
    );
}

export default Search;
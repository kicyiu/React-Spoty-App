import React from 'react';
import noImage from '../../assets/img/noimage.png';
import { useHistory, useLocation } from "react-router-dom";
import './Artist.css';
import Track from '../track/Track';
import { SpotifyServices } from '../../services/spotify.service';
import { useQuery } from 'react-query';
import { ReactQueryDevtools }  from "react-query/devtools";


type Artist = {
    image: string,
    name: string,
    spotifyUrl: string
}

type TopTrack = {
    id: string,
    name: string,
    uri: string,
    album: {
        name: string,
        image: string
    }
}

function Artist(): JSX.Element {

    const location = useLocation();
    const { artistId } = location.state;

    const spoty = new SpotifyServices();
    const history = useHistory();
    let artist: Artist | null = null;
    const topTracks: TopTrack[] = [];

    const { data: artistData, isLoading, error, isSuccess } = useQuery("artistData",
        () => spoty.getArtist(artistId));
    if (isLoading) console.log("Loading artist data....");
    if (error) console.log("getArtist data error: ", error);
    if (isSuccess) {
        artist = {
            name: artistData.name,
            image: artistData.images[0].url,
            spotifyUrl: artistData.uri
        }
    }

    const { data: tracksData, isLoading: getTracksLoading, error: getTracksError, isSuccess: getTracksSuccess } = useQuery("topTracks",
        () => spoty.getTopTracks(artistId));
    if (getTracksLoading) console.log("Loading artist tracks...");
    if (getTracksError) console.log("get artist tracks error: ", getTracksError);
    if (getTracksSuccess) {
        const { tracks } = tracksData;
        for (const track of tracks) {
            const topTrack: TopTrack = {
                id: track.id,
                name: track.name,
                uri: track.uri,
                album: {
                    name: track.album.name,
                    image: track.album.images[0].url
                }
            }
            topTracks.push(topTrack);
        }
    }


    function handdleBackClick(): void {
        history.goBack();
    }

    return (
        <div>
            { artist && (
                <div className="row animated fadeIn">
                    <div className="col-2">
                        <img src={artist.image ? artist.image : noImage} className="img-thumb img-circle"/>
                    </div>
        
                    <div className="col">
                        <h3 data-testid="artist-name">{ artist.name }</h3>
                        <p>
                        <a href={ artist.spotifyUrl } target="_blank" rel="noreferrer">
                            Ir a la página del artista
                        </a>
                        </p>
                    </div>
        
                    <div className="col-4 text-right">
                        <button onClick={handdleBackClick} className="btn btn-outline-danger">
                        Regresar
                        </button>
                    </div>
                </div>
            )}
    
            { topTracks.length > 0 && (
                <div className="row m-5" data-testid="top-tracks">
                    <div className="col">
                        <table className="table top-track-table">
                            <thead>
                                <tr>
                                <th>Foto</th>
                                <th>Albun</th>
                                <th>Canción</th>
                                <th>Vista Previa</th>
                                </tr>
                            </thead>
        
                            <tbody>
                                { topTracks.map(track => (
                                    <Track
                                        key={track.id}
                                        track={track}
                                    />
                                ))}
                            </tbody>
                        </table >
        
                    </div >
        
                </div>
            )}

            <ReactQueryDevtools initialIsOpen={false} />
        </div>        
    );
}

export default Artist;
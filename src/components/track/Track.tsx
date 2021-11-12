import React from 'react';
import noImage from '../../assets/img/noimage.png';
import TrackModel from '../../models/track';

type TrackProps = {
    track: TrackModel
}

const Track: React.FC<TrackProps> = (props: TrackProps) => {
    //console.log("mapping tracks", props);

    const iframeStyle = {
        backgroundColor: 'transparent'
    }

    const embedUri = 'https://open.spotify.com/embed?uri=';

    return (
        <tr>
            <td>
                <img src={props.track.album.image != '' ?  props.track.album.image : noImage} alt=""  className="img-thumb"/>
            </td>
            <td>{props.track.album.name}</td>
            <td>{props.track.name}</td>
            <td>
                <iframe src={embedUri + props.track.uri} width="300" height="80" frameBorder="0" allow="encrypted-media" style={iframeStyle}></iframe >
            </td>
        </tr>
    );
}

export default Track;
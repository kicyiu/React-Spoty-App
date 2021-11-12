export type TrackData = {
    name: string,
    uri: string,
    album: {
        name: string,
        image: string,
    }
}

class TrackModel {
    name: string;
    uri: string;
    album: {
        name: string;
        image: string;
    }

    constructor (obj: TrackData) {
        this.name = obj.name;
        this.uri = obj.uri;
        this.album = obj.album;
    }
}

export default TrackModel;
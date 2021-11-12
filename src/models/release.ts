export type ReleaseData = {
    id: string;
    name: string;
    artists: {
        id: string;
        name: string;
    }[];
    image: string
}

class Release {
    artistId: string;
    name: string;
    artists: {
        id: string;
        name: string;
    }[];
    image: string;

    constructor(obj: ReleaseData) {
        this.artistId = obj.id;
        this.name = obj.name;
        this.artists = obj.artists.map(artist => ({
            id: artist.id,
            name: artist.name
        }));
        this.image = obj.image;
    }
}

export default Release;
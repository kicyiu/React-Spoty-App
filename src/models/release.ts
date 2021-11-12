export type ReleaseData = {
    id: string;
    name: string;
    type: string
    artists: {
        id: string;
        name: string;
    }[];
    images: {
        url: string;
    }[];
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
        this.artistId = obj.type === "artist" ? obj.id : obj.artists[0].id;
        this.name = obj.name;
        this.artists = obj.artists ? obj.artists.map(artist => ({
            id: artist.id,
            name: artist.name
        })) : [];
        this.image = obj.images && obj.images.length > 0 ? obj.images[0].url : "";
    }
}

export default Release;
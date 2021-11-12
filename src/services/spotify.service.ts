/* eslint-disable @typescript-eslint/no-explicit-any */

export class SpotifyServices {

    private API_END_POINT = "https://api.spotify.com/v1";
    private API_KEY = "BQBeTEk1LhNHGq8xyhQPghK1rLOfFBIiBZ91k8FnWJfBM1AWXFcBOSR8P74fATJrTPkULprtRojDSQh1Oek";
    
    private getQuery(path: string): Promise<Response> {
        const url = `${this.API_END_POINT}/${path}`;
        return fetch(url, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${this.API_KEY}`
            })
        })
    }

    async getNewReleases(): Promise<any> {
        const data = await this.getQuery("browse/new-releases?limit=20");
        return await (data.json());
    }
    
    
    async getArtist(id: string): Promise<any> {
        const data = await this.getQuery(`artists/${ id }`);
        return await (data.json());
    }
    
    async getTopTracks(id: string): Promise<any> {
        const data = await this.getQuery(`artists/${ id }/top-tracks?country=us`);
        return await (data.json());
    }

    async searchArtists(term: string): Promise<any> {
        const data = await this.getQuery(`search?q=${ term }&type=artist&limit=15`)
        return await (data.json());
    }
}



import React, { Component, Fragment } from 'react';
import { SpotifyServices } from '../services/spotify.service';
import Cards from '../components/cards/Cards';
import LinearLoading from '../components/shared/LinearLoading';

class Home extends Component {

    textStyle = {
        color: "white"
    }

    progressBarStyle = {
        colorPrimary: {
            background: 'green'
        }
    }

    state = {
        newMusics: [],
        loading: false,
        errorMessage: ''
    }
    spoty: SpotifyServices = new SpotifyServices();

    componentDidMount(): void {
        console.log("componentDidMount");
        this.getNewReleasesFromAPi();
    }

    /*componentDidUpdate(prevProps: any, prevState: any): void {
        console.log("componentDidUpdate", prevProps, prevState);
    }*/  

    getNewReleasesFromAPi(): void {
        this.setState({loading: true});
        this.spoty.getNewReleases().then(resp => {
            if (!resp.error) {
                if (resp.albums && resp.albums.items.length > 0) {
                    const musics = resp.albums.items.map(music => ({
                        artistId: music.type === 'artist' ? music.id : music.artists[0].id,
                        name: music.name,
                        type: music.type,
                        image: music.images && music.images.length > 0 ? music.images[0].url : '',
                        artists: music.artists
                    }));
    
                    this.setState({newMusics: musics });
                }

            } else {
                this.setState({errorMessage: resp.error.message})
                console.log("getNewReleasesFromAPi error:", resp.error);    
            }
            this.setState({loading: false});
        });
    }

    render(): JSX.Element {
        return (
            <Fragment>
                <LinearLoading loading={this.state.loading.toString()}/>
                {this.state.errorMessage && (
                     <div className="alert alert-danger animated fadeIn">
                        <h3>Error</h3>
                        <p>
                            {this.state.errorMessage}
                        </p>
                    </div>
                )}
                {this.state.newMusics.length > 0 && (
                    <Cards musics={this.state.newMusics}/>
    
                )}
            </Fragment>
        );
    }
}

export default Home;
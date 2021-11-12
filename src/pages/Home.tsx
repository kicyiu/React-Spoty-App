import React, { Fragment, useState, useEffect } from "react";
import { SpotifyServices } from "../services/spotify.service";
import Cards from "../components/cards/Cards";
import Release from "../models/release";
import LinearLoading from "../components/shared/LinearLoading";
import ErrorMessage from "../components/shared/ErrorMessage";




const Home: React.FC = () => {
  const [newReleases, setNewReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const spoty: SpotifyServices = new SpotifyServices();
    setLoading(true);
    spoty.getNewReleases().then((resp) => {
      if (!resp.error) {
        if (resp.albums && resp.albums.items.length > 0) {
          const musics = resp.albums.items.map((music) => ({
            artistId: music.type === "artist" ? music.id : music.artists[0].id,
            name: music.name,
            type: music.type,
            image:
              music.images && music.images.length > 0
                ? music.images[0].url
                : "",
            artists: music.artists,
          }));

          setNewReleases(musics);
        }
      } else {
        setErrorMessage(resp.error.message);
        //console.log("getNewReleasesFromAPi error:", resp.error);
      }
      setLoading(false);
    });
  }, []);

  return (
    <Fragment>
      <LinearLoading loading={loading.toString()} />
      {errorMessage && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
      {newReleases.length > 0 && <Cards musics={newReleases} />}
    </Fragment>
  );
}

export default Home;

import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import Cards from "../components/cards/Cards";
import { SpotifyServices } from "../services/spotify.service";
import Release from "../models/release";
import Wrapper from "../components/Helpers/Wrapper";
import ErrorMessage from "../components/shared/ErrorMessage";

const Search: React.FC = () => {
  const spoty = new SpotifyServices();
  const [artists, setArtists] = useState<Release[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function searchArtists(term: string) {
    console.log("init serachArtists term: ", term);
    try {
      const resp = await spoty.searchArtists(term);
      if (resp.error) {
        setErrorMessage(resp.error.message);
        throw new Error(resp.error.message);
      }

      const artistsData = resp.artists.items.map((artist) => ({
        artistId: artist.id,
        name: artist.name,
        type: artist.type,
        image:
          artist.images && artist.images.length > 0 ? artist.images[0].url : "",
      }));

      setArtists(artistsData);
    } catch (error) {
      console.log("searchArtists error: ", error);
    }
  }

  return (
    <Wrapper>
      <SearchBar onSearch={searchArtists} />
      {errorMessage && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
      {artists.length > 0 && <Cards musics={artists} />}
    </Wrapper>
  );
};

export default Search;

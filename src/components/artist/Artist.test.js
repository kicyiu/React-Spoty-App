import React from "react";
import { shallow } from "enzyme";
import Artist from "./Artist";

const mockHistoryGoBack = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { artistId: "a1" },
  }),
  useHistory: () => ({
    goBack: mockHistoryGoBack,
  }),
}));

const DUMMY_ARTIST_DATA = {
  data: {
    name: "John Doe",
    images: [{ url: "artist-url.png" }],
    uri: "artist-uri",
  },
  isLoading: false,
  error: "",
  isSuccess: true,
};

const DUMMY_TRACK_DATA = {
  data: {
    tracks: [
      {
        id: "track1",
        name: "test-track",
        uri: "track-uri",
        album: {
          name: "album-name",
          images: [{ url: "artist-url.png" }],
        },
      },
      {
        id: "track2",
        name: "test-track2",
        uri: "track-uri2",
        album: {
          name: "album-name2",
          images: [{ url: "artist-url2.png" }],
        },
      },
    ],
  },
  isLoading: false,
  error: "",
  isSuccess: true,
};

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: (mockType) => {
    if (mockType === "artistData") {
      return DUMMY_ARTIST_DATA;
    } else {
      return DUMMY_TRACK_DATA;
    }
  },
}));

describe("Artist component", () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Shoud render artist profile picture and name after fetching artist data", () => {
    const wrapper = shallow(<Artist />);
    const thumbImgIsRendered = wrapper.exists(".img-thumb");
    const nameIsRendered = wrapper.exists({ 'data-testid': 'artist-name' });

    expect(thumbImgIsRendered && nameIsRendered).toBe(true);
  });

  it("Should render tracks after fetching artist top tracks data", () => {
    const wrapper = shallow(<Artist />)
    const tracksIsRendered = wrapper.exists({ 'data-testid': 'top-tracks' });
    expect(tracksIsRendered).toBe(true);
  });

  it("Shoud call goBack function when click in goBack button", () => {
    const wrapper = shallow(<Artist />);
    wrapper.find('.btn').simulate('click');
    expect(mockHistoryGoBack).toHaveBeenCalled();
  });
});

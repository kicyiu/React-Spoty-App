import React from "react";
import { shallow, mount } from "enzyme";
import Card from './Card';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Card component", () => {
  const item = {
    artistId: '5FB5E1fwFeVqpz2CCzRSve',
    name: 'test music name',
    artists: [],
    image: 'tes-image'
  }

  it("Should navigate to artist when click on card", async () => {
    const wrapper = shallow(<Card
      key={item.artistId}
      id={item.artistId}
      name={item.name}
      artists={item.artists}
      image={item.image}
    />)

    wrapper.find('.card').simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith("/artist", {
      artistId: item.artistId
    });
  });

  it("Should render multiple badge when artists > 0", () => {
    const artists = [
      { id: 'a1', name: 'artist 1' },
      { id: 'a2', name: 'artist 2' },
      { id: 'a3', name: 'artist 3' },
    ]
    const wrapper = mount(<Card
      key={item.artistId}
      id={item.artistId}
      name={item.name}
      artists={artists}
      image={item.image}
    />)

    const badgeCount = wrapper.find(".badge").length;
    expect(badgeCount).toBeGreaterThan(0);
  });

  it("Should not render any badge when artists = 0", () => {
    const wrapper = mount(<Card
      key={item.artistId}
      id={item.artistId}
      name={item.name}
      artists={item.artists}
      image={item.image}
    />)

    const linkElement = wrapper.exists(".badge");
    expect(linkElement).toBe(false);
  });

  it("Should render noImage.png when there is no image", () => {
    const wrapper = mount(<Card
      key={item.artistId}
      id={item.artistId}
      name={item.name}
      artists={item.artists}
      image={""}
    />)

    const imgSrc = wrapper.find('img').prop('src');
    expect(imgSrc).toEqual('noimage.png');
  });
});

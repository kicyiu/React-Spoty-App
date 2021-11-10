import React from "react";
import { mount } from "enzyme";
import { waitFor } from '@testing-library/dom';
import { act } from "@testing-library/react";

import Search from "./Search";


const DUMMY_SEARCH_DATA = {
  artists: {
    items: [
      {
        id: "0Z8XVUAOBPM4x12wKnFHEQ",
        name: "Parker McCollum",
        type: "artist",
        images: [{ url: "artist-url" }]
      }
    ]
  }
}

describe("Search page", () => {

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  test("Search artist", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => DUMMY_SEARCH_DATA,
    });


    let wrapper
    act(() => {
      wrapper = mount(<Search />);
    });
    const searchInput = wrapper.find('.search-input');
    searchInput.simulate('change', { target: { value: 'Selena Gomez' }});
    searchInput.simulate('keyup', { key: 'S'});

    await waitFor(() => {
      wrapper.update();
      //console.log(wrapper.debug());
      const cardSelector = wrapper.find('.card');

      expect(cardSelector.exists()).toBe(true);
    });
  });
});

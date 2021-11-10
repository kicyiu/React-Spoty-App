import React from "react";
import { mount } from "enzyme";
//import { render as renderLib, screen } from "@testing-library/react";
import { waitFor } from '@testing-library/dom';
import Home from "./Home";
import { act } from "@testing-library/react";


describe("Home page", () => {
  /*test('renders releases if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => ({ albums: {
                items: [{
                    id: '5FB5E1fwFeVqpz2CCzRSve',
                    name: 'test music name',
                    type: 'artist',
                    images: [{ url: 'tes-image' }],
                    artists: []
                }]
            }}),
        });
        renderLib(<Home />);
    
        const imgElement = await screen.findByRole('img'); //by defaault there is a 1s timeout
        expect(imgElement).toBeInTheDocument();
    }); */
  
  const newReleasesData = {
    albums: {
      items: [
        {
          id: "5FB5E1fwFeVqpz2CCzRSve",
          name: "test music name",
          type: "artist",
          images: [{ url: "tes-image" }],
          artists: [],
        },
      ],
    },
  }

  const newReleasesError = {
    "error": {
        "status": 401,
        "message": "The access token expired"
    }
  }

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  test("Get and render new relieses", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => newReleasesData,
    });

    let wrapper;
    act(() => {
      wrapper = mount(<Home />);
    });
    await waitFor(() => {
      wrapper.update();
      //console.log(wrapper.debug());
      const cardSelector = wrapper.find('.card');

      expect(cardSelector.exists()).toBe(true);
    });
  });

  test('Render get new relases error', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => newReleasesError,
    });

    let wrapper;
    act(() => {
      wrapper = mount(<Home />);
    });
    await waitFor(() => {
      wrapper.update();
      const errorTextLength = wrapper.find('p').text().length;
      expect(errorTextLength).toBeGreaterThan(0);
    });
  });

  test('Loading bar should dessappear after fetching new releases', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => newReleasesData
    });

    let wrapper;
    act(() => {
      wrapper = mount(<Home />);
    });
    await waitFor(() => {
      wrapper.update();
      const loadingIsVisible = wrapper.find({ 'data-testid': 'loading' }).exists();
      expect(loadingIsVisible).toBe(false);
    });
  });
});

import React from "react";
import { mount } from "enzyme";
import { render as renderLib, screen } from "@testing-library/react";
import { waitFor } from '@testing-library/dom';
import Home from "./Home";


describe("Home component", () => {
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

  test("Get and render new relieses", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => ({
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
      }),
    });

    const wrapper = mount(<Home />);
    await waitFor(() => {
      wrapper.update();
      //console.log(wrapper.debug());
      const cardImg = wrapper.find(".card");

      expect(cardImg.exists()).toBe(true);
    });
  });
});

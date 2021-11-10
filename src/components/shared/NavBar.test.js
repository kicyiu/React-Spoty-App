import React from 'react';
import NavBar from './NavBar';
import { shallow } from "enzyme";

describe("NavBar component", () => {
    it("Should include links", () => {
        const wrapper = shallow(<NavBar />);
        const homeNavLink = wrapper.findWhere((element) => element.name() == 'NavLink' && element.text() == 'Home');
        const searchNavLink = wrapper.findWhere((element) => element.name() == 'NavLink' && element.text() == 'Search');
        expect(homeNavLink.props().to).toBe('/home');
        expect(searchNavLink.props().to).toBe('/search');
    })
})


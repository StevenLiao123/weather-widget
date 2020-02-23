import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Widget from '../components/widget';

configure({adapter: new Adapter()});
describe('<Widget /> rendering', () => {
    const jsdomAlert = window.alert;  // remember the jsdom alert
    window.alert = () => {};  // provide an empty implementation for window.alert
    it('the title should equal to test', () => {
        //@ts-ignore
        const wrapper = shallow(<Widget title="test"/>);
        const title = wrapper.find('h3');
        expect(title.text()).toBe('test');
    });
});
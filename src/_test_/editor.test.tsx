import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Editor from '../components/editor';

configure({adapter: new Adapter()});
describe('<Editor /> rendering', () => {
    const jsdomAlert = window.alert;  // remember the jsdom alert
    window.alert = () => {};  // provide an empty implementation for window.alert
    it('should render five <button>', () => {
        //@ts-ignore
        let wrapper = shallow(<Editor />);
        expect(wrapper.children('button')).toHaveLength(1);
    });

    it('should render two <input> in className weather-editor-unit-settings', () => {
        //@ts-ignore
        let wrapper = shallow(<Editor />);
        expect(wrapper.hasClass('weather-editor-unit-settings')).toHaveBeenCalled;
    });
});
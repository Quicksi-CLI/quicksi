import React from 'react';
import App from '../src/components/App';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('should render', () => {
    const app = mount(<App />);
    expect(app.text()).toContain('Hello World!');
  });
});

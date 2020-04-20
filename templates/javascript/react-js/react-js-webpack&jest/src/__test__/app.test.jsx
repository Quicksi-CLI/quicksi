import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import App from '../App';

describe('Home component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });

  it('renders correctly', () => {
    const wrapper = renderer.create(<App />).toJSON;
    expect(wrapper).toMatchInlineSnapshot(`[Function]`);
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, div);
  });
  ReactDOM.unmountComponentAtNode(div);
});

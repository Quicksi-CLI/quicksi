import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
jest.mock('axios');

describe('<App />', () => {
  it('renders correctly', async () => {
    let tree: null | renderer.ReactTestRenderer = null;

    await renderer.act(async () => {
      tree = renderer.create(<App />);
    });
    expect(tree.toJSON()!.children!.length).toBe(4);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

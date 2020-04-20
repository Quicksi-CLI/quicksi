import HomePage from '../Homepage';

describe('HomePage component', () => {
  it('should match snapshot', () => {
    const wrap = HomePage;
    expect(wrap).toMatchSnapshot();
  });
});

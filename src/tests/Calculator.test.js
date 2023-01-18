import TestRenderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

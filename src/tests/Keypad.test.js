import TestRenderer from 'react-test-renderer';
import Keypad from '../components/Keypad';

test('Keypad renders correctly', () => {
  const tree = TestRenderer.create(
    <Keypad updateCalculation={() => console.log('Calculation updated!')} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

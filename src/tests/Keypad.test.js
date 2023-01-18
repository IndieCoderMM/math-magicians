import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Keypad from '../components/Keypad';

describe('Keypad Component', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(
      // eslint-disable-next-line
      <Keypad updateCalculation={() => console.log('Calculation updated!')} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should contain 19 buttons', async () => {
    // Arrange
    render(
      // eslint-disable-next-line
      <Keypad updateCalculation={() => console.log('UpdateCalculation')} />
    );
    // Act
    const buttons = await screen.findAllByRole('button');
    // Assert
    expect(buttons).toHaveLength(19);
  });
});

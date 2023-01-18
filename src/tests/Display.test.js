import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Display from '../components/Display';

describe('Display Component', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display total value', async () => {
    // Arrange
    const total = '19999';
    render(<Display total={total} />);
    // Act
    const result = await screen.findByText(total);
    // Assert
    expect(result).toBeTruthy();
  });
});

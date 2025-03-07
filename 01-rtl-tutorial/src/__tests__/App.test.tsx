import { render, screen } from '@testing-library/react';
// Note: technically already available globally
import { test, expect } from 'vitest';
import App from '../App';

let container: HTMLElement;

beforeEach(() => {
  const rendered = render(<App />);
  container = rendered.container;
});

// Test if heading renders correctly
test('should render heading with correct text', () => {

  screen.debug();

  // Find heading by its text content
  const heading = screen.getByText('React Testing Library');

  // Verify heading exists in document
  expect(heading).toBeInTheDocument();
});

test('heading tag should be present', () => {
  // Render the App component
  // render(<App />);

  // Verify heading exists in document
  expect(screen.getByRole('heading', {name: /testing/i})).toBeInTheDocument();
  
});

test('div supposed to have class name p-8', () => {

  // Verify heading exists in document
  expect(container.firstChild).toHaveClass('p-8');
  
});

test('paragraph should have regexp together', () => {

  // Verify heading exists in document
  expect(screen.getByText(/together/i)).toBeInTheDocument();
  
});

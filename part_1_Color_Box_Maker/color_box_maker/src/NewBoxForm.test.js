import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect assertions
import NewBoxForm from "./NewBoxForm";

test("renders NewBoxForm without crashing", () => {
  render(<NewBoxForm />);

  // Check if the new box form heading is rendered
  expect(screen.getByText('New Box Form')).toBeInTheDocument();
});

test('NewBoxForm snapshot', () => {
  // Render the component
  const { asFragment } = render(<NewBoxForm />);

  // Take a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});

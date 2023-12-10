import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect assertions
import NewTodoForm from "./NewTodoForm";

test("renders NewTodoForm without crashing", () => {
  render(<NewTodoForm />);

  // Check if the new box form heading is rendered
  expect(screen.getByText('New Todo Form')).toBeInTheDocument();
});

test('NewTodoForm snapshot', () => {
  // Render the component
  const { asFragment } = render(<NewTodoForm />);

  // Take a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});

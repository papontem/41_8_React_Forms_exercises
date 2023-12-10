import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect assertions
import Todo from "./Todo";

test("renders box without crashing", () => {
	render(<Todo />);
});

test("Todo snapshot", () => {
	// Render the component
	const { asFragment } = render(<Todo />);

	// Take a snapshot of the rendered component
	expect(asFragment()).toMatchSnapshot();
});

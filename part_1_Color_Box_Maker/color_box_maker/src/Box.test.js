import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect assertions
import Box from "./Box";

test("renders box without crashing", () => {
	render(<Box />);
});

test("Box snapshot", () => {
	// Render the component
	const { asFragment } = render(<Box />);

	// Take a snapshot of the rendered component
	expect(asFragment()).toMatchSnapshot();
});

import { render } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList without crashing", () => {
	render(<TodoList />);
});

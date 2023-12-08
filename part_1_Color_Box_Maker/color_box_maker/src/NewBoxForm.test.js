import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("renders NewBoxForm without crashing", () => {
	render(<NewBoxForm />);
});

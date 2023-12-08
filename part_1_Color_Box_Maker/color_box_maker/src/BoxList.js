import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

/*
Manages the state for all boxes.
Renders multiple instances of the Box component.
Renders the NewBoxForm component.
*/
function Boxlist(params) {
	return (
		<div className="Boxlist">
			<NewBoxForm />
			<hr />
			{/* map iteration of current boxes being displayed */}
			<Box></Box>
		</div>
	);
}

export default Boxlist;

import React, { useState } from "react";
import "./NewBoxForm.css";
import NewBoxForm from "./NewBoxForm";
import "./Box.css"; 
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

/*
	- Manages the state for all boxes.
	- Renders multiple instances of the Box component.
	- Renders the NewBoxForm component.
*/
function Boxlist(props) {
	const [boxes, setBoxes] = useState([]);
	
	// Function to delete a box by ID
	const deleteBox = (boxId) => {
		setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== boxId));
	};
	
	// map iteration of current boxes being displayed 
	const renderBoxes = () => {
		return (
			<ul className="Boxlist-list">
				{boxes.map((box) => (
					<li>
						<Box
						key={box.id}
						width={box.width}
						height={box.height}
						backgroundColor={box.backgroundColor}
						deleteBox={() => deleteBox(box.id)}
						></Box>
					</li>
				))}
			</ul>
		);
	};
	// end renderBoxes

	/** Add new box object to list of boxes */
	const addBox = (box) => {
		let newBox = { ...box, id: uuidv4() };
		setBoxes((boxes) => [...boxes, newBox]);
	};
	// end addBox

	

	return (
		<div className="Boxlist">
			<NewBoxForm addBox={addBox} />
			<hr />
			{renderBoxes()}
		</div>
	);
}

export default Boxlist;

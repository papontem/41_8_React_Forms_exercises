import React, { useState } from "react";
/* 
    Renders a form that allows users to specify the width, height, and background color for a new box.
    When the form is submitted, it creates a new box with the specified properties and clears the input values.
*/
function NewBoxForm({addBox}) {
	// State for form data
	// width, height, and background color for a new box.
	const [newBoxFormData, setNewBoxFormData] = useState({
		width: "",
		height: "",
		backgroundColor: "",
	});

	// Event handler for form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewBoxFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Event handler for form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log("Form submitted:", newBoxFormData);
		addBox(newBoxFormData);

		// Clear input values after form submission
		setNewBoxFormData({
			width: "",
			height: "",
			backgroundColor: "",
		});

		// Now create the box
	};

	return (
		<div className="NewBoxForm">
			<h2>New Box Form</h2>
			{/*  */}
			<form onSubmit={handleSubmit}>
				<label>
					width:
					<input
						type="text"
						name="width"
						value={newBoxFormData.width}
						onChange={handleChange}
						required></input>
				</label>
				<br />
				<label>
					height:
					<input
						type="text"
						name="height"
						value={newBoxFormData.height}
						onChange={handleChange}
						required></input>
				</label>
				<br />
				<label>
					backgroundColor:
					<input
						type="text"
						name="backgroundColor"
						value={newBoxFormData.backgroundColor}
						onChange={handleChange}
						required></input>
				</label>
				<br />

				<button type="submit">Add New Box!</button>
			</form>
		</div>
	);
}

export default NewBoxForm;

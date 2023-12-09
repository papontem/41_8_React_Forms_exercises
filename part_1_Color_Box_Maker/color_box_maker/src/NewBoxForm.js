import React, { useState } from "react";
/* 
    Renders a form that allows users to specify the width, height, and background color for a new box.
    When the form is submitted, it creates a new box with the specified properties and clears the input values.
*/
function NewBoxForm({ addBox }) {
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
		<div className="NewBoxForm-container">
			<h2 className="NewBoxForm-title">New Box Form</h2>
			<form className="NewBoxForm" onSubmit={handleSubmit}>
				<label className="NewBoxForm-label">
					Width:
					<input
						className="NewBoxForm-input"
						type="text"
						name="width"
						value={newBoxFormData.width}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label className="NewBoxForm-label">
					Height:
					<input
						className="NewBoxForm-input"
						type="text"
						name="height"
						value={newBoxFormData.height}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label className="NewBoxForm-label">
					Background Color:
					<input
						className="NewBoxForm-input"
						type="text"
						name="backgroundColor"
						value={newBoxFormData.backgroundColor}
						onChange={handleChange}
						required
					/>
				</label>
				<br />

				<button className="NewBoxForm-btn" type="submit">
					Add New Box!
				</button>
			</form>
		</div>
	);
}

export default NewBoxForm;

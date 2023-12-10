import React, { useState } from "react";
/* 
    - Renders a form with one text input for creating a new task.
    - When the form is submitted, it creates a new Todo component.
*/
function NewTodoForm({ addTodo }) {
	// State for form data
	// width, height, and background color for a new Todo.
	const [newTodoFormData, setNewTodoFormData] = useState({
		task: ""
	});

	// Event handler for form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewTodoFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Event handler for form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form submitted:", newTodoFormData);
		addTodo(newTodoFormData);

		// Clear input values after form submission
		setNewTodoFormData({
			task: "",
		});

		// Now create the Todo
	};

	return (
		<div className="NewTodoForm-container">
			<h2 className="NewTodoForm-title">New Todo Form</h2>
			<form className="NewTodoForm" onSubmit={handleSubmit}>
				<label className="NewTodoForm-label">
					task:
					<input
						className="NewTodoForm-input"
						type="text"
						name="task"
						value={newTodoFormData.task}
						onChange={handleChange}
						required
					/>
				</label>
				<br/>

				<button className="NewTodoForm-btn" type="submit">
					Add New Todo!
				</button>
			</form>
		</div>
	);
}

export default NewTodoForm;

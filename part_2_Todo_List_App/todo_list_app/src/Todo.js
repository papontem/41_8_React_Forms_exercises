/*
    - Displays a div with the task of the todo.
    - Includes a button with the text "X" that, when clicked, removes the todo.
    - Optionally, may include additional functionality for editing or marking as complete
*/
function Todo(props) {
    const { task, deleteTodo} = props;
    console.log("Task:",task);

    const handleDeleteClick = () => {
		deleteTodo();
	};

    return (
		<div className="Todo-container">
			<div className="Todo">
				{/* I AM A TOOOODOOOOOOOO */}
                <p>{task}</p>
			</div>
			<button onClick={handleDeleteClick}>X</button>
		</div>
	);
}

export default Todo;
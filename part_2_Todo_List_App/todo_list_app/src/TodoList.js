import React, { useState } from "react";
import "./NewTodoForm.css";
import NewTodoForm from "./NewTodoForm";
import "./Todo.css"; 
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

/*
Manages the state for all todos.
Renders the NewTodoForm component.
Renders a list of Todo components.
*/
function TodoList(params) {

    const [Todos, setTodos] = useState([]);
	
	// Function to delete a todo by ID
	const deleteTodo = (todoId) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
	};
	
	// map iteration of current Todos being displayed 
	const renderTodos = () => {
		return (
			<ul className="Todolist-list">
				{Todos.map((todo) => (
					<li>
						<Todo
						key={todo.id}
						task={todo.task}
						deleteTodo={() => deleteTodo(todo.id)}
						></Todo>
					</li>
				))}
			</ul>
		);
	};
	// end renderTodos

    /** Add new todo object to list of todoes */
	const addTodo = (todo) => {
		let newTodo = { ...todo, id: uuidv4() };
		setTodos((todos) => [...todos, newTodo]);
	};
	// end addTodo
    return (
		<div className="Todolist">
			<NewTodoForm addTodo={addTodo} />
			<hr />
			{renderTodos()}
		</div>
	);
}
export default TodoList;
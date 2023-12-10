/*
    - Displays a div with a background color, width, and height based on the props.
    - Includes a button with the text "X" next to each box.
    - Utilizes a function passed down as a prop to remove the specific box when the "X" button is clicked.
*/

function Box(props) {
	const { width, height, backgroundColor, deleteBox } = props;

	// console.log("width:", width);
	// console.log("height:", height);
	// console.log("backgroundColor:", backgroundColor);

	const boxStyle = {
		width: width || "100px",
		height: height || "100px",
		backgroundColor: backgroundColor || "lightblue",
	};

	const handleDeleteClick = () => {
		deleteBox();
	};

	return (
		<div className="Box-container">
			<div className="Box" style={boxStyle}>
				{/* I AM A BOOOOOOOOX */}
			</div>
			<button onClick={handleDeleteClick}>X</button>
		</div>
	);
}

export default Box;

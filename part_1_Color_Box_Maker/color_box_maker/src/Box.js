/*
Displays a div with a background color, width, and height based on the props.
Includes a button with the text "X" next to each box.
Utilizes a function passed down as a prop to remove the specific box when the "X" button is clicked.
*/
function Box(props) {
	console.log(`props: ${props}`);
	const {width,height, backgroundColor, } = props
	console.log(width);
	console.log(height);
	console.log(backgroundColor);
	return (
		<div className="Box-container">
			<div className="Box">
				<p>lorem ipsum Dorem Dollas</p>
			</div>
			<button> X </button>
		</div>
	);
}

export default Box;

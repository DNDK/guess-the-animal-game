function Animal(props){
	let src = `${window.location.pathname}/${props.id}.png`;
	return(
		<div className = "animal" onClick = {props.onClick}>
			<img
			src = {src}
			/>
		</div>
		);
}

export default Animal;

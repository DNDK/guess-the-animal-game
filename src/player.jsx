function Player(props){
	let src = `${window.location.pathname}/playButton.png`
	return(
		<div className = "player"

		onClick = {props.onClick}
		>
			<img src = {src} />
		</div>
	)
}

export default Player;

function Player(props){
	return(
		<div className = "player"

		onClick = {props.onClick}
		>
			<img src= "/playButton.png" />
		</div>
	)
}

export default Player;

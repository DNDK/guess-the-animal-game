import React, {Component} from 'react';


import Board from './board'
import WinnerScreen from './winner-screen';


function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function SkipButton(props){
  return(
    <button onClick = {props.onClick}>SKIP</button>
  )
}

class Game extends Component{

	constructor(props){
    const len = props.rows*4
		super(props);
    let animals = [];
    for(let i = 0;i<len;i++){
      animals.push(i)
    }
    let players = [];
    for(let i = 0;i<len;i++){
      players.push(i)
    }
    animals = shuffle(animals);
    players = shuffle(players);

		this.state = {
			itemIsSelected: false,
			selectedId: null,
			items: Array(len).fill(true),
      animalsOrder: animals,
      playersOrder: players,
      level: this.props.level,
		}

	}

  gameIsOver(){
    return !this.state.items.includes(true, 0)
  }

	handlePlayerClick(i){
    let sound = new Audio(`${window.location.pathname}/${this.state.level}/${i}.mp3`);
    sound.play();

		this.setState((state)=>{
			return({
				itemIsSelected: true,
				selectedId: i,
				items: this.state.items
			});
		});

	}
	handleAnimalClick(i){

		if(this.state.itemIsSelected){
			if(this.state.selectedId === i){
        let sfx = new Audio("correct.mp3");
        sfx.play();
				this.setState((state) => {
					let items = this.state.items;
					items[i] = false;

					return({
						itemIsSelected: false,
						selectedClass: null,
						items: items
					})
				})
			}
			else{
        let sfx = new Audio("incorrect.mp3");
        sfx.play();
				this.setState((state) => {
					return({
						itemIsSelected: true,
						selectedClass: null,
						items: this.state.items
					})
				})
			}
		}
		else{
			return;
		}
	}

	render(){
    if(!this.gameIsOver()){
      return(
        <div>
          <Board items = {this.state.items}
            onPlayerClick = {i => this.handlePlayerClick(i)}
            onAnimalClick = {i => this.handleAnimalClick(i)}
            animalsOrder = {this.state.animalsOrder}
            playersOrder = {this.state.playersOrder}
            rows = {this.props.rows}
          />
        </div>
      )
    }
    else{
      return(
        <WinnerScreen canRenderGame = {this.state.level === 2 ? false : true} rows = {this.props.rows}/>
      )
    }
	}
}

export default Game;

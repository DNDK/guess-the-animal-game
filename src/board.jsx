import React, {Component} from 'react';

import Animal from "./animal";
import Player from "./player";

class Board extends Component{

  renderAnimal(i){
    if(this.props.items[i]){
      return(
        <Animal
        onClick = {()=>{this.props.onAnimalClick(i)}}
        id = {i}
        />
      );
    }else{
      return(
        <div className = "animal"></div>
      )
    }
  }

  renderPlayer(i){
    if(this.props.items[i]){
      return(
        <Player
        onClick = {()=>{this.props.onPlayerClick(i)}}
        />
      );
    }else{
      return(
        <div className = "player"></div>
      )
    }
  }

  render(){
    let renderedAnimals = [];
    let renderedPlayers = [];

    for(const i of this.props.animalsOrder){
      renderedAnimals.push(this.renderAnimal(i));
    }
    for(const i of this.props.playersOrder){
      renderedPlayers.push(this.renderPlayer(i));
    }

    let dividedAnimals = [];
    let dividedPlayers = [];

    while(renderedAnimals.length){
      dividedAnimals.push(renderedAnimals.splice(0,4));
      dividedPlayers.push(renderedPlayers.splice(0,4));
    }

    return(
      <>
      <div className = "players-block">
        {dividedPlayers.map(row=>{
          return(
            <div className = "row">{row}</div>
          )
        })}
      </div>
      <div className = "animals-block">
        {dividedAnimals.map(row=>{
          return(
            <div className = "row">{row}</div>
          )
        })}
      </div>
      </>
    )
  }
}

export default Board

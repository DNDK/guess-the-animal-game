import React, {Component} from 'react';

import Confetti from "./confetti";
import Game from "./game";

class WinnerScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      renderGame: false,
      canRenderGame: this.props.canRenderGame,
    }
  }
  changeRender(){
    this.setState({
      renderGame: true,
    })
  }
  render(){
    console.log(this.state)
    let button = this.state.canRenderGame ? (<a onClick = {()=>{this.changeRender()}} className = "button">Следующий уровень</a>):null;

    if(this.state.renderGame){
      return(
        <Game level = {2} rows = {this.props.rows}/>
      )
    }
    else{
      return(
        <>
        <Confetti />
        <center>
        <a href = "/" className = "button">Главная</a>
        <a href = {window.location.pathname} className = "button">Заново</a>
        {button}</center>
        </>
      )
    }
  }
}
export default  WinnerScreen;

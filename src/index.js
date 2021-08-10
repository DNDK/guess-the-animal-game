import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Game from "./game";

const StartPage = ()=>{
  return(
    <>
    <center>
      <a href = "/wild" className = "button">Дикие животные</a>
      <a href = "/home" className = "button">Домашние животные</a>
      <a href = "/homebirds" className = "button">Домашние птицы</a>
      <a href = "/wildbirds" className = "button">Дикие птицы</a>
    </center>
    <center>
      <img src = "logo.png" className = "logo"/>
    </center>

    </>
  )
}

const Pages = ()=>{
  return(
    <Router>
      <Switch>
        <Route exact path  = "/" >
          <StartPage />
        </Route>
        <Route path = "/wild"><Game level = {1} rows = {1}/></Route>
        <Route path = "/home" ><Game level = {1} rows = {2}/></Route>
        <Route path = "/wildbirds"><Game level = {1} rows = {2}/></Route>
        <Route path = "/homebirds"><Game level = {1} rows = {1}/></Route>
      </Switch>
    </Router>
  )
}

function App(props){
  return(
    <Pages />
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

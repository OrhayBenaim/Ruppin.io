import React, { Component } from 'react';
import './App.css';
import Login from './Component/Fields';
import CharSelect from './Component/CharSelect';
import Game from './Component/GameLogic';
import {BrowserRouter , Route} from 'react-router-dom';

class App extends Component {



  render() {
    return (
        <BrowserRouter>
            <div>
              <Route exact path='/' component={Login}/>
              <Route path='/charselect' component={CharSelect}/>
              <Route exact path='/game' component={Game}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;

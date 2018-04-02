import React, { Component } from 'react';
import Login from './Component/Login';
import Register from './Component/Register';
import CharSelect from './Component/CharSelect';
import Game from './Component/GameLogic';
import {BrowserRouter , Route} from 'react-router-dom';

class App extends Component {



  render() {
    return (
        <BrowserRouter>
            <div>
              <Route exact path='/' component={Login}/>
              <Route path ='/register' component={Register} />
              <Route path='/charselect' component={CharSelect}/>
              <Route exact path='/game' component={Game}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;

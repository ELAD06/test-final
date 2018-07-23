import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import ItemDetails from '../ItemDetails';
import NoMatch from '../NoMatch';
import Home from '../Home';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            path="/" 
            component={Home}
            exact
          />

          <Route 
            path="/items"
            exact
            component={Home}
          />

          <Route 
            path="/items/:id"
            exact
            component={ItemDetails}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;

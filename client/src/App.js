import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing/index';
import Roulette from "./pages/Roulette/index";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = '/' component = {Landing}/>
            <Route exact path = '/changeback' component = {Roulette}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;

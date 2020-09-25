import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import TestPage from "./pages/TestPage";
import Landing from './pages/Landing';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = '/' component = {Landing}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestPage from "./pages/TestPage";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = '/' component = {TestPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;

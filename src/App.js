import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Front from "./Front";
import GamePage from "./GamePage";

const App = appProps => (
    <Router>
        <div className="App">
                <Switch>
                    <Route exact name="Front" path="/" component={Front} />
                    <Route exact name="GamePage" path="/gamepage" component={GamePage} />
                </Switch>
            <hr/>
        </div>
    </Router>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import './../sass/style.scss'; // adres do głównego pliku SASS
import Playground from './playground';
import Memory from './memory'

const App = () => {

    return(
        <Router>
            
            <Switch>
                <Route exact path="/" component={Playground} />
                <Route exact path="/memory" component={Memory} />
            </Switch>
        </Router>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <>
            <App />
        </>,
        document.getElementById('app')
    )
})


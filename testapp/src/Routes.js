import React, { Component } from "react";
import { Router, Switch, Route,BrowserRouter,NavLink } from "react-router-dom";

import Apis from './Apis';
import stateButton from './stateButton';
import Statesuse from './Statesuse';
export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
	
	<header>
	<NavLink to="/Apis" exact > Home </NavLink>
	<NavLink to="/stateButton"> Form </NavLink>
	<NavLink to="/Statesuse"> Use States </NavLink>
	</header>
                    <Route path="/Apis" exact component={Apis} />
                    <Route path="/stateButton" component={stateButton} />
                    <Route path="/Statesuse" component={Statesuse} />
                
            </BrowserRouter>
        )
    }
}

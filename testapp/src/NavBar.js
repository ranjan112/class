import React, { Component } from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
import Navitem from './Navitem';
import Variable from './Variable';
import FormExample from './FormExample';
import StateExample from './StateExample';
import SimpleList from './SimpleList';
class NavBar extends React.Component {
constructor(props)
{
super(props);
}
render() {
return (
<nav>
<ul>
<NavLink to="/" exact >Home</NavLink>
	<NavLink to="/formexample">Form</NavLink>
<Navitem item="Education" tolink="/SimpleList" ></Navitem>
</ul>
</nav>
)
}
}
export default NavBar
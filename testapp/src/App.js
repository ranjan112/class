import React from 'react';
import Variable from './Variable';
import FormExample from './FormExample';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Apis from './Apis';
import stateButton from './stateButton';
import Statesuse from './Statesuse';
import StateExample from './StateExample';
import SimpleList from './SimpleList';
import DynamicList from './DynamicList';
import NavBar from './NavBar';
import Routes from './Routes';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
/* <StateExample fullnames="Shilpa Gupta"></StateExample>
	<SimpleList ></SimpleList>
	<DynamicList ></DynamicList> */
// or less ideally

function App() {
  return (
    <div className="App" class="active">
	<BrowserRouter>
	
            <SignUp />
        {/* <Routes/> */}
	{/* <header>
	<NavLink to="/Apis" exact > Home </NavLink>
	<NavLink to="/stateButton"> Form </NavLink>
	<NavLink to="/Statesuse"> Use States </NavLink>
	</header> */}
	 {/* <Route path="/SignIn" exact component={SignIn}/>
	  <Route path="/SignUp" exact component={SignUp}/>
	  <Route path="/Routes" exact component={Routes}/>
	 <Route path="/Apis" exact component={Apis}/>
	  <Route path="/stateButton" exact component={stateButton}/>
	  <Route path="/Statesuse" exact component={Statesuse}/> */}
	   
	   </BrowserRouter>
    </div>
  );
}

export default App;

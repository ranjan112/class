import React from 'react';
import {Link} from 'react-router-dom'
import { Router , Route, useHistory} from 'react-router-dom'
import {browserHistory,hashHistory} from 'react-router';
export default class Variable extends React.Component {
	handleClick = () => {
       browserHistory.push('/stateExample');
    };
	render() {
   const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    return (
	<React.Fragment>
	<div>
      <img src={url} style={{width: 350}} alt='Image of Golden Gate Bridge' />
	  </div>
    <div>
      <img src={url} style={{width: 350}} alt='Image of Golden Gate Bridge' />
	  </div>
	  <img src={url} style={{width: 350}} alt='Image of Golden Gate Bridge' />
	  <div>
                <button onClick={this.handleClick} type="button">Click</button>
            </div>
	  </React.Fragment>
	  
    );
  }
}

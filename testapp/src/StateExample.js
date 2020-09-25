import React from 'react';
import Button from 'react-bootstrap/Button';

// or less ideally

  export default class StateExample extends React.Component {
	 constructor() {
    super();
    this.initialstate ={ valueName: '', 
	valueEmail: '' ,count:0}

   this.state=this.initialstate;
   this.changeName = this.changeName.bind(this);
  }

  changeName = () => {
    this.setState({count:this.state.count + 1})
  }

  
  
	render() {
		const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }; 
		return(
		<div style={mystyle}>
		<h1 style={{color: "red"}}>{this.state.valueName}</h1>
		<h1>Hello from {this.props.fullnames}</h1>
		<button
          type="button"
          onClick={this.changeName}
        >Change Name</button>
		</div>
		)
	}
 }
  
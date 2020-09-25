import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
export default class FormExample extends React.Component {
    constructor(props) {
    super(props);
    this.state ={ valueName: '', valueEmail: '' , a: props.fullnamess + " !"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: [event.target.value]});
  }

  handleSubmit(event) {
    alert('A name and email was submitted: ' + this.state.valueName+" " + this.state.valueEmail+" "+this.state.a);
    event.preventDefault();
  }
  
  
	render() {
		return(
		<form  onSubmit={this.handleSubmit}>
		<div >
		<h1>{this.state.a}</h1>
        <label>
          Name:
          <input type="text" value={this.state.valueName} name="valueName" onChange={this.handleChange} />
        </label>
		</div>
		<div>
       <label>
          Email:
          <input type="Email" value={this.state.valueEmail} name="valueEmail" onChange={this.handleChange}  />
        </label>
		</div>
       
      <div>
			<Button variant="primary" className="mr-2" onClick={ this.handleSubmit}>Submit</Button>
			</div>
			</form>
		)
	}
 }
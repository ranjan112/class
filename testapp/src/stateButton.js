import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class stateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valname: '',
    age:'',
    email:'',
    password:'',
    cpassword:''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({[event.target.name]: [event.target.value], [event.target.age]: [event.target.value],
     [event.target.email]:[event.target.value],[event.target.password]:[event.target.value],[event.target.cpassword]:[event.target.value]});
  }
  

  handleSubmit(event) {
    alert('A name and email was submitted: ' + this.state.valname+" " + this.state.age+" "+this.state.email
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group col-md-6">
        <label>
          Name:
          <div class="col-sm-6">
          <input type="text" name="valname" value={this.state.valname} onChange={this.handleChange} />
        </div>
        </label>
        </div>
        <div class="form-group col-md-6">
        <label>
          Age:
          <div class="col-sm-6">
          <input type="text" name="age" value={this.state.age} onChange={this.handleChange}  />
          </div>
        </label>
        </div>
        <div class="form-group col-md-6">
        <label>
          Email:
          <div class="col-sm-6">
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
        </label>
        </div>
        <div class="form-group col-md-6">
        <label>
          password:
          <div class="col-sm-6">
          <input type="password"  name="password" value={this.state.password}  onChange={this.handleChange} />
          </div>
        </label>
        </div>
        <div class="form-group col-md-6">
        <label>
          Confirm password:
          <div class="col-sm-6">
          <input type="password"  name="cpassword" value={this.state.cpassword} onChange={this.handleChange} />
          </div>
        </label>
        </div>
<div class="form-check">
  <input class="form-check-input"  style = {{padding:10}} type="checkbox" value="" id="defaultCheck2" disabled/>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" style = {{padding:10}} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
        <div style = {{padding:10}}>
        <div class="col-sm-6">
			<Button  variant="primary" className="mr-2" onClick={ this.handleSubmit}>Submit</Button>
      </div>
			</div>
      </form>
    );
  }
}
export default stateButton;
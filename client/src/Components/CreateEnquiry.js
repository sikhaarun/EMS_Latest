import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import {mapDispatchLogin} from '../Reducers/Action';

class CreateEnquiry extends Component {
  constructor(props){
    super(props);
    this.state={alert:''}
    props.Login();
    if(!localStorage.getItem('JWT')) this.props.history.push('/login')
  }
  onSubmit=(ev)=>{
    ev.preventDefault();
    let enquiry={};
    
    for(let i in ev.target.elements){
        if(ev.target.elements[i].value!==undefined && ev.target.elements[i].value!==''){
            enquiry[ev.target.elements[i].name]=ev.target.elements[i].value;
        }
    }
    console.log(enquiry)    
    
    var headers = {
        'Content-Type': 'application/json',
        'jwt': localStorage.getItem('JWT')
    }    

    axios.post('/createEnquiry',enquiry,{headers:headers})
    .then(res=>{
      if(res.data=='Enquiry Submitted')
        this.props.history.push('/')
    });    
  }

  render() {
    return (
      <div className="container cat">
        <br/>
        <br/>
        <h1>Create Enquiry</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          Name<input type="text" name="name" required className="form-control"/>
          Email   <input type="text" name="email"  required  className="form-control"/>
          phone   <input type="text" name="phone"  required  className="form-control"/>
          product   <input type="text" name="product"  required  className="form-control"/>
          type   <input type="text" name="type"  required  className="form-control"/>
          location   <input type="text" name="location"  required  className="form-control"/>
          purchasePlan   <input type="text" name="purchasePlan"  required  className="form-control"/>
          <br/>
          <div hidden={!this.state.alert} className="alert alert-danger" role="alert">{this.state.alert}</div>
          <button className="form-control btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,mapDispatchLogin)(CreateEnquiry);

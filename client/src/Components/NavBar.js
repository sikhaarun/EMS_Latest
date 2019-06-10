import React, { Component } from 'react';
import {Link , NavLink,withRouter} from 'react-router-dom';


class NavBar extends Component {
  logout=()=>{localStorage.removeItem('JWT');this.props.history.push('/login');}
  render() {
  return (<nav hidden={!localStorage.getItem('JWT')} className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Enquiry Management System</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link btn" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/createEnquiry">Create Enquiry</NavLink>
                  </li>                  
              </ul>
            </div>
            <button className="btn" onClick={()=>this.logout()}>Logout</button>
          </div>
    </nav>)
  }
}
export default withRouter(NavBar);

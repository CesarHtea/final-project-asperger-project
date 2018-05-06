import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  logout = (e) => {
    request
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        const loggedOut = response.body.loggedOut
        this.props.fnActualizarStatePorUserLogout(loggedOut)
      })
      .catch(function(e){
        console.log(e)
      })
  }

    render() {
    return (
      <div className='header-container'>
        <div className='header-user-container'>{this.props.currentUser}</div>
        <div className='header-botones-container'>
          <div className={this.props.displaynone}>
            <RaisedButton
              className='header-button'
              label="Menú"
              onClick={this.handleToggle}
            />
          </div>
          {/* <Link to='/userLogIn' className='no-decoration-text'>
            <RaisedButton
              className='header-button'
              label="Sign In / Log In"
            />
          </Link> */}
          <div className={this.props.displaynone}>
            <RaisedButton
              className='header-button'
              label="Log Out"
              onClick={this.logout}
            />
          </div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <Link to='/public' className='no-decoration-text'><MenuItem onClick={this.handleClose}>Public</MenuItem></Link>
            <Link to='/protected' className='no-decoration-text'><MenuItem onClick={this.handleClose}>Protected</MenuItem></Link>
            <Link to='/protectedVault' className='no-decoration-text'><MenuItem onClick={this.handleClose}>ProtectedVault</MenuItem></Link>
            <Link to='/allElementsFromAPI' className='no-decoration-text'><MenuItem onClick={this.handleClose}>AllElementsFromAPI</MenuItem></Link>
            <Link to='/newElement' className='no-decoration-text'><MenuItem onClick={this.handleClose}>NewElement</MenuItem></Link>
            {/* <Link to='/registeredUsers' className='no-decoration-text'><MenuItem onClick={this.handleClose}>RegisteredUsers</MenuItem></Link> */}
            {/* <Link to='/newUserSignIn' className='no-decoration-text'><MenuItem onClick={this.handleClose}>NewUserSignIn</MenuItem></Link> */}
            {/* <Link to='/currentUser' className='no-decoration-text'><MenuItem onClick={this.handleClose}>CurrentUser</MenuItem></Link> */}
            
          </Drawer>
        </div>  
      </div>
    );
  }
}

export default Header;

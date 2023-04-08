import React, { Component } from 'react';

import { Link} from 'react-router-dom';




class LoginScreen extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleLoginClick = () => 
  {
    // handle login logic here
    const {username,password}=this.state;
    if(username=='praveen')
    {
      if(password =='Admin@123')
      {
        console.log("executing--------->");
        // this.props.navigate('/');
        
        
      }
    }

    
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width:'200vh'
      }}>
        <div style={{
          border: '1px solid green',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height:'30vh',
          width:'60vh'
        }}>
          <label style={{ marginBottom: '20px', fontFamily: 'Arial', fontSize: '16px' }}>
            Username
            
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} style={{marginLeft:'10px', marginTop: '5px', fontFamily: 'Arial', fontSize: '16px' }} />
          </label>
          <label style={{ marginBottom: '20px', fontFamily: 'Arial', fontSize: '16px' }}>
            Password
            
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} style={{marginLeft:'10px', marginTop: '5px', fontFamily: 'Arial', fontSize: '16px' }} />
          </label>
          <button onClick={this.handleLoginClick} style={{ fontFamily: 'Arial', fontSize: '16px', padding: '10px 20px' }}>Login</button>
        </div>
      </div>
    );
  }
}

export default ( LoginScreen);

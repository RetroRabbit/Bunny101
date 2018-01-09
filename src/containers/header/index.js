import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import imageProfile from './ic_account_circle_black_48dp.png'
import imageAbout from './ic_schedule_black_48dp.png'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import './index.css'

class HelloMessage extends React.Component {

	
  render() {
    return (
          <div id="header">
		<button className="buttonRectangular">NEW CHAT</button>
		
		<button className="buttonRectangular">NEW GROUP</button>
		
		<div id="accountSettings">
			<p id="chatName">Eddie Logan</p>
			
			
			<div className="dropDown">
				<button className="buttonCircular" id="preferences">
					<img src={imageProfile} height="100%" width="100%"></img>
				</button>
				<div className="dropDownContent">
					<a href="#">Settings</a>
					<a href="#">Logout</a>
				</div>
			</div>
			
			<button className="buttonCircular">
				<img src={imageAbout} alt={"logo"} height="100%" width="100%"></img>
			</button>

		</div>
		
    </div>
    );
  }
}



export default HelloMessage;
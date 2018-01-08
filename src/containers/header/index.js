import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import imageProfile from './ic_account_circle_black_48dp.png'
import imageAbout from './ic_schedule_black_48dp.png'
import './index.css'

const Header = () => (
    <div id="header">
		<button id="buttonChat">NEW CHAT</button>
		
		<button id="buttonGroup">NEW GROUP</button>
		
		<div id="accountSettings">
			<p id="chatName">Eddie Logan</p>
			
			<button id="buttonProfile">
				<img src={imageProfile} height="100%" width="100%"></img>
			</button>
			
			<button id="buttonAbout">
				<img src={imageAbout} alt={"logo"} height="100%" width="100%"></img>
			</button>
		</div>
		
    </div>
)

export default Header;
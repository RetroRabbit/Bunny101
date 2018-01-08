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
		<button class="buttonRectangular">NEW CHAT</button>
		
		<button class="buttonRectangular">NEW GROUP</button>
		
		<div id="accountSettings">
			<p id="chatName">Eddie Logan</p>
			
			<button class="buttonCircular">
				<img src={imageProfile} height="100%" width="100%"></img>
			</button>
			
			<button class="buttonCircular">
				<img src={imageAbout} alt={"logo"} height="100%" width="100%"></img>
			</button>
		</div>
		
);

export default Header;

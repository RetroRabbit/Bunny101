import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'

import './index.css'

const Header = () => (
    <div id="header">
	
		<div class="rectangle-1">
			<p class="btnft" >NEW CHAT</p>
		</div>
		
		<div class="rectangle-2">
			<p class="btnft">NEW GROUP</p>
		</div>
		
		<div id="account-settings">
			
			<p class="chatname">Eddie Logan</p>

			<div class="account-square-1">
				<p class="acsq-1">11</p>
			</div>
		
			<div class="account-square-2">
				<p class="acsq-2">22</p>
			</div>
			
		</div>
		
    </div>
)

export default Header;
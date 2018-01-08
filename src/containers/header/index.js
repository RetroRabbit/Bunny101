import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'

import _profileimg1 from './ic_account_circle_black_48dp.png'
import _profileimg2 from './ic_schedule_black_48dp.png'


import './index.css'

const Header = () => (
    <div id="header">
	
		<div class="rectangle-1">
			<p id="btn-chat" >NEW CHAT</p>
		</div>
		
		<div class="rectangle-2">
			<p id="btn-group">NEW GROUP</p>
		</div>
		
		<div id="account-settings">
			
			<p class="chatname">Eddie Logan</p>

			<div class="account-square-1">
				<img src={_profileimg1} alt={"logo"} height="100%" width="100%"></img>
			</div>
		
			<div class="account-square-2">
				<img src={_profileimg2} alt={"logo"} height="100%" width="100%"></img>
			</div>
			
		</div>
		
    </div>
)

export default Header;
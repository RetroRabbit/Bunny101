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
	
		<button class="rectangle-1">
			NEW CHAT
		</button>
		
		<button class="rectangle-2">
			NEW GROUP
		</button>
		
		<div id="account-settings">
			
			<p class="chatname">Eddie Logan</p>

			<button id="btn-square1">
				<img src={_profileimg1} height="100%" width="100%"></img>
			</button>
			
			<button id="btn-square1">
				<img src={_profileimg2} alt={"logo"} height="100%" width="100%"></img>
			</button>
		</div>
		
    </div>
)

export default Header;
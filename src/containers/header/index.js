import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'

import './index.css'

const Header = () => (
    <div>
	
		<div class="rectangle-1">
			<p class="btnft" >NEW CHAT</p>
		</div>
		
		<div class="rectangle-2">
			<p class="btnft">NEW GROUP</p>
		</div>
		<p class="headerf">Eddie Logan</p>
    </div>
)

export default Header;
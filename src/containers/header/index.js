import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import imageProfile from './ic_account_circle_black_48dp.png'
import imageAbout from './ic_schedule_black_48dp.png'
import {
    new_Chat
} from '../../modules/chats'

import './index.css'

const Header = (props) => (
    <div id="header">
		<button class="buttonRectangular" onClick={props.new_Chat}>NEW CHAT</button>

		<button class="buttonRectangular">NEW GROUP</button>

		<div id="accountSettings">
			<p id="chatName">Eddie Logan {}</p>

			<button class="buttonCircular">
				<img src={imageProfile} height="100%" width="100%"></img>
			</button>

			<button class="buttonCircular">
				<img src={imageAbout} alt={"logo"} height="100%" width="100%"></img>
			</button>
		</div>
	</div>
);

//export default Header;
const mapStateToProps = (state) => ({
    numChats: state.chats.numChats,
    NewChat: state.chats.NewChat
})

const mapDispatchToProps = dispatch => bindActionCreators({
	new_Chat
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)

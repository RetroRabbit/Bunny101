import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import imageProfile from './user.png'
import {
    new_Chat
} from '../../modules/chats'
import imageAbout from './Icon.png'
import FaSearch from 'react-icons/lib/fa/search';

import './index.css'

class HelloMessage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: false, image: this.props.profilePic, mail : this.props.email
		}
    }

    render() {
		let $ProfileImage = null;
		if(this.state.image == 0)
		{
			$ProfileImage = (<img src={imageProfile} height="100%" width="100%" class="profileImg"></img>);
		} else {
			$ProfileImage = (<img src={this.state.image} height="100%" width="100%" class="profileImg"></img>);
		}

        return (
        	<div id="header">
        		<div className="dropDown">
        			<button className="buttonRectangular" id="chatButton" onClick={this.props.new_Chat}>NEW CHAT</button>
        			{/*<div className="dropDownContent">
        				<form action="" class="chatSearchForm">
        					<input type="text" placeholder="Search..." name="search"/>
        					<button type="submit"><FaSearch /></button>
        				</form>
		</div>*/}
        		</div>

        		<div className="dropDown">
        			<button className="buttonRectangular" id="groupButton">NEW GROUP</button>
        			{/*<div className="dropDownContent">
        				<form action="" class="groupSearchForm">
        					<input type="text" placeholder="Search..." name="search"/>
        					<button type="submit"><FaSearch /></button>
        				</form>
	</div>*/}
        		</div>

        		<div id="accountSettings">
        			<p id="chatName">{this.state.mail}</p>
        			<div className="dropDown">
        				<button className="buttonCircular" id="preferences">
        					{$ProfileImage}
        				</button>
        				<div className="dropDownContent">
        					<a href="#" onClick={this.props.changeToSettings}>Settings</a>
        					<a href="#" onClick={this.props.changeToLogin}>Logout</a>
        				</div>
        			</div>
        			<div className="buttonCircular">
        				<img src={imageAbout} alt={"logo"} height="136%" width="136%" class="logoImg"></img>
        			</div>
        		</div>
            </div>
        );
    }
}

//export default Header;
const mapStateToProps = (state) => ({
    numChats: state.chats.numChats,
	NewChat: state.chats.NewChat,
	profilePic: state.chats.profilePic,
	email : state.users.email
})

const mapDispatchToProps = dispatch => bindActionCreators({
	new_Chat,
	changeToSettings: () => push('/settings'),
	changeToLogin: () => push('/login')
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HelloMessage)

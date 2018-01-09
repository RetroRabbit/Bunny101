import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import imageProfile from './ic_account_circle_black_48dp.png'
import {
    new_Chat
} from '../../modules/chats'
import imageAbout from './ic_fiber_manual_record_black_48dp.png'
import FaSearch from 'react-icons/lib/fa/search';

import './index.css'

class HelloMessage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: false
        }
    }

    render() {
        return (
        	<div id="header">
        		<div className="dropDown">
        			<button className="buttonRectangular" id="chatButton" onClick={this.props.new_Chat}>NEW CHAT</button>
        			<div className="dropDownContent">
        				<form action="" class="chatSearchForm">
        					<input type="text" placeholder="Search..." name="search"/>
        					<button type="submit"><FaSearch /></button>
        				</form>
        			</div>
        		</div>

        		<div className="dropDown">
        			<button className="buttonRectangular" id="groupButton">NEW GROUP</button>
        			<div className="dropDownContent">
        				<form action="" class="groupSearchForm">
        					<input type="text" placeholder="Search..." name="search"/>
        					<button type="submit"><FaSearch /></button>
        				</form>
        			</div>
        		</div>

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
)(HelloMessage)

import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile_Pic from './user.png'
import FontAwesome from 'react-fontawesome'
import Header from '../header'

import FaPencil from 'react-icons/lib/fa/pencil';
import "./index.css"

class Settings extends React.Component {

constructor(props){
    super(props)
    this.state={
        active: false, image: this.props.profilePic
    }
    console.log( this.props);
}

render() {
    let $ProfileImage = null;

if(this.state.image == '0' || this.props.profilePic == undefined)
{
  $ProfileImage = (<div class="profile-pic"><img src={Profile_Pic} ></img></div>);
} else {
  $ProfileImage = (<div class="profile-pic-selected"><img src={this.props.profilePic} class="profPic" ></img></div>);
}
	render() {
		return (
			    <div className="settings">
        <div className="header headSpace">
            <Header />
        </div>
        <div className="settings-wrapper">
            <div className="settings-content">
                    <div class="profile-pic-container">
                        {$ProfileImage}                               
                    </div>
                    <div className="user-details">
                        <div className="user-name">
                            <h1 id="accountName">James Jones</h1>
                        </div>
                        <div className="user-email">
                            <h3 id="accountEmail">james.jones@gmail.com 
								<h3 id="editPencil" onClick={
									() => this.props.openForm()}>
									<FontAwesome name='pencil'/>
								</h3>
							</h3>
                        </div>		
						
                    </div>
                    <div className="controls" onClick={
						() => this.props.changeToBody()
					}
					><button id="buttonDone">DONE</button>
                    </div>
            </div>
        </div>
    </div>
		);
  }
}

const mapStateToProps = (state) => ({
    profilePic: state.chats.profilePic
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToBody: () => push('/body')
}, dispatch)

export default connect(
    mapDispatchToProps
)(Settings)
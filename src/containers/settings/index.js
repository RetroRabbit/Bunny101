import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile_Pic from './user.png'
import FontAwesome from 'react-fontawesome'
import Header from '../header'
import FaPencil from 'react-icons/lib/fa/pencil';
import {
    refactor_user,
} from '../../modules/users'
import "./index.css"

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: false,
            image: this.props.profilePic,
            userName: this.props.firstName,
            userEmail: this.props.email,
        }
        console.log( this.props);
    }
    handleSaveUserDetails(event) {
        event.preventDefault();
        //call function to save data to db
        this.props.changeToBody();
        this.props.refactor_user({
            name: this.state.userName,
            email: this.state.userEmail,
            profPic: this.state.image,
        })
    }

    handleNameChange(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log("saving name data");
            let tag =  document.getElementById("accountName");
            tag.setAttribute("contenteditable", false);
            var name = tag.innerText;
            this.setState({
                userName: name,
            })
        }

    }

    handleEmailChange(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log("saving email data");
            let tag =  document.getElementById("accountEmail");
            tag.setAttribute("contenteditable", false);
            var email = tag.innerText;
            this.setState({
                userEmail: email,
            })
        }
    }

    onClickName(e){
        e.preventDefault();
        let tag =  document.getElementById("accountName");
        tag.setAttribute("contenteditable", true);
    }

    onClickEmail(e){
        e.preventDefault();
        let tag =  document.getElementById("accountEmail");
        tag.setAttribute("contenteditable", true);
    }

    render() {
        let $ProfileImage = null;

		if(this.state.image == '0' || this.props.profilePic == undefined)
		{
			$ProfileImage = (<div className="profile-pic"><img src={Profile_Pic} height="100%"></img></div>);
		} else {
			$ProfileImage = (<div className="profile-pic-selected"><img src={this.props.profilePic} height="100%"className="profilePicture" ></img></div>);
		}

        return (
            <div className="settings">
                <div className="header headSpace">
                    <Header />
                </div>

                <div className="settingsWrapper">
                    <div className="settingsContent">
                        <div className="profile-pic-container">
                            {$ProfileImage}
                        </div>
                        <div className="userDetails">
                            <div className="userName">
                                <h1 id	="accountName"
                                    contentEditable="false"
                                    onKeyPress={(e) => this.handleNameChange(e)}
                                    onClick={(e) => this.onClickName(e)}
                                >
                                        {this.state.userName}
                                </h1>
                            </div>

                            <div className="userEmail">
                                <h3 id="accountEmail"
                                    contentEditable="false"
                                    onKeyPress={(e) => this.handleEmailChange(e)}
                                    onClick={(e) => this.onClickEmail(e)}
                                    >
                                    {this.state.userEmail}
                                </h3>
                            </div>
                            <div className="controls" onClick={(e) => this.handleSaveUserDetails(e)}>
                                    <button id="buttonSubmit">DONE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profilePic: state.chats.profilePic,
    firstName: state.users.firstName,
    email: state.users.email,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToBody: () => push('/body'),
    refactor_user,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

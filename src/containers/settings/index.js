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
import {
    save_Profile_Pic
} from '../../modules/chats'
import "./index.css"

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: false,
            file: '', 
            userName: this.props.firstName,
            userEmail: this.props.email
        }
        console.log( this.props);
    }

    handleImageChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file
            });
            this.props.save_Profile_Pic(reader.result);
        }
        if(file)
            reader.readAsDataURL(file)
    }

    handleSaveUserDetails(event) {
        event.preventDefault();
        //call function to save data to db
        this.props.changeToBody();
        this.props.refactor_user({
            name: this.state.userName,
            email: this.state.userEmail
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
		if(this.props.profilePic == '0' || this.props.profilePic == undefined)
		{
			$ProfileImage = (<div className="profile-pic"><img src={Profile_Pic} height="100%"></img></div>);
		} else {
			$ProfileImage = (<div className="profile-pic-selected"><img src={this.props.profilePic} height="100%" id="profPic"className="profilePicture" ></img></div>);
        }

        return (
            <div className="settings">
                <div className="header headSpace">
                    <Header />
                </div>

                <div className="settingsWrapper">
                    <div className="settingsContent">
                        <div className="profile-pic-container">
                            <input id="f02" class="btnProfilePic" type="file" placeholder="+" onChange={(e)=>this.handleImageChange(e)}/>
                            <div id="alignBtn">
                                <label class="changePic" htmlFor="f02"></label>                                       
                            </div>
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
    save_Profile_Pic
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

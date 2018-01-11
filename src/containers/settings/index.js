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
    refactor_name,
    refactor_email
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
    }
    handleNameChange(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log("saving data");
            let tag =  document.getElementById("accountName");
            tag.setAttribute("contenteditable", false);
            var name = tag.innerText;
            //this.props.refactor_name(name);
            this.setState({
                userName: name,
            })
        }

    }

    onClickName(e)
    {
        e.preventDefault();
        let tag =  document.getElementById("accountName");
        tag.setAttribute("contenteditable", true);
    }

    onClickEmail(e)
    {
        e.preventDefault();
        let tag =  document.getElementById("accountEmail");
        tag.setAttribute("contenteditable", true);
    }

    handleEmailChange(e){
        e.preventDefault();
        let email = e.target.value.toString();
        this.props.refactor_email(email);
        this.setState({
            userEmail: email,
        })
    }
    makeEditable(e){
        e.preventDefault();

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
                                        onKeyPress={(e) => this.handleNameChange(e)}
                                        onClick={(e) => this.onClickEmail(e)}
                                        >
                                        {this.state.userEmail}
                                    </h3>
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
    refactor_name,
    refactor_email,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

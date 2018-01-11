import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile_Pic from './user.png'
import FontAwesome from 'react-fontawesome'
import Header from '../header'

import {refactorName, refactorEmail} from '../../modules/refactor'

import FaPencil from 'react-icons/lib/fa/pencil';
import "./index.css"

class Settings extends React.Component {
	
    constructor(props) {
    super(props);
    this.state = {
        formValues: {},
        userName: this.props.name,
        userEmail: this.props.email
    };

    
  }

  state = {
    refactorName:"",
    refactorEmail:""
};
    
  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
}


handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formValues);
    
    //
    

    if(this.state.formValues.name != null && this.state.formValues.email != null){
        alert(this.state.formValues.name +" "+ this.state.formValues.email);
        //this.props.name = this.state.formValues.name;
        //this.props.email = this.state.formValues.email;

        
    }
    else{
        alert("values cannot be empty");
    }
} 

	render() {
		return (
			    <div className="settings">
        <div className="header headSpace">
            <Header />
        </div>
        <div className="settings-wrapper">
            <div className="settings-content">
            
                    <div className="profile-pic-container">
                        <img src={Profile_Pic} alt="User Profile Picture" height="200px"></img>
                    </div>
            
                    <div className="userDetails">
                    
                        <h1 id="accountName">{this.state.userName}</h1>
                        <h3 id="accountEmail">{this.state.userEmail}</h3>
                    </div>

                    <form onSubmit={this.handleSubmit.bind(this)}>
                <label> Name:
                    <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </label><br />
                <label> Email:
                    <input type="text" name="email" placeholder="Email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
                </label><br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
           </form>

                    <div className="controls" onClick={
                            () => this.props.changeToBody()
					   }><button id="buttonAction" hidden>EDIT</button>
                    </div>
            </div>
        </div>
    </div>
		);
  }
  

}
const mapStateToProps = state => ({
    name: state.refactor.name, 
    email: state.refactor.email
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    refactorName, refactorEmail,
    changeToBody: () => push('/body')
	}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
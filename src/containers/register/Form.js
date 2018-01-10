import React from 'react'
import { Route, Link} from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addUser} from "../../modules/users"
import Register from '../register'
import Body from '../body'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { orange500, blue500, blue100, fullWhite } from 'material-ui/styles/colors';
import "./index.css"

const styles = {
    floatingLabelStyle: {
        color: fullWhite,
    },
};

 class Form extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      };
      
    constructor(props)
    {
        
        super(props);
    }

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.firstName.length < 1) {
      isError = true;
      errors.firstNameError = "Required";
    }
    
    else if (this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email";
    }
    
    else if (this.state.password.length < 1) {
        isError = true;
        errors.passwordError = "Required";
    }
    else
    {
        isError = false;
    }
    
    if(!isError)
    {
        this.props.addUser({firstName: this.state.firstName,
              firstNameError: "",
              email: this.state.email,
              emailError: "",
              password: this.state.password,
              passwordError: ""});

        this.props.changeToRegisterProfilePic();
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        firstName: "",
        firstNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
      this.props.onChange({
        firstName: "",
        email: "",
        password: ""
      });
    }
  };

  render() {
    return (
        <div class="registerForms">
        <div class="heading1">
            <p class="stepThree">Step One</p>  
            <p class="firstChat">THE BASICS</p>     
        
            <div class="theForm1">
                <form>
                    <MuiThemeProvider>
                        <div class="textFieldsContainer">
                            <TextField 
                            name="firstName" 
                            value={this.state.firstName}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            class="textFields" 
                            floatingLabelText="Your Name" 
                            fullWidth="true"
                            onChange={e => this.change(e)}
                            errorText={this.state.firstNameError} 
                            /><br />

                            <TextField floatingLabelStyle={styles.floatingLabelStyle} 
                            floatingLabelText="Email" 
                            class="textFields" 
                            type="email" 
                            name = "email"
                            fullWidth="true"
                            value={this.state.email}
                            onChange={e => this.change(e)}
                            errorText={this.state.emailError} 
                             />
                            <br />

                            <TextField floatingLabelStyle={styles.floatingLabelStyle} 
                            floatingLabelText="Password" 
                            name="password"
                            class="textFields" 
                            type="password" 
                            fullWidth="true"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            errorText={this.state.passwordError} 
                            />
                            <br />
                        </div>
                        
                        <div class="nextStepContainer">
                            <button type="button" class="btnNextStep" onClick={e => this.onSubmit(e)} primary >NEXT STEP</button> 
                        </div>
                    </MuiThemeProvider>
                </form> 
            </div>           
        </div>    
    </div>
    );
  }
}

const mapStateToProps = state => ({
    firstName: state.users.firstName,
    firstNameError: state.users.firstNameError,
    email: state.users.email,
    emailError: state.users.emailError,
    password: state.users.password,
    passwordError: state.users.passwordError
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addUser,
    changeToRegisterProfilePic: () => push('/registerProfilePic')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
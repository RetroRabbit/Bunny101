import React from 'react'
import { Route, Link} from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from '../register'
import Body from '../body'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Icon from './FullLogo.png'
import { orange500, blue500, blue100, fullWhite } from 'material-ui/styles/colors';
import "./index.css"
import {loginUser} from "../../modules/users"

const styles = {
    floatingLabelStyle: {
        color: fullWhite,
    },
};

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: false,
            touched : false,
            incorrect : true,
            returnedTrue : false,
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    onSubmit = e => {

        this.props.loginUser({email:this.state.email, password: this.state.password})
        this.setState({
            active : true,
            ...this.state
        })
        /*if(this.props.active != true){
            this.props.changeToBody();
        }*/
        if(this.props.validLogin === true){
            this.props.changeToBody();
        }


    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    render() {
        return (
            <div class="mainComponent">
                <div class="loginForms">
                    <div class="heading1">
                        <p id="welcome">Welcome to the</p>
                        <img src={Icon} id="icon"/>

                        <div className="theForm">
                            <form>
                                <MuiThemeProvider>

                                    <div class="textField">
                                        <TextField
                                        placeholder="Email"
                                        class="field"
                                        fullWidth="true"
                                        name="email"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                    <div class="textField">
                                        <TextField
                                        placeholder="Password"
                                        type="password"
                                        className="field"
                                        fullWidth="true"
                                        name="password"
                                        value={this.state.value}
                                        onChange={this.handlePassword}
                                        />
                                    </div>
                                    <div class="btnContainer">
                                        <button type="button" onClick={ this.onSubmit} class="btn">LOGIN</button>
                                    </div>
                                </MuiThemeProvider>
                            </form>
                        </div>
                    </div>
                    <div class="signUpBackground">
                        <p class="btnGrey" onClick={this.props.changeToRegister} class="signUpLink">
                            No account yet? Get setup now
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    email : state.users.email,
    password : state.users.password,
    validLogin: state.users.validLogin
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser,
    changeToBody: () => push('/body'),
    changeToRegister: () => push('/register')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

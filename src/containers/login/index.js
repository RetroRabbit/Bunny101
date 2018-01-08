import React from 'react';
import { Route, Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../register';
import Body from '../body';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from './FullLogo.png';

import './index.css';

const Login = props => (
    <div class="loginForms">
        <div class="heading1">
            <p id="welcome">Welcome to the</p>
            <img src={Icon} id="icon" />

            <div class="theForm">
                <form>
                    <MuiThemeProvider>
                        <div class="textField">
                            <TextField placeholder="Email" class="field" />
                            <br />
                            <br />
                        </div>
                        <TextField placeholder="Password" type="password" class="field" />
                        <br />
                        <div class="btnContainer">
                            <button type="button" onClick={() => props.changeToBody()} class="btn">
                                LOGIN
                            </button>
                        </div>
                    </MuiThemeProvider>
                </form>
            </div>
        </div>
        <div class="signUpBackground">
            <p class="btnGrey" onClick={() => props.changeToRegister()} class="signUpLink">
                No account yet? Get setup now
            </p>
        </div>
    </div>
);

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changeToBody: () => push('/body'),
            changeToRegister: () => push('/register')
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Login);

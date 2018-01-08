import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../login'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500, blue100, fullWhite} from 'material-ui/styles/colors';

const styles = {
    floatingLabelStyle: {
      color:  fullWhite,
    },
  };

  
const Register = props => (
    <div>
        <div class="registerForm">

        <MuiThemeProvider>
        <div class="centerForm">
        <br/><br/>

        <h1 class="step-one centerWithin">Step One</h1>

        <p class="the-basics"> The basics </p>

            <TextField floatingLabelStyle={styles.floatingLabelStyle}  class="form-field-white email-copy"  floatingLabelText="Your Name"/><br/>

            <TextField floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Email" class="email-copy" type="email"/>
            <br />

            <TextField floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Password" class="placeholdercolor" type="password"/>
            <br />

            <button class="rectangle-button textColor" onClick={() => props.changePage()} type="button">NEXT STEP</button><br/>
            </div> 
        </MuiThemeProvider>
    </div>
</div>
)


const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/registerProfilePic')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register)
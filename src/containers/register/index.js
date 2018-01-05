import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../login'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RegisterComponent from './registerComponent';



const Register = props => (
    <div>
    <div class="registerForm">
    <MuiThemeProvider>

    <div class="centerForm">
    <p class="step-one">Step One</p>
    <p class="the-basics">
         Step The basics
    </p>
          <TextField class="form-field-white email-copy"  floatingLabelText="Your Name"/><br/>

          <TextField floatingLabelText="Email" class="email-copy" type="email"/>
          <br />

          <TextField floatingLabelText="Password" type="password"/>
          <br />

          <button class="rectangle-button " type="button">NEXT STEP</button><br/>
        </div> 
    </MuiThemeProvider>

</div>
    </div>
)


const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/login')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    RegisterComponent
)(Register)
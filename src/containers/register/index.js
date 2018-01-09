import React from 'react'
import { Route, Link} from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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

const RegisterFirst = props => (
    
    <div class="registerForms">
        <div class="heading1">
            <p class="stepThree">Step One</p>  
            <p class="firstChat">THE BASICS</p>     
        
            <div class="theForm1">
                <form>
                    <MuiThemeProvider>
                        <div class="textFieldsContainer">
                            <TextField floatingLabelStyle={styles.floatingLabelStyle} class="textFields" floatingLabelText="Your Name" fullWidth="true" /><br />

                            <TextField floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Email" class="textFields" type="email" fullWidth="true" />
                            <br />

                            <TextField floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Password" class="textFields" type="password" fullWidth="true"/>
                            <br />
                        </div>
                        <div class="nextStepContainer">
                            <button type="button" onClick={() => props.changeToRegisterProfilePic()} class="btnNextStep">NEXT STEP</button> 
                        </div>
                    </MuiThemeProvider>
                </form> 
            </div>           
        </div>    
    </div>
)

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToRegisterProfilePic: () => push('/registerProfilePic')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterFirst)


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

import "./index.css"

const Login = props => (
    
    <div class="registerForms">
        <div class="heading1">
            <p class="step-two">Step Two</p>  
            <p class="profile-picture">PROFILE PICTURE</p>     
        
            <div class="theForm1">
                <form>
                    <MuiThemeProvider>
                        <div class="ProfileCircle">
                            <button type="button" class="btnProfilePic"><p class="plus">+</p></button>
                        </div>
                        <div class="btnContainer2">
                            <button type="button" onClick={() => props.changeToRegisterStepThree()} class="btnNextStep">NEXT STEP</button> 
                            <p onClick={() => props.changeToRegisterStepThree()} class="skipForNow" >Skip for now</p>
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
    changeToRegisterStepThree: () => push('/body')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


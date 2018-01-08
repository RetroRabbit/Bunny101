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
            <p class="stepTwo">Step Two</p>  
            <p class="profilePicture">PROFILE PICTURE</p>     
        
            <div class="theForm1">
                <form>
                    <MuiThemeProvider>
                        <div class="profileCircle">
                            <button type="button" class="btnProfilePic"><p class="plus">+</p></button>
                        </div>
                        <div class="skipForNowContainer">
                            <button type="button" onClick={() => props.changeToRegisterFirstChat()} class="btnNextStep">NEXT STEP</button> 
                            <p onClick={() => props.changeToRegisterStepThree()} class="skipForNow">Skip for now</p>
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
    changeToRegisterFirstChat: () => push('/body')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


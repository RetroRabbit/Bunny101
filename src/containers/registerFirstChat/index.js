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

const FirstChat = props => (
    
    <div class="registerForms">
        <div class="heading1">
            <p class="stepThree">Step Three</p>  
            <p class="firstChat">YOUR FIRST CHAT</p>     
        
            <div class="theForm1">
                <form>
                    <MuiThemeProvider>
                        <div class="fiendEmailContainer">
                            <TextField defaultValue="Friends Email" class="friendEmail" style={{ width: 400 }} /><br /><br />
                        </div>
                        <div class="skipForNowContainer">
                            <button type="button" onClick={() => props.changeToBody()} class="btnNextStep">NEXT STEP</button> 
                            <p onClick={() => props.changeToBody()} class="skipForNow">Skip for now</p>
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
    changeToBody: () => push('/body')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstChat)


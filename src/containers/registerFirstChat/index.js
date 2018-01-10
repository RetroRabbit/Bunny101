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

class FirstChat extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active: false
        }
    }

    render() {
        return (
            <div class="registerForms">
                <div class="heading1">
                    <p class="stepThree">Step Three</p>  
                    <p class="firstChat">YOUR FIRST CHAT</p>     
                
                    <div class="theForm1">
                        <form onSubmit={this.props.changeToBody}>
                            <MuiThemeProvider>
                                <div class="friendEmailContainer">
                                    <TextField floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText="Friends Email" class="friendEmail" fullWidth="true" /><br /><br />
                                </div>
                                <div class="skipForNowContainer">
                                    <button type="submit" class="btnNextStep">NEXT STEP</button> 
                                    <p onClick={this.props.changeToBody} class="skipForNow">Skip for now</p>
                                </div>
                            </MuiThemeProvider>
                        </form> 
                    </div>           
                </div>    
            </div>
        );
    }
}

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToBody: () => push('/body'),
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstChat)


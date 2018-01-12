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
        email: "",
        emailError: ""
    };

    constructor(props){  
        super(props);
    }

    change = e => {
        this.state.email = e.target.value;
    };

    validate = () => {
        let isError = false;
        const errors = {
            emailError: ""
        };

        if (this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        } else
        {
            isError = false;
        }

        if(!isError)
        {
            this.props.changeToBody();
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
                email: "",
                emailError: ""
            });
            this.props.onChange({
                email: ""
            });
        }
    };

    render() {
        return (
            <div class="heading1">
                <p class="stepThree">Step Three</p>
                <p class="firstChat">YOUR FIRST CHAT</p>
                <div class="theForm1">
                    <form onSubmit={e => this.onSubmit(e)}>
                        <MuiThemeProvider>
                            <div class="friendEmailContainer">
                                <TextField name="email" floatingLabelStyle={styles.floatingLabelStyle} hintText="janedoe@example.com" floatingLabelText="Friends Email" class="friendEmail" fullWidth="true" onChange={e => this.change(e)} errorText={this.state.emailError} /><br /><br />
                            </div>
                            <div class="skipForNowContainer">
                                <button type="submit" class="btnNextStep">NEXT STEP</button>
                                <p onClick={this.props.changeToBody} class="skipForNow">Skip for now</p>
                            </div>
                        </MuiThemeProvider>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToBody: () => push('/body'),
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)

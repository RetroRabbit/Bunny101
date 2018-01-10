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
import Form from "./Form"
const styles = {
    floatingLabelStyle: {
        color: fullWhite,
    },
};

class RegisterFirst extends React.Component {
    state = {
        fields: {}
      };
    
      onChange = updatedValue => {
        this.setState({
          fields: {
            ...this.state.fields,
            ...updatedValue
          }
        });
      };
    
      render() {
        return (
          <MuiThemeProvider>
            <div className="Form">
              <Form onChange={fields => this.onChange(fields)} />
            </div>
          </MuiThemeProvider>
        );
      }
    }

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToRegisterProfilePic: () => push('/registerProfilePic')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterFirst)

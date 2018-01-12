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
import Form from "./Form"

class FirstChat extends React.Component {
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
            <div class="registerForms">
                <Form onChange={fields => this.onChange(fields)} />
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToBody: () => push('/body')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstChat)

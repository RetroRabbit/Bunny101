import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../login'
import "./index.css"

const Register = props => (
    <div>
        <div className="forms registerForm">
            <h1>Step One</h1>
            <h1>Step The basics</h1>
            <button onClick={() => props.changePage()}>Login</button>
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
    mapDispatchToProps
)(Register)
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from '../register'

const Login = props => (
    <div>
        <div class="forms">
            <h1>Login</h1>
            <button onClick={() => props.changePage()}>Login</button>
        </div>
    </div>
)

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/register')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


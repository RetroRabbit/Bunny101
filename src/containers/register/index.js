import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../login'

const Register = props => (
    <div>
        <div class="forms">
            <h1>Register</h1>
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
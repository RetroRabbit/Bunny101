import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../login'
import './index.css'

const Register = props => (
    <div>
        <div class="registerForm">
            <h1 class="step-one">Step One</h1>
            <h1 class="the-basics">Step The basics</h1>

            <form>
            <label>
            Your Name
            <input type="text"  />
            </label>

            <label>
            Email
            <input type="text"  />
        </label>

        <label>
        Password
        <input type="text"  />
        </label>
        
        <input type="submit" value="Submit" />
      </form>

            <button onClick={() => props.changePage()}>Next Step</button>
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
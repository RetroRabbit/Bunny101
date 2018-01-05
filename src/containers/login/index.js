import React from 'react'
import { Route, Link} from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from '../register'
import Body from '../body'

const Login = props => (
    <div>
        <div class="forms">
            <div>
                <p>Welcome to the</p>
                <p>CHATTERBOX</p>
            </div>
            <button class="btn" onClick={() => props.changePage()}>LOGIN</button>

            <div>
                <button class="" onClick={() => props.changePage2()}>No account yet? Get setup now</button>
            </div>
        </div>
    </div>
)

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/body'),
    changePage2: () => push('/register')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


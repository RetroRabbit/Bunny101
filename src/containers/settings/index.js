import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile_Pic from './user.png'
import FontAwesome from 'react-fontawesome'
import Header from '../header'

import "./index.css"

const Settings = props =>(
    <div class="settings">
        <div class="header headSpace">
            <Header />
        </div>
        <div class="settings-wrapper">
            <div class="settings-content">
                    <div class="profile-pic-container">
                        <div class="profile-pic">
                            <img src={Profile_Pic} alt="User Profile Picture"></img>
                        </div>
                    </div>
                    <div class="user-details">
                        <div class="user-name">
                            <h1>James Jones <FontAwesome name='pencil'/></h1>

                        </div>
                        <div class="user-email">
                            <p>james.jones@gmail.com <FontAwesome name='pencil' /></p>
                        </div>
                    </div>
                    <div class="controls" onClick={() => props.changeToBody()}>
                        <button>DONE</button>
                    </div>
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
)(Settings)

import "./index.css"
import React from 'react'
import { Route } from 'react-router-dom'
import Profile_Pic from './user.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import pencil from './pencil-icon.png'
import FontAwesome from 'react-fontawesome'

const Settings = (props) =>(
    <div class="settings">
        <div class="settings-wrapper">
            <div class="settings-content">
                <MuiThemeProvider>
                    <div class="profile-pic-container">
                        <div class="profile-pic">
                            <img src={Profile_Pic}></img>
                        </div>
                    </div>

                        <div class="user-details">
                            <div class="user-name">
                                <h1>James Jones <FontAwesome name='pencil' /></h1>

                            </div>
                            <div class="user-email">
                                <p>james.jones@gmail.com <FontAwesome name='pencil' /></p>
                            </div>
                        </div>

                    <div class="controls">
                        <button>DONE</button>
                    </div>
                </MuiThemeProvider>
            </div>
        </div>
    </div>
)

export default Settings;

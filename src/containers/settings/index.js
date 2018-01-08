import "./index.css"
import React from 'react'
import { Route } from 'react-router-dom'
import Profile_Pic from './user.png'

const Settings = (props) =>(
    <div class="settings">
        <div class="settings-wrapper">
            <div class="settings-content">
                <div class="profile-pic-container">
                    <div class="profile-pic">
                        <img src={Profile_Pic}></img>
                    </div>
                </div>
                <div class="user-details">
                    <div class="user-name">
                        <h1>James Jones</h1>
                    </div>
                    <div class="user-email">
                        <p>james.jones@gmail.com</p>
                    </div>
                </div>
                <div class="controls">
                    <button>DONE</button>
                </div>
            </div>
        </div>
    </div>
)

export default Settings;

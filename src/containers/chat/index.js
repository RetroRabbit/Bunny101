import React from 'react';
import Account_Screen from './account_screen'
import Existing_Chat from './existing_chat'
import Account_Screen_New from './account_screen_new'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import './index.css'

const Chat = props => (
    <div className="main-container">
        <div className="message-container">
            <Account_Screen />   
        </div>
        <div>
            <div className="input-container">
                <button onClick={props.displayText} className="add-button"><a className="plus_sign">+</a></button>
                <br/>
                <div className="input-Space">
                    <TextField name="message-input" type="textbox" className="message-input" placeholder="Enter message here"/>
                </div>
            </div>
        </div>
    </div>
)
function displayText()
{
    console.log("I work well");
}
export default Chat;
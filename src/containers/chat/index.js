import React from 'react';
import Account_Screen from './account_screen'
import Existing_Chat from './existing_chat'
import Account_Screen_New from './account_screen_new'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import './index.css'

class Chat extends React.Component{
    state = {
        type: 0
    }

    render() { 
        return(
            <div className="chat-container">
                <div className="message-container">
                    <Account_Screen />   
                </div>
                <div className="input-container">
                    <button  className="add-button"><a className="plus_sign">+</a></button>
                    <br/>
                    <div className="input-Space">
                        <input name="message-input" type="text" className="message-input" placeholder="Enter message here"/>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Chat;
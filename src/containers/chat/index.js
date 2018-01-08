import React from 'react';
import Body from '../body'
import Account_Screen from './account_screen'
import Existing_Chat from './Existing_chat'
import Account_Screen_New from './account_screen_new'
import New_Chat from './New_Chat'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './index.css'

const Chat = () => (
    <div>
        <div className="msgContainer">
            <New_Chat />   
        </div>
        <div>
            <div className="input_container">
                <div className="oval-2">
                    <hr className="line"/>
                    <hr className="line-copy"/>
                </div>
                <TextField name="msgInput" type="textbox" className="msgInput" placeholder="Enter message here"/>
            </div>
        </div>
    </div>
)

export default Chat;
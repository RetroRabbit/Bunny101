import React from 'react';
import Body from '../body'
import Account_Screen from './account_screen'
import Existing_Chat from './existing_chat'
import Account_Screen_New from './account_screen_new'
import New_Chat from './new_chat'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './index.css'
import Button from 'material-ui/Button/Button';

const Chat = () => (
    <div className="main-container">
        <div className="msgContainer">
            <Account_Screen />   
        </div>
        <div>
            <div className="input_container">
                <button className="oval-2"><a className="plus_sign">+</a></button>
                <br/>
                <div className="inputSpace">
                    <TextField name="msgInput" type="textbox" className="msgInput" placeholder="Enter message here"/>
                </div>
            </div>
        </div>
    </div>
)

export default Chat;
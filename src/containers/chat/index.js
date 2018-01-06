import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Register from '../register'
import Body from '../body'
import Account_Screen from './account_screen'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './index.css'
const Chat = () => (
 <div className="msgContainer">
     <Account_Screen />
     <div>
           <p>plus sign </p>
          <TextField name="msgInput" type="textbox" class="msgInput" placeholder="Enter message here"/>
     </div>
     </div>

)

export default Chat;
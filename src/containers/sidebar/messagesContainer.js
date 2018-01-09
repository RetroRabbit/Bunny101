import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../login';
import Register from '../register';
import Body from '../body';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar';
import Chip from 'material-ui/Chip';
import Avi from './avi.jpg';
import Divider from 'material-ui/Divider';
import './index.css';

export default class MessagesContainer extends React.Component
{
    
    constructor()
    {
        super();
        // this.message = "When you type the website name on your address bar, a simple yet classy";
        // this.username = "Thabang Lekwadi";
    }

    //render method 
    render()
    {
        return (
            
            <MuiThemeProvider>
            <div>
            <List>
            <ListItem>
                <Chip className="person">
                    <Avatar className="lower" src={Avi} />
                    <p class="name"> {this.props.username}</p>
                </Chip>
                <p class="status">
                    {this.props.message}
                </p>
            </ListItem>
           
            <Divider />
        </List>
            </div>
        </MuiThemeProvider>
        );
    }
}
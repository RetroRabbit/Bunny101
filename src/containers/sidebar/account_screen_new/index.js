import React from 'react';
import { Route } from 'react-router-dom';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar';
import Divider from 'material-ui/Divider';
import './index.css';
//import 'typeface-roboto';

const Sidebar = () => (
    <MuiThemeProvider>
        <div>
            <List>
                <ListItem disabled={true}>
                    <SearchBar hintText="Search Chats" />
                </ListItem>
                <Divider />
            </List>
        </div>
    </MuiThemeProvider>
);

export default Sidebar;

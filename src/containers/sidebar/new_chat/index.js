import React from 'react';
import { Route } from 'react-router-dom';
import List from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import './index.css';
//import 'typeface-roboto';

const Sidebar = () => (
    <MuiThemeProvider>
        <div>
            <List>
            <ListItem disabled={true}>
                <FloatingActionButton mini={true} style={{marginLeft: 335}}>
                    <NavigationCancel />
                </FloatingActionButton>
                <br />
                <br />
                <TextField hintText="Friends Email" style={{marginLeft: 55}}/>
                <br />
            </ListItem>
            <Divider />
            </List>
        </div>
    </MuiThemeProvider>
);

export default Sidebar;

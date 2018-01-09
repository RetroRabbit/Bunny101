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
import MessagesContainer from "./messagesContainer"
//import 'typeface-roboto';
// this.message = "The practice of cigar smoking has been on the rise in the U.S. since the early 90’s. In part due to a reputa";
// this.username = "Lloyd Jimenez";

// const Sidebar = () => (
//     <MuiThemeProvider>
//         <div>
//         <List>
//         <ListItem disabled={true}>
//             <SearchBar hintText="Search Chats" />
//         </ListItem>
//         <Divider />
//         <ListItem>
//             <Chip className="person">
//                 <Avatar className="lower" src={Avi} />
//                 <p class="name"> {this.username}</p>
//             </Chip>
//             <p class="status">
//                 {this.message}
//             </p>
//         </ListItem>
       
//         <Divider />
//     </List>
//         </div>
//     </MuiThemeProvider>
// );

export default class Sidebar extends React.Component
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
            //create an array of message 

        const sideBarMessage = [
            <MessagesContainer username="Bunny 101 Memmber" message ="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s"/>,
            <MessagesContainer username="Bunny 101 Memmber" message ="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s"/>,
            <MessagesContainer username="Bunny 101 Memmber" message ="The practice of cigar smoking has been on the rise in the U.S. since the early 90’s"/>,
        ]


        return (
            
            <MuiThemeProvider>
            <div>
            <List>
            <ListItem disabled={true}>
                <SearchBar hintText="Search Chats" />
            </ListItem>
            <Divider />
            
           {sideBarMessage}
            <Divider />
        </List>
            </div>
        </MuiThemeProvider>
        );
    }
}



/*             <MuiThemeProvider>
            <div>
            <List>
            <ListItem disabled={true}>
                <SearchBar hintText="Search Chats" />
            </ListItem>
            <Divider />
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
        </MuiThemeProvider>*/

// <List>
//                 <ListItem disabled={true}>
//                     <SearchBar hintText="Search Chats" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                     <Chip className="person">
//                         <Avatar className="lower" src={Avi} />
//                         <p class="name"> Lloyd Jimenez</p>
//                     </Chip>
//                     <p class="status">
//                         The practice of cigar smoking has been on the rise in the U.S. since the
//                         early 90’s. In part due to a reputa{' '}
//                     </p>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                     <Chip className="person">
//                         <Avatar className="lower" src={Avi} />
//                         <p class="name"> Jeffrey Thomas</p>
//                     </Chip>
//                     <p class="status">
//                         When you type the website name on your address bar, a simple yet classy
//                         homepage of the website unfurls right before your eyes. Designed tastefully,
//                         the homepage presents a vivid picturesque of one of the most beautiful
//                         must-visit places in the world, Barcelona, located in Spain. This website
//                         contains everything you might want to know about Barcelona, which is the
//                         capital of Catalunya, a delightful and welcoming place of historical defeats
//                         and recent victories, situated at the Catalan region of Spain. The website
//                         also offers you attractive tourist-packages and a recommends a wide
//                         selection of accommodations for you to choose from. Easy to navigate, and
//                         brief and precise in information, this website will certainly captivate your
//                         interest in the much-less-talked about city of beauties{' '}
//                     </p>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                     <Chip className="person">
//                         <Avatar className="lower" src={Avi} />
//                         <p class="name"> Catherine Sanders</p>
//                     </Chip>
//                     <p class="status">
//                         It is not always possible to jet off half way around the world when you and
//                         your significant other are wishing.{' '}
//                     </p>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                     <Chip className="person">
//                         <Avatar className="lower" src={Avi} />
//                         <p class="name"> Terry Gordon</p>
//                     </Chip>
//                     <p class="status">
//                         Here, I focus on a range of items and features that we use in life without
//                         giving them a second thought such as Coca Cola, body muscles and holding
//                         ones own breath. Though, most of these notes are not fundamentally
//                         necessary, they are such that you can use them for a good laugh, at a drinks
//                         party or for picking up women or men.
//                     </p>
//                 </ListItem>
//                 <Divider />
//             </List>
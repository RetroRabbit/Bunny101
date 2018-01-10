import React from 'react';
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../login';
import Register from '../register';
import Body from '../body';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import {List, makeSelectable} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import Chip from 'material-ui/Chip';
import Avi from './avi.jpg';
import Divider from 'material-ui/Divider';
import './index.css';
import MessagesContainer from "./messagesContainer"
import {
    new_Chat,
    get_Chats
} from '../../modules/chats'

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends React.Component {
      static propTypes = {
        children: PropTypes.node.isRequired,
        defaultValue: PropTypes.number.isRequired,
      };
  
      componentWillMount() {
        this.setState({
          selectedIndex: this.props.defaultValue,
        });
      }
  
      handleRequestChange = (event, index) => {
        this.setState({
          selectedIndex: index,
        });
      };
  
      render() {
        return (
          <ComposedComponent
            value={this.state.selectedIndex}
            onChange={this.handleRequestChange}
          >
            {this.props.children}
          </ComposedComponent>
        );
      }
    };
  }

SelectableList = wrapState(SelectableList);

class ChatBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chats: [],
        }
    }
    componentWillMount(props){
        console.log("I am mounting")
        //console.log(this.props.chatList);
        var chatItems = this.props.chatList;
        var msgs = [];
        
        for(var item in chatItems){
            console.log(item);
          //  msgs.push(<MessagesContainer value={item} username={chatItems[item].name} message={chatItems[item].msgPreve}/>)

            msgs.push(
                <ListItem value = {item}>
                    <Chip className="person">
                        <Avatar className="lower" src={Avi} />
                        <p class="name"> {chatItems[item].name}</p>
                    </Chip>
                    <p class="status">
                        {chatItems[item].msgPreve}
                    </p>
                </ListItem>
            )
        }
        this.setState({
            chats: msgs
        })
    }
    render()
    {
        return (
            <MuiThemeProvider>
                <SelectableList defaultValue={2}>
                    <ListItem value={1}>
                        <SearchBar hintText="Search Chats" />
                    </ListItem>
                    <Divider />
                        {/*sideBarMessage*/}
                        {this.state.chats}
                    <Divider />
                </SelectableList>
            </MuiThemeProvider>
        );
    }
}

class NewChat extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <List>
                <ListItem disabled={true}>
                    <FloatingActionButton mini={true} style={{marginLeft: 335}} backgroundColor="Grey" onClick={this.props.new_Chat}>
                        <NavigationCancel />
                    </FloatingActionButton>
                    <br />
                    <br />
                    <TextField hintText="Friends Email" style={{marginLeft: 55}} errorText="" onChange={this.showFriends}/>
                    <br />
                    <br />
                    <Divider />
                </ListItem>

                </List>
            </MuiThemeProvider>
        )
    }
}

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        //console.log(props.chatList)
        this.state = {
            newChat: false,
            userChats: props.chatList
        }
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps.chats);
        this.setState({
            newChat: nextProps.NewChat
        })
    }
    render(){
        return(
            <div>
                {!this.state.newChat && <ChatBar chatList={this.state.userChats}/>}
                {this.state.newChat && <NewChat />}
            </div>
        )
    }
}

//export default Header;
const mapStateToProps = (state) => ({
    numChats: state.chats.numChats,
    NewChat: state.chats.NewChat,
    chatList: state.chats.chatList
})

const mapDispatchToProps = dispatch => bindActionCreators({
	new_Chat,
    get_Chats
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)

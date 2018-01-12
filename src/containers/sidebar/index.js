import React from 'react';
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../login';
import Register from '../register';
import Body from '../body';
import NewChat from './newchat'
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import {List, makeSelectable} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import Chip from 'material-ui/Chip';
import Avi from './avi.jpg';
import Divider from 'material-ui/Divider';
import './index.css';
import MessagesContainer from "./messagesContainer"
import {
    new_Chat,
    create_new_chat,
    get_chat_list,
    get_chat_list_done,
    change_chat,
} from '../../modules/chats'
import {
    find_user
} from '../../modules/users'

var SelectableList = makeSelectable(List);

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
        //console.log("active = " + index);
        this.props.changeChat(index)
        this.setState({
            selectedIndex: index,
        });
    };

    render() {
        return(
            <ComposedComponent value={this.state.selectedIndex} onChange={this.handleRequestChange}>
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
            search: ''
        }
        this._handleChatChange = this._handleChatChange.bind(this)
    }
    _handleChatChange(chatID){
        this.props.changeChat(chatID)
    }
    _handleSearchChange(event) {
        this.state.search = event.target.value.substr(0, 20);
        this.updateSidebar();
    }
    componentWillMount(props){
        //console.log(this.props.chatList);
        var chatItems = this.props.chatList;
        var msgs = [];

        for(var item in chatItems){
            //console.log(item);
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
                    <Divider />
                </ListItem>
            )
        }
        this.setState({
            chats: msgs
        })
    }
    updateSidebar(){
        var chatItems = this.props.chatList.filter((chats) => {
             return chats.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        var msgs = [];

        for(var item in chatItems){
            msgs.push(
                <ListItem value = {item}>
                    <Chip className="person">
                        <Avatar className="lower" src={Avi} />
                        <p class="name"> {chatItems[item].name}</p>
                    </Chip>
                    <p class="status">
                        {chatItems[item].msgPreve}
                    </p>
                    <Divider />
                </ListItem>
            )
        }

        this.setState( {chats : msgs});
    }
    render(){
        return (
            <MuiThemeProvider>
                <SelectableList defaultValue={0} changeChat={this._handleChatChange}>
                    <ListItem disabled={true}>
                        <TextField className="searchbar" hintText="Search Chats" value={this.state.search} onChange={this._handleSearchChange.bind(this)} />
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

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        //console.log(props.chatList)
        props.get_chat_list(this.props.user)
        props.get_chat_list_done()
        this.state = {
            newChat: false,
            userChats: props.chatList
        }
        this._handleChatChange = this._handleChatChange.bind(this);
    }
    _handleChatChange(chatID){
        this.props.change_chat(chatID)
    }
    componentWillReceiveProps(nextProps){
        //console.log("chat list",nextProps.chatList);
        this.setState({
            newChat: nextProps.NewChat
        })
    }
    render(){
        return(
            <div>
                {!this.state.newChat && <ChatBar chatList={this.state.userChats} changeChat={this._handleChatChange}/>}
                {this.state.newChat && <NewChat find_user={this.props.find_user} search={this.props.search_res}/>}

            </div>
        )
    }
}

//export default Header;
const mapStateToProps = (state) => ({
    numChats: state.chats.numChats,
    NewChat: state.chats.NewChat,
    chatList: state.chats.chatList,
    user: state.users.userID,
    search_res: state.users.search_res,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	new_Chat,
    create_new_chat,
    get_chat_list,
    get_chat_list_done,
    change_chat,
    find_user,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar)

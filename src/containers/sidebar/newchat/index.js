import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import {List, makeSelectable} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import {
    create_new_chat,
} from '../../../modules/chats'

class UserSearchItem extends React.Component{
    _handleCreateChat(){
        console.log("Create chat with " + this.props.email);
    }
    render(){
        return (
            <div class="search-result" onClick={() => this._handleCreateChat()}>
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}
class NewChat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: []
        }
    }
    _handleSearchUser(e){
        //console.log("Search: " + e.target.value);
        this.props.find_user(e.target.value.toString())
        this.props.create_new_chat(e.target.value.toString() )
    }
    _handleCreateChat(userEmail){
        console.log("create new chat!:" + userEmail);
        //this.props.create_new_chat(userEmail)
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
        var list = nextProps.search;
        var users = []

        if(list){
            for(var i = 0; i < list.length; i++){
                users.push(<UserSearchItem name={list[i].name} email={list[i].email} create_new_chat={this.props.create_new_chat}/>)
            }
        }

        this.setState({
            search: users
        })
    }
    render(){
        return(
            <MuiThemeProvider>
                <List>
                <ListItem disabled={true}>
                    <FloatingActionButton mini={true} style={{ "marginLeft": "85%" }} backgroundColor="Grey" onClick={this.props.new_Chat}>
                        <NavigationCancel />
                    </FloatingActionButton>
                    <br />
                    <br />
                    <TextField hintText="Friends Email" errorText="" onChange={this.showFriends} onChange={(e) => this._handleSearchUser(e)}/>
                    <br />
                    <br />
                    <Divider />
                </ListItem>
                <div class="search-results">
                    {this.state.search}
                </div>

                </List>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    create_new_chat,
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewChat)

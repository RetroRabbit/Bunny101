import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.css'
import {
    get_chat
} from '../../../modules/chats'

const NoChats = props => {
    return(
        <div className="no-chats">
            <h1>Not a chatty cathy yet?</h1>
            <h2>Chatter away on the left</h2>
        </div>
    )
}

const Message = (props) => {
    let message;
    if(props.type === "in"){
        //console.log("Coming in");
        message = (
            <div className="user-msg">
                <div class="received-message-box">
                    <p class="message-text">
                        {props.message}
                    </p>
                    <p class="received-time">{props.time}</p>
                 </div>
            </div>
        )
    }
    else if(props.type === "out"){
        //console.log("Going out");
        message = (
            <div className="user-msg">
                <div class="sent-message-box">
                    <p class="message-text">
                        {props.message}
                    </p>
                    <p class="sent-time">{props.time}</p>
                </div>
            </div>
        )
    }
    else if(props.type === "image"){
        let $imagePreview = null;
        if (props.message) {
            $imagePreview = (<div class="sent-message-box"><img src={props.message} id="sentImg" width="236px" height="236px" /><p class="sent-time">{props.time}</p></div>);
        } else {
            $imagePreview = (<div className="previewText"></div>);
        }
        message = (
            <div className="user-msg">
                {$imagePreview}
            </div>
        )
    }
    return( message )
}

class Account_Screen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chatItem: this.props.chatItem,
            messages: []
        }
    }
    componentWillReceiveProps(nextProps){
        var messageList = nextProps.chatItem
        //console.log(messageList);

        this.getMessageComponents(messageList);
        this.forceUpdate()
    }
    componentWillMount(){
        this.getMessageComponents(this.props.chatItem);
    }
    getMessageComponents(msgList){
        //var msgList = this.props.chatItem
        //console.log(msgList);
        let msg;
        let msgComponents = []
        if(!this.props.chatList) {
            msgComponents.push(<NoChats />)
        }
        else{
            for(msg in msgList){
                //console.log(msgList[msg]);
                msgComponents.push(<Message message={msgList[msg].msg} time={msgList[msg].time} type={msgList[msg].type} />)
            }
        }
        this.setState({
            messages: msgComponents
        })
    }
    render(){
        return(
            <div class="message-container">
                {this.state.messages}
            </div>
        )
    }
}

//export default Account_Screen;

const mapStateToProps = (state) => ({
    newMessage: state.chats.newMessage,
    chatItem: state.chats.chatItem,
    chatList: state.chats.chatList,
    activeChat: state.chats.activeChat,
    imageUrl: state.chats.imageUrl
})

const mapDispatchToProps = dispatch => bindActionCreators({
	get_chat
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Account_Screen)

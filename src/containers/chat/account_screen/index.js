import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.css'
import {
    get_chat
} from '../../../modules/chats'

const Message = (props) => {
    let message;
    if(props.type == "in"){
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
    else if(props.type == "out"){
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
        if(nextProps.newMessage){
            console.log("I am new");
        }
        var last = messageList[messageList.length-1]
        var newMsgComp = <Message message={last.msg} time={last.time} type={last.type} />
        var newList = this.state.messages
        newList.push(newMsgComp)
        this.forceUpdate()
    }
    componentWillMount(){
        var msgList = this.props.chatItem
        //console.log(msgList);
        let msg;
        let msgComponents = []
        for(msg in msgList){
            //console.log(msgList[msg]);
            msgComponents.push(<Message message={msgList[msg].msg} time={msgList[msg].time} type={msgList[msg].type} />)
        }
        this.setState({
            messages: msgComponents
        })

    }
    render(){
        return(
            <div>
                {this.state.messages}
            </div>
        )
    }
}

//export default Account_Screen;

const mapStateToProps = (state) => ({
    newMessage: state.chats.newMessage,
    chatItem: state.chats.chatItem,
    activeChat: state.chats.activeChat
})

const mapDispatchToProps = dispatch => bindActionCreators({
	get_chat
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Account_Screen)

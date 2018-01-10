import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Account_Screen from './account_screen'
import Existing_Chat from './existing_chat'
import Account_Screen_New from './account_screen_new'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import {
    new_message,
    send_message
} from '../../modules/chats'
import './index.css'

class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newMessage: this.props.newMessage
        }
        this.props.send_message("Beefy beef");
        /*var msgContainer = document.getElementById("Chat_Messages");
        msgContainer.scrollTop = msgContainer.scrollHeight;*/
    }
    _handleSendMessage(e){
        if (e.key === 'Enter') {
            this.props.new_message()
            this.props.send_message(e.target.value.toString());
            this.setState({
                newMessage: this.props.newMessage
            })
            /*var msgContainer = document.getElementById("Chat_Messages");
            msgContainer = msgContainer[0]
            msgContainer.scrollTop = msgContainer.scrollHeight;*/
            document.getElementById("MessageInput").value = ""
        }
    }

    render(){
        return(
            <div className="chat-container">

                <div id="Chat_Messages" className="message-container">
                    <Account_Screen newMessage={this.state.newMessage} />
                </div>

                <div className="input-container">
                    <button onClick={this.props.displayText} className="add-button"><a className="plus_sign">+</a></button>
                    <br/>
                    <div className="input-Space">
                        <input id="MessageInput" name="message-input" type="text" className="message-input" placeholder="Enter message here..."
                            onKeyPress={(e) => this._handleSendMessage(e)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    chatItem: state.chats.chatItem,
    newMessage: state.chats.newMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
	new_message,
    send_message
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat)

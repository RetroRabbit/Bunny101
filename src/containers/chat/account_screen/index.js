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

const Account_Screens = () => (
    <div class="chatbox">
        <div className="user-msg">
            <div class="sent-message-box">
                <p class="message-text">Without a doubt there is.
                </p>
                <p class="sent-time">07H00</p>
            </div>
        </div>

        <div className="user-msg">
            <div class="received-message-box">
                <p class="message-text">There is something very relaxing
                </p>
                <p class="received-time">07H00</p>
             </div>
        </div>

        <div className="user-msg">
            <div class="sent-message-box">
                <p class="message-text">Without a doubt there is.
                </p>
                <p class="sent-time">07H00</p>
            </div>
        </div>

        <div className="user-msg">
            <div class="received-message-box">
                <p class="message-text">Without a doubt there is something very relaxing and pleasurable about cooking
                and eating grilled food. To reduce the risks follow these basic tips:
                Without a doubt there is something very relaxing and pleasurable about cooking
                and eating grilled food. To reduce the risks follow these basic tips:
                </p>
                <p class="received-time">07H00</p>
             </div>
        </div>

        <div className="user-msg">
            <div class="sent-message-box">
                <p class="message-text">Without a doubt there is something very relaxing and pleasurable about cooking
                and eating grilled food. To reduce the risks follow these basic tips:
                Without a doubt there is something very relaxing and pleasurable about cooking
                and eating grilled food. To reduce the risks follow these basic tips:
                </p>
                <p class="sent-time">07H00</p>
            </div>
        </div>
    </div>
)

class Account_Screen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chatItem: this.props.chatItem,
            messages: []
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.chatItem);
        this.setState({
            chatItem: nextProps.chatItem
        });
    }
    componentWillMount(){
        var msgList = this.props.chatItem
        //console.log(msgList);
        let msg;
        let msgComponents = []
        for(msg in msgList){
            console.log(msgList[msg]);
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
    chatItem: state.chats.chatItem
})

const mapDispatchToProps = dispatch => bindActionCreators({
	get_chat
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Account_Screen)

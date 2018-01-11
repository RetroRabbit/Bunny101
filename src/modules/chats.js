export const Make_New_Chat_REQUESTED = 'chats/Make_New_Chat_REQUESTED'
export const Make_New_Chat = 'chats/Make_New_Chat'
export const Get_Chat_List = 'chats/Get_Chat_List'
export const Get_Chat = 'chats/Get_Chat'
export const Change_Chat = 'chats/Change_Active_Chat'
export const New_Message = 'chats/New_Message'
export const New_Message_Rendered = "chats/New_Message_Rendered"
export const Send_Message = 'chats/Send_Message'

export const Profile_Pic = 'chats/Save_Profile_Pic'

const chatList = [
    {name: "Steve Jones", msgPreve: "Good day John, I heard from tim that you..."},
    {name: "John Tina", msgPreve: "I wonder why he did that. I mean I for one..."},
    {name: "Bunny 102 Member", msgPreve: "The practice of cigar smoking has been on the rise in the U.S. since the early 90’s..."},
    {name: "Bunny 101 Member", msgPreve: "The was once a little bunny that lived in the montains and he..."}
]

//var data = require("./data")
var curr_chat = 0;
//var chat = require('./data/chats')(curr_chat)

const initialState = {
    numChats: 0,
    NewChat: false,
    activeChat: 0,
    chatList: chatList,
    profilePic: '0',
    chatItem: require('./data/chats')(curr_chat),
    newMessage: false
}

export default (state = initialState, action) =>{
    switch (action.type){
        case Make_New_Chat_REQUESTED:
            return{
                ...state,
                NewChat: !state.NewChat
            }
        case Make_New_Chat:
            return{
                ...state,
                numChats: state.numChats +1,
                NewChat: !state.NewChat
            }
        case Get_Chat_List:
            return{
                ...state,
                chatList: chatList
            }
        case Change_Chat:
            return{
                ...state,
                activeChat: action.chatID,
                chatItem: require('./data/chats')(action.chatID)
            }
        case Profile_Pic:
            return{
                ...state,
                profilePic : action.profilePic
            }
        case Get_Chat:
            return{
                ...state,
                chatItem: require('./data/chats')(curr_chat)
            }
        case Send_Message:
            return{
                ...state,
                chatItem:require('./data/chats')(curr_chat),
                newMessage: action.msg
            }
        case New_Message:
            return{
                ...state,
                newMessage: true
            }
        case New_Message_Rendered:
            return{
                ...state,
                newMessage: false
            }
        default:
            return state
    }
}

export const new_Chat = () => {
    console.log("Creating new chat.");
    return dispatch => {
        dispatch({
            type: Make_New_Chat_REQUESTED
        })

    }
}

export const get_chat_list = () => {
    console.log("Retrieving Chats");

    return dispatch =>{
        dispatch({
            type: Get_Chat_List
        })
    }
}

export const get_chat = () => {
    console.log("Retriving chat");
    return dispatch => {
        dispatch({
            type: Get_Chat
        });
    }
}

export const change_chat = (chatID) => {
    console.log("Changing chat "+chatID);
    curr_chat = chatID
    return dispatch => {
        dispatch({
            type: Change_Chat,
            chatID: chatID
        })
    }
}

export const save_Profile_Pic = (picFile) => {
    console.log("Saving Profile Pic");
    return dispatch =>{
        dispatch({
            type: Profile_Pic,
            profilePic: picFile
        })
    }
}

export const new_message = () => {
    console.log("New Message");
    return dispatch => {
        type: New_Message
    }
}

export const new_message_rendered = () => {
    console.log("New Message Rendered");
    return dispatch => {
        type: New_Message_Rendered
    }
}

export const send_message = (new_msg) => {
    console.log("Sending Message: " + new_msg);
    var dt = new Date();
    let newMessage = {
        type: "out",
        msg: new_msg,
        time: dt.getHours()+"h"+dt.getMinutes()
    }
    var chat = require('./data/chats')(curr_chat)
    chat.push(newMessage)
    //console.log("chat" ,chat);
    return dispatch => {
        dispatch({
            type: Send_Message,
            msg: new_msg,
        })
    }
}
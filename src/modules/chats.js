export const Make_New_Chat_REQUESTED = 'chats/Make_New_Chat_REQUESTED'
export const Make_New_Chat = 'chats/Make_New_Chat'
export const Get_Chat_List = 'chats/Get_Chat_List'
export const Get_Chat_List_Done = 'chats/Get_Chat_List_Done'
export const Get_Chat = 'chats/Get_Chat'
export const Change_Chat = 'chats/Change_Active_Chat'
export const New_Message = 'chats/New_Message'
export const New_Message_Rendered = "chats/New_Message_Rendered"
export const Send_Message = 'chats/Send_Message'
export const Saved_User = 'chats/Save_User'
export const UNSaved_User = 'chats/UNSaved_User'

export const Profile_Pic = 'chats/Save_Profile_Pic'
export const Send_Image = 'chats/Image_Send'

//var data = require("./data")
var curr_chat = -1;
var curr_user = -1;
//var chat = require('./data/chats')(curr_chat)

const initialState = {
    numChats: 0,
    NewChat: false,
    activeChat: 0,
    chatList: require('./data/chats').getChatList(curr_user),
    profilePic: '0',
    chatItem: require('./data/chats')(curr_user,curr_chat),
    newMessage: false,
    savedUser: false,
    gotChatList: false,
    newImage: '0'
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
                chatList: require('./data/chats').getChatList(curr_user)
            }
        case Get_Chat_List_Done:
            return{
                ...state,
                gotChatList: false,
            }
        case Change_Chat:
            return{
                ...state,
                activeChat: action.chatID,
                chatItem: require('./data/chats')(curr_user,curr_chat)
            }
        case Profile_Pic:
            return{
                ...state,
                profilePic : action.profilePic
            }
        case Get_Chat:
            return{
                ...state,
                chatItem: require('./data/chats')(curr_user,curr_chat)
            }
        case Send_Message:
            return{
                ...state,
                chatItem:require('./data/chats')(curr_user,curr_chat),
                newMessage: action.msg
            }
        case Send_Image:
            return{
                ...state,
                chatItem:require('./data/chats')(curr_user,curr_chat),
                newImage: action.newImage
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
        case Saved_User:
            return{
                ...state,
                savedUser: true
            }
        case UNSaved_User:
            return{
                ...state,
                savedUser: false
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

export const get_chat_list = (userID) => {
    console.log("Retrieving Chats for :" + userID);
    curr_user = userID;
    return dispatch =>{
        dispatch({
            type: Get_Chat_List
        })
    }
}

export const get_chat_list_done = () => {
    console.log("Got Chat List");
    return dispatch => {
        dispatch({
            type:Get_Chat_List_Done,
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
        dispatch({
            type: New_Message_Rendered
        })
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
    var chat = require('./data/chats')(curr_user,curr_chat)
    chat.push(newMessage)
    //console.log("chat" ,chat);
    return dispatch => {
        dispatch({
            type: Send_Message,
            msg: new_msg,
        })
    }
}

export const Image_Send = (picFile) => {
    console.log("Sending Message: " + picFile);
    var dt = new Date();
    let newMessage = {
        type: "image",
        msg: picFile,
        time: dt.getHours()+"h"+dt.getMinutes()
    }
    var chat = require('./data/chats')(curr_user,curr_chat)
    chat.push(newMessage)
    //console.log("chat" ,chat);
    return dispatch => {
        dispatch({
            type: Send_Message,
            msg: picFile,
        })
    }
}

export const save_user_id = (userID) => {
    console.log("Saving user ID to chat store." + userID);
    curr_user = userID
    console.log("curr user = " + userID);
    return dispatch => {
        dispatch({
            type: Saved_User,
        })
    }
}

export const unsaved_sser = () => {
    console.log("Unsaving user ID from chat.");
    curr_user = -1
    return dispatch => {
        dispatch({
            type: UNSaved_User
        })
    }
}

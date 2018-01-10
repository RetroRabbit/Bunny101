export const Make_New_Chat_REQUESTED = 'chats/Make_New_Chat_REQUESTED'
export const Make_New_Chat = 'chats/Make_New_Chat'
export const Get_Chat_List = 'chats/Get_Chat_List'
export const Get_Chat = 'chats/Get_Chat'
export const Change_Chat = 'chats/Change_Active_Chat'

var data = require("./data")

var chat = data.chatItem

const chatList = [
    {name: "Steve Jones", msgPreve: "Good day John, I heard from tim that you..."},
    {name: "John Tina", msgPreve: "I wonder why he did that. I mean I for one..."},
    {name: "Bunny 102 Member", msgPreve: "The practice of cigar smoking has been on the rise in the U.S. since the early 90’s..."},
    {name: "Bunny 101 Member", msgPreve: "The was once a little bunny that lived in the montains and he..."}
]


const initialState = {
    numChats: 0,
    NewChat: false,
    activeChat: 0,
    chatList: chatList,
    chatItem: chat
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
                activeChat: action.data.chatID
            }

        case Get_Chat:
            return{
                ...state,
                chatItem: chat
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

        /*dispatch({
            type: Make_New_Chat
        })*/
    }
}

export const get_chat_list = () => {
    console.log("Retriecing Chats");
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
    console.log("Changing chat");
    return dispatch => {
        dispatch({
            type: Change_Chat,
            chatID: chatID
        })
    }
}

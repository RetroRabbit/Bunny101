export const Make_New_Chat_REQUESTED = 'chats/Make_New_Chat_REQUESTED'
export const Make_New_Chat = 'chats/Make_New_Chat'
export const Get_Chats = 'chats/Get_Chats'
export const Change_Chat = 'chats/Change_Active_Chat'
export const Profile_Pic = 'chats/Save_Profile_Pic'

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
    profilePic: '0'
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

        case Get_Chats:
            return{
                ...state,
                chatList: chatList
            }

        case Change_Chat:
            return{
                ...state,
                activeChat: action.data.chatID
            }

        case Profile_Pic:
            return{
                ...state,
                profilePic : action.profilePic
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

export const get_Chats = () => {
    console.log("Retrieving Chats");
    return dispatch =>{
        dispatch({
            type: Get_Chats
        })
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

export const save_Profile_Pic = (picFile) => {
    console.log(picFile);
    return dispatch =>{
        dispatch({
            type: Profile_Pic,
            profilePic: picFile
        })
    }
}

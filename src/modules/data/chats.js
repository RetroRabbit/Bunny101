/****************************************************/
/*******************Chat Items***********************/
/****************************************************/
const chatItem0 = [
    {type: "in", msg: "Hey!", time: "07h00"},
    {type: "out", msg: "Hey!", time: "07h05"},
    {type: "in", msg: "How you?", time: "07h10"},
    {type: "out", msg: "Good, you?", time: "07h12"},
    {type: "in", msg: "Also good.", time: "08h00"},
    {type: "out", msg: "Good.", time: "08h15"},
    {type: "in", msg: "I heard from tim that you were in town. Do you want to meet?", time: "10h15"}
]

const chatItem1 = [
    {type: "in", msg: "Good day! Did you here about steve", time: "07h00"},
    {type: "out", msg: "I wonder why he did that. I mean I for one never expected him to leave so early!", time: "07h05"}
]

const chatItem2 = [
    {type: "in", msg: "Greetings!", time: "07h00"},
    {type: "out", msg: "yelo!", time: "07h05"},
    {type: "out", msg: "how be cracking???", time: "08h15"},
    {type: "in", msg: "Chicken Chicken Chicken.", time: "10h15"}
]

const chatItem3 = [
    {type: "in", msg: "Good day! Did you here about steve", time: "07h00"},
]

const chatItem4 = [
    {type: "in", msg: "Hey!", time: "07h00"},
    {type: "in", msg: "How are you?", time: "08h00"},
    {type: "in", msg: "Are you ignoring me??", time: "13h00"},

]

const chatItem5 = [
    {type: "in", msg: "Hey!", time: "07h00"},

]

const chatItem6 = [
    {type: "in", msg: "Hey!", time: "07h00"},
    {type: "in", msg: "Chicken Chicken Chicken.", time: "10h15"}

]

const chatItem7 = [
    {type: "out", msg: "yelo!", time: "07h05"},
    {type: "in", msg: "Chicken Chicken Chicken.", time: "10h15"},
    {type: "out", msg: "yelo!", time: "07h05"},

]

/****************************************************/
/*******************User Chats***********************/
/****************************************************/
const chats0 = [
    chatItem0,
    chatItem1,
    chatItem2,
    chatItem3,
]
const chats1 = [
    chatItem0,
    chatItem2,
    chatItem7
]
const chats2 = [
    chatItem3,
    chatItem4,
    chatItem5,
]
const chats3 = [
    chatItem6
]

const all_chats = [
    chats0,
    chats1,
    chats2,
]
/****************************************************/
/**************User Active Chat Lists*****************/
/****************************************************/
const chatList0 = [
    {name: "Emma Jones",    msgPreve: (chatItem0[chatItem0.length-1].msg.substring(0, 30)+"...")},
    {name: "John Tina",     msgPreve: (chatItem1[chatItem1.length-1].msg.substring(0, 30)+"...")},
    {name: "Mason Jacobs ", msgPreve: (chatItem2[chatItem2.length-1].msg.substring(0, 30)+"...")},
    {name: "William Smith", msgPreve: (chatItem3[chatItem3.length-1].msg.substring(0, 30)+"...")}
]
const chatList1 = [
    {name: "Steve Jones",    msgPreve: (chatItem0[chatItem0.length-1].msg.substring(0, 30)+"...")},
    {name: "John Tina",     msgPreve: (chatItem2[chatItem2.length-1].msg.substring(0, 30)+"...")},
    {name: "Mason Jacobs ", msgPreve: (chatItem7[chatItem7.length-1].msg.substring(0, 30)+"...")},
]
const chatList2 = [
    {name: "Emma Jones",    msgPreve: (chatItem3[chatItem3.length-1].msg.substring(0, 30)+"...")},
    {name: "John Tina",     msgPreve: (chatItem4[chatItem4.length-1].msg.substring(0, 30)+"...")},
    {name: "Mason Jacobs ", msgPreve: (chatItem5[chatItem5.length-1].msg.substring(0, 30)+"...")},
]
const chatList3 = [
    {name: "Brender Eve",   msgPreve: (chatItem6[chatItem6.length-1].msg.substring(0, 30)+"...")},
]

const chatLists = [
    chatList0,
    chatList1,
    chatList2,
    chatList3,
]
/****************************************************/
/**********************Chats*************************/
/****************************************************/

module.exports = (userID,chatID) => {
    if(userID >= 0 || chatID >= 0){
        return all_chats[userID][chatID]
    }
};
module.exports.getChatList = (userID) => {
    if(userID >= 0){
        console.log("retriving chats for user " + userID);
        return chatLists[userID];
    }
}

module.exports.createNewChat = (withUser) => {
    var chatListItem = {
        name: withUser.name,
        msgPreve: "",
    }

    if(withUser.id < chatLists.length){ //user alreadt has chat list => append new chat item
        chatLists[withUser.id].push(chatListItem);
        return {
            status: true,
            msg: "Appended to chat list " + withUser.id,
        }
    }

    var chatList = []
    chatLists.push(chatList)
    chatLists[withUser.id].push(chatListItem);

    return {
        status: true,
        msg: "Created new chat list!"
    }
}

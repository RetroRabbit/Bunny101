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
    {type: "in", msg: "Chicken Chicken Chicken.", time: "10h15"}
]

const chatItem1 = [
    {type: "in", msg: "Good day!", time: "07h00"},
    {type: "out", msg: "day good!", time: "07h05"}
]

const chatItem2 = [
    {type: "in", msg: "Greetings!", time: "07h00"},
    {type: "out", msg: "yelo!", time: "07h05"},
    {type: "out", msg: "how be cracking???", time: "08h15"},
    {type: "in", msg: "Chicken Chicken Chicken.", time: "10h15"}
]

const chatItem3 = [

]

const chatItem4 = [
    {type: "in", msg: "Hey!", time: "07h00"},
    {type: "in", msg: "Hey!", time: "07h00"},

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
    chatItem3
]
const chats1 = [
    chatItem0,
    chatItem2,
    chatItem7
]

/****************************************************/
/**********************Chats*************************/
/****************************************************/
const all_chats = [
    chats0,
]
module.exports = (chatID) => {
    return chats0[chatID]
};

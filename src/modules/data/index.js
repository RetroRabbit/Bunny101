/*******************************************************************/
/*===============================Users=============================*/
/*******************************************************************/

const users = [
    {name: "Steve Jones", email: "steve.jones@gmail.com"},
    {name: "John Tina", email: "John.Tina@ymail.com"},
    {name: "Ronald Roads", email: "ronny@gmail.com"},
    {name: "James Jamson", email: "james@gmail.com"},
    {name: "Pater Parts", email: "pater@gmail.com"}
]
/*******************************************************************/
/*===============================Chats=============================*/
/*******************************************************************/

const chatItem = [
    {type: "in", msg: "Hey!", time: "07h00"},
    {type: "out", msg: "Hey!", time: "07h05"},
    {type: "in", msg: "How you?", time: "07h10"},
    {type: "out", msg: "Good, you?", time: "07h12"},
    {type: "in", msg: "Also good.", time: "08h00"},
    {type: "out", msg: "Good.", time: "08h15"},
    {type: "in", msg: "Chicken Chicken Chicken.", time: "10h15"}
]

const chats = [
    {userID: 0, chats: chatItem},
    {userID: 1, chats: chatItem}
]
/*******************************************************************/
/*===============================Result=============================*/
/*******************************************************************/

module.exports = {
    users,
    chatItem
}

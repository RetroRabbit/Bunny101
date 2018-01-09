const users = [
    {name: "Steve Jones", email: "steve.jones@gmail.com"},
    {name: "John Tina", email: "John.Tina@ymail.com"},
    {name: "Ronald Roads", email: "ronny@gmail.com"},
    {name: "James Jamson", email: "james@gmail.com"}
    {name: "Pater Parts", email: "pater@gmail.com"}
]


const chatItem = [
    {type: "in", msg: "Hey!"},
    {type: "out", msg: "Hey!"},
    {type: "in", msg: "How you?"},
    {type: "out", msg: "Good, you?"},
    {type: "in", msg: "Also good."},
    {type: "out", msg: "Good."}
]

const chats = [
    {userID: 0, chats: chatItem},
    {userID: 1, chats: chatItem}
]

export default {
    users,
    chats
}

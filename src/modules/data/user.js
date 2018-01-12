var userList = [
    {id: 0, name: "Steve Jones", email: "steve@gmail.com", password: "123456"},
    {id: 1, name: "Tim Mandrid", email: "tim.mandrid@gmail.com", password: "123456"},
    {id: 2, name: "John Smith", email: "jsmith@gmail.com", password: "123456"},
    {id: 3, name: "Pater Parts", email: "pater@gmail.com", password: "123456"},
]

module.exports.login = (userDetails) => {
    var default_Result = {
        status: false,
        msg: "invalid username or password",
    }
    var len = userList.length;
    for(var i = 0; i < len; i++){
        if(userList[i].email == userDetails.email){
            if(userList[i].password == userDetails.password){
                return {
                    status: true,
                    msg: "Valid User",
                    user: userList[i]
                }
            }
        }
    }
    return default_Result;
}
module.exports.addUser = (name, email, password) => {
    var userID = userList.length;
    var newUser = {
        id: userID,
        name,
        email,
        password
    }
    userList.push(newUser)
    return {
        status: true,
        userID,
    }
}

export const REGISTER_USER = 'users/registerUser'
export const LOGIN_USER = 'users/loginUser' //Me
export const LOGIN_FAIL = 'users/LOGIN_FAIL' //Me
export const UPDATE_USER_DETAILS = 'users/UPDATE_USER_DETAILS'
export const UPDATE_USER_DETAILS_REQUESTED = 'users/UPDATE_USER_DETAILS_REQUESTED'
export const FIND_USER = 'user/FIND_USER'
export const LOGOUT = 'users/LOGOUT' //Me

export let curr_user = -1;
const initialState = {
    userID: curr_user,
    firstName: "Steve Bro",
    firstNameError: "",
    email: "steve@gmail.com",
    emailError: "",
    password: "",
    passwordError: "",
	updateUser: false,
	saveChanges: false,
    validLogin: false,
    search_res: [],
};

export default (state = initialState, action) =>{
    switch (action.type)
    {
        case REGISTER_USER:
            return {
                ...state,
                userID: action.id,
                firstName : action.firstName,
                email : action.email,
                password : action.password,
            }
        case LOGIN_USER:
            return {
                ...state,
                userID: action.id,
                email: action.email,
                password: action.password,
                validLogin: true,
                firstName: action.name
            }
        case LOGIN_FAIL:
            return{
                ...state,
                validLogin: false
            }
        case UPDATE_USER_DETAILS_REQUESTED:
            return {
                ...state,
                updateUser: true
            }
        case UPDATE_USER_DETAILS:
            return{
                ...state,
                firstName: action.name,
                email: action.email,
                updateUser: false,
            }
        case FIND_USER:
            return{
                ...state,
                search_res: action.search_res
            }
        case LOGOUT:
            return{
                ...state,
                userID: -1,
                email: "",
                password: "",
                validLogin: false,
                firstName: ""
            }
        default:
            return state;
    }
 }

export const addUser = (userDetails) =>{
    console.log("Adding a new user");
    //console.log(userDetails);
    var res = require('./data/user').addUser(
        userDetails.firstName,
        userDetails.email,
        userDetails.password,
    );
    return dispatch => {
      dispatch({
          type:REGISTER_USER,
          id: res.userID,
          firstName : userDetails.firstName,
          email : userDetails.email,
          password : userDetails.password
      })
    }
}

export const loginUser = (userData) => {
    console.log("loggin the user");
    console.log(userData);
    var validation = require('./data/user').login(userData);
    //console.log(validation);
    if(validation.status){
        console.log("Logging in");
        curr_user = validation.user.id;
        return dispatch => {
            dispatch ({
                type : LOGIN_USER,
                id: validation.user.id,
                email : validation.user.email,
                password : userData.password,
                name: validation.user.name,
            })
        }
    }
    else {
        console.log("incorrect login details");
        return dispatch => {
            dispatch ({
                type : LOGIN_FAIL,
            })
        }
    }

}

export const refactor_user = (userDetails) => {
    console.log("Refactoring User Details");
    return dispatch => {
        dispatch({
            type: UPDATE_USER_DETAILS_REQUESTED
        })

        return dispatch({
            type: UPDATE_USER_DETAILS,
            name: userDetails.name,
            email: userDetails.email,
            profPic: userDetails.profPic,
        })
    }
}
export const find_user = (email) => {
    console.log("Searching for: " + email);
    var res = require("./data/user").findUsersLike(email)
    //console.log(res);
    return dispatch => {
        dispatch({
            type: FIND_USER,
            search_res: res,
        })
    }
}
export const logout_user = () => {
    console.log("Loging out");
    curr_user = -1
    return dispatch => {
        dispatch({
            type: LOGOUT
        })
    }
}

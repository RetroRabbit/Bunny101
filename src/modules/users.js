export const REGISTER_USER = 'users/registerUser'
export const LOGIN_USER = 'users/loginUser' //Me
export const UPDATE_USER_DETAILS = 'users/UPDATE_USER_DETAILS'
export const UPDATE_USER_DETAILS_REQUESTED = 'users/UPDATE_USER_DETAILS_REQUESTED'

const initialState = {
    firstName: "Steve Jones",
    firstNameError: "",
    email: "steve@gmail.com",
    emailError: "",
    password: "",
    passwordError: "",
	updateUser: false,
	saveChanges: false,
};


export default (state = initialState, action) =>{
    switch (action.type)
    {
        case REGISTER_USER:
            return {
                ...state,
                firstName : action.firstName,
                email : action.email,
                password : action.password,
            }
        case LOGIN_USER:
            return {
                ...state,
                email: action.email,
                password: action.password
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
        default:
            return state;
    }
 }

export const addUser = (userDetails) =>{
    console.log("Adding a new user");
    //console.log(userDetails);

    return dispatch => {
      dispatch({
          type:REGISTER_USER,
          firstName : userDetails.firstName,
          email : userDetails.email,
          password : userDetails.password
      })
    }
}

export const loginUser = (userData) => {
    console.log("loggin the user");
    console.log(userData);

    return dispatch => {
      dispatch ({
          type : LOGIN_USER,
          email : userData.email,
          password : userData.password
    })
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

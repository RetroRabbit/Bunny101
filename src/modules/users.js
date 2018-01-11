export const REGISTER_USER = 'users/registerUser'
export const LOGIN_USER = 'users/loginUser' //Me
export const UPDATE_NAME_REQUESTED = 'users/UPDATE_NAME_REQUESTED'
export const UPDATE_EMAIL_REQUESTED = 'users/UPDATE_EMAIL_REQUESTED'
export const UPDATING_NAME = 'users/UPDATING_NAME'
export const UPDATING_EMAIL = 'users/UPDATING_EMAIL'

const initialState = {
    firstName: "Steve Jones",
    firstNameError: "",
    email: "steve@gmail.com",
    emailError: "",
    password: "",
    passwordError: "",
	updateName: false,
	updateEmail: false,
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
        case UPDATE_NAME_REQUESTED:
            return{
				...state,
				updateName: true,
            }
        case UPDATING_NAME:
            return{
				...state,
				firstName: action.name,
				updateName: !state.updateName,
			}
        case UPDATE_EMAIL_REQUESTED:
            return {
				...state,
				updateEmail: true
			}
		case UPDATING_EMAIL:
			return {
				...state,
				email: action.email,
				updateEmail: !state.updateEmail,
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

export const refactor_name = (username) => {
    console.log("Refactoring name");
    return dispatch => {
        dispatch({
        		type: UPDATE_NAME_REQUESTED
        })

        dispatch({
            type: UPDATING_NAME,
            name: username,
        })
    }
}

export const refactor_email = (useremail) => {
    console.log("Refactoring email");
    return dispatch => {
        dispatch({
        		type: UPDATE_EMAIL_REQUESTED
        })

        dispatch({
            type: UPDATING_EMAIL,
            email: useremail
        })
    }
}

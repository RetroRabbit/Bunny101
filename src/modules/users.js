export const Register_User = 'users/registerUser'

const initialState = {
    firstName: "",
    firstNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  
  export default (state = initialState, action) =>{

    switch (action.type)
    {
        case Register_User:
            return {
                ...state, 
                firstName : action.firstName,
                email : action.email,
                password : action.password,
            } 

        default:
            return state;
    }
  }

  export const addUser = (userDetails) =>
  {
      console.log("Adding a new user");
      console.log(userDetails);



      return dispatch => {
          dispatch({
              type:Register_User,
              firstName : userDetails.firstName,
              email : userDetails.email,
              password : userDetails.password
          })
      }
  }
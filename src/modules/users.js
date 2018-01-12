import axios from 'axios'
export const Register_User = 'users/registerUser'
export const Login_User = 'users/loginUser' //Me

const initialState = {
    firstName: "",
    firstNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };
  var dataUrl;
  //let url = `http://192.168.0.146:61985/api/Chats`;
  let url = `http://192.168.0.146:61985/api/Chats`;
  let promise = axios.get(url).then(function(Response){
     console.log(Response.data);

        dataUrl = Response.data[0].email
       }).catch(function(error) {
         console.log(error);
       }); 
  
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
        case Login_User:
            return {
                ...state,
                email: action.email,
                password: action.password
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

  export const loginUser = (userData) => {
      console.log("loggin the user");
      console.log(userData);

      return dispatch => {
          dispatch ({
              type : Login_User,
              email : dataUrl,
              password : userData.password
        })
      }
  }
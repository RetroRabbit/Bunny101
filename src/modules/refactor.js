export const UPDATE_NAME_REQUESTED = 'refactor/UPDATE_NAME_REQUESTED'
export const UPDATE_EMAIL_REQUESTED = 'refactor/UPDATE_EMAIL_REQUESTED'

export const UPDATING_NAME = 'refactor/UPDATING_NAME'
export const UPDATING_EMAIL = 'refactor/UPDATING_EMAIL'

const initialState = {
	name: 'James Jones',
	email: 'james.jones@gmail.com',
	updateName: false,
	updateEmail: false,
	saveChanges: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		
		case UPDATE_NAME_REQUESTED:
		return {
			...state,
			updateName: true
		}
		
		case UPDATING_NAME:
		return {
			...state,
			//change here,
			//name:state.name,
			name: action.name,
			updateName: !state.updateName,
			saveChanges: true
            
		}
		
            
		case UPDATE_EMAIL_REQUESTED:
		return {
			...state,
			updateEmail: true
		}
		
		case UPDATING_EMAIL:
		return {
			...state,
			//change here,
			//console:log("email"),
			email: action.email,
			updateEmail: !state.updateEmail,
			saveChanges: true
		}
		
		default:
			return {
                ...state,
                saveChanges: false
            }
    }
}

export const refactorName = (userDetails) => {
	console.log("refactor name");
  return dispatch => {
    dispatch({
			type: UPDATE_NAME_REQUESTED
    })

    dispatch({
			type: UPDATING_NAME,
			name: userDetails.name

    })
  }
}

export const refactorEmail = (userDetails) => {
	console.log("refactor email");
  return dispatch => {
    dispatch({
			type: UPDATE_EMAIL_REQUESTED
			
    })

    dispatch({
			type: UPDATING_EMAIL,
			email: userDetails.email
    })
  }
}
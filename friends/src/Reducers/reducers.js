import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_FRIENDS,
    // GET_FRIENDS,
    // GET_FRIENDS_SUCCESS,
    // GET_FRIENDS_FAILURE
} from '../Actions/actiontypes';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    loggedIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export function friendsReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true
            } 
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false
            }
        case GET_FRIENDS:
            return {
                ...state,
                friends: action.payload
            }
        
        default: return state;
    }
}
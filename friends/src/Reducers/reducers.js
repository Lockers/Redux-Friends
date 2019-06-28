import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_FRIENDS,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
} from '../Actions/actiontypes';

export const initialState = {
    deletingFriend: false,
    gettingFriends: false,
    friends: [],
    loggingIn: false,
    loggedIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false
            };
        case GET_FRIENDS:
            return {
                ...state,
                gettingFriends: true
            };
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                gettingFriends: false,
                friends: action.payload
            };
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                gettingFriends: false,
                error: action.payload,

            };
        default: return state
    }
}

        
import axios from 'axios';
import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_FRIENDS,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE
} from './actiontypes';


const baseUrl = 'http://localhost:5000/api';

export function login(credentials) {
    return (dispatch) => {
        dispatch({ type: LOGGING_IN })
        return axios
            .post(`${baseUrl}/login`, credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: LOGIN_FAILURE, payload: err })
            })
    }
}

export function getFriends() {
    return (dispatch) => {
        dispatch({ type: GET_FRIENDS });

        const token = localStorage.getItem('token');
        const axiosConfig = token ? { headers: { 'Authorization': token } } : null;
    
        axios
            .get(`${baseUrl}/friends`, axiosConfig)
            .then(res => {
                dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
                console.log(res.data)
            })
            .catch(err => {
            dispatch({ type: GET_FRIENDS_FAILURE, payload: err})
        })
    }
}
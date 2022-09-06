import axios from 'axios'; 
import {encode as btoa} from 'base-64'; 

import { 
    USERNAME_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    LOGOUT_USER, 
    SET_TOKEN, 
    STORE_QUESTION_SUCCESS, 
    STORE_QUESTION_FAIL,
    RESET_QUESTION
} from "./actionTypes"

//set field username
export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED, 
        payload: text
    }
}

//set field password
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED, 
        payload: text
    }
}

//login user
export const loginUser = ({ username, password, navigation }) => {
    return (dispatch) => { 
        dispatch({ type: LOGIN_USER })
        return axios.get(
            //`http://10.0.2.2:8080/api/user/${username}` //--for android
            `http://localhost:8080/api/user/${username}`,
            {
                headers: {
                    "Authorization" : `Basic ${btoa(username + ":" + password)}`
                }
            }
        )
        .then(response => loginUserSuccess(dispatch, response, username, password, navigation))
        .catch(() => loginUserFailed(dispatch))
    }
}

//login helper 
const loginUserSuccess = (dispatch, response, username, password, navigation) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data
    }); 
    dispatch({
        type: SET_TOKEN,
        payload: `Basic ${btoa(username + ":" + password)}`
    }); 
    navigation.navigate('Home'); 
}

//login helper 
const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    }); 
}

//logout user 
export const logoutUser = ({ navigation }) => {
    return (dispatch) => {
        logout(dispatch, navigation)
    }
}

//logout helper 
const logout = (dispatch, navigation) => {
    dispatch({
        type: LOGOUT_USER
    }); 
    navigation.navigate('Login'); 
}


//change user information -- first name, last name, and password 
export const updateUserInformation = (fName, lName, password, question, answer, token) => {
    
    const array = [fName, lName, password, question, answer]
 
    return (dispatch) => {
        return axios.put(
            // 'http://10.0.2.2:8080/api/user', //--android 
            'http://localhost:8080/api/user',
            array,
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => console.log(res))
        .catch(err => console.log(err))
    }
}

//forget password 
export const forgetPassword = (uname) => {
    return (dispatch) => {
        dispatch({ type: 'STORE_QUESTION' })
        return axios.get(
            'http://localhost:8080/api/user/forgotPassword',
            {
                params: {
                    "uname" : uname
                }
            }
        ).then(res => dispatch({ type : STORE_QUESTION_SUCCESS, payload:res.data }) )
        .catch(() => dispatch({ type : STORE_QUESTION_FAIL }))
    }
}

//reset question fields 
export const resetQuestion = () => {
    return {
        type: RESET_QUESTION
    }
}


//recover password ---not working! 
export const recoverPassword = (uname, answer, password) => {
    const array =  [uname, answer, password]
    return (dispatch) => {
        return axios.put(
            'http://localhost:8080/api/user/forgotPassword',
             array
        ).then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
}


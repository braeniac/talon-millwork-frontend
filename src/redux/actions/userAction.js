import axios from 'axios'; 

import { 
    ADD_NEW_USER,
    USER_SUCCESSFULLY_ADDED,
    FAILED_TO_ADD_USER,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    RETRIEVE_USER,
    RETRIEVE_USER_SUCCESS,
    RETRIEVE_USER_FAIL
} from './actionTypes'

// //add user 
export const addUser = (token, fName, lName, uname, role, password) => {
    return (dispatch) => {
        dispatch({ type : ADD_NEW_USER })
        return axios.post(
            //'http://10.0.2.2:8080/api/user',  // --android 
            'http://localhost:8080/api/user',
            {
                "fName" : fName, 
                "lName" : lName,
                "uname" : uname,
                "role"  : role,
                "password" : password,
                "active": true,
                "recoveryAnswer": "",
                "recoveryQuestion": "" 
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(() => dispatch({ type : USER_SUCCESSFULLY_ADDED }))
        .catch(() => dispatch({ type : FAILED_TO_ADD_USER }))
    }
}


//delete user 
export const deleteUser = (token, uname) => {
    return (dispatch) => {
        dispatch({ type : DELETE_USER })
        return axios.delete(
            //`http://10.0.2.2:8080/api/user/${uname}`,   //--android
            `http://localhost:8080/api/user/${uname}`,
            {
                "uname" : uname
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(() => deleteUserSuccess(dispatch))
        .catch(() => deleteUserFailed(dispatch))
    }
}

//delete user helper --success
const deleteUserSuccess = (dispatch) => {
    dispatch({
        type: DELETE_USER_SUCCESS
    }); 
}

const deleteUserFailed = (dispatch) => {
    dispatch({
        type: DELETE_USER_FAIL
    })
}


//get all users
export const retrieveUsers = (token) => {
    return(dispatch) => {
        dispatch({ type : RETRIEVE_USER })
        return axios.get(
            'http://localhost:8080/api/user/all',
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => dispatch({ type : RETRIEVE_USER_SUCCESS, payload : res.data }))
        .catch(err => dispatch({ type : RETRIEVE_USER_FAIL }))
    }
}
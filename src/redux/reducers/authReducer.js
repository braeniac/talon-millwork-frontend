import { 
    USERNAME_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    LOGOUT_USER, 
    SET_TOKEN, 
    STORE_QUESTION_SUCCESS,
    STORE_QUESTION,
    STORE_QUESTION_FAIL,
    RESET_QUESTION
} from "../actions/actionTypes";


const INITIAL_STATE = {
    username: '',
    password: '',
    user : null,
    isLoading: false, 
    isLoggedIn: false, 
    error: '',     
    token: '',
    question: '',
    questionRecieved: false, 
    loadingQuestion: false,
    questionError: ''
}

export default auth = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_CHANGED: 
            return {
                ...state, 
                username: action.payload
            }
        case PASSWORD_CHANGED: 
            return {
                ...state, 
                password: action.payload
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state, 
                user: action.payload, 
                isLoggedIn: true, 
                isloading: false,
                error: '', 
                username: '',
                password: ''
            }
        case LOGIN_USER_FAIL: 
            return {
                ...state, 
                error: 'Authentication failed.', 
                password: '', 
                username: '',
                isloading: false
            }
        case LOGIN_USER: 
            return {
                ...state, 
                isLoading : true, 
                error : ''
            }
        case SET_TOKEN: 
            return {
                ...state,
                token: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                username: '',
                password: '',
                user : null,
                isLoading: false, 
                isLoggedIn: false, 
                error: '',     
                token: ''
            }
        case STORE_QUESTION:
            return {
                ...state,
                loadingQuestion: true,
                questionError: ''
            }
        case STORE_QUESTION_SUCCESS:
            return {
                ...state,
                question : action.payload,
                questionRecieved : true,
                loadingQuestion: false,
                questionError: ''
            }
        case STORE_QUESTION_FAIL: 
            return {
                ...state,
                question: '',
                questionRecieved: false, 
                loadingQuestion: false,
                questionError: 'The username you entered did not match our records. Please double-check and try again!'
            }
        case RESET_QUESTION:
            return {
                ...state,
                question: '',
                questionRecieved: false, 
                loadingQuestion: false,
                questionError: ''
            }
        default:
            return state; 
    }
}


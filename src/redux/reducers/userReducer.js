import { 
    ADD_NEW_USER,
    USER_SUCCESSFULLY_ADDED,
    FAILED_TO_ADD_USER,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    RESET_USER_STATE,
    RETRIEVE_USER,
    RETRIEVE_USER_SUCCESS,
    RETRIEVE_USER_FAIL
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isFetching : false,
    isDeleting : false,
    user : null, 
    error: '',
    isSuccess : false
}

export default user = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_NEW_USER: 
            return {
                ...state,
                isFetching : true
            }
        case USER_SUCCESSFULLY_ADDED: 
            return {
                ...state,
                isFetching : false, 
                isSuccess : true 
            }
        case FAILED_TO_ADD_USER: 
            return {
                ...state, 
                isFeching : false, 
                isSuccess : false, 
                error : 'User was not added. Please try again!'
            }
        case DELETE_USER: 
            return {
                ...state,
                isDeleting : true,
                isSuccess : false
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isDeleting : false,
                isSuccess : true,
                error : ''
            }
        case DELETE_USER_FAIL :
            return {
                ...state,
                isDeleting : false, 
                error : 'User was not deleted. Please try again!',
                isSuccess : false
            }
        case RESET_USER_STATE: 
            return {
                ...state,
                isFetching : false,
                isDeleting : false,
                user : null, 
                error: '',
                isSuccess : false
            }
        case RETRIEVE_USER:
            return {
                ...state,
                isFetching : true
            }
        case RETRIEVE_USER_SUCCESS: 
            return {
                ...state,
                isFetching : false, 
                isSuccess : true,
                user : action.payload,
                error: ''
            }
        case RETRIEVE_USER_FAIL: 
            return {
                ...state,
                isFetching : false, 
                error : 'Unable to retrieve users. Please try again!'
            }
        
        default:
            return state;
    }
}


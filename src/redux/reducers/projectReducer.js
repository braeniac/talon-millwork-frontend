import { 
    PROJECT_SUCCESSFULLY_ADDED, 
    FAILED_TO_ADD_PROJECT, 
    ADD_NEW_PROJECT, 
    GET_PROJECTS,
    PROJECTS_RECEIVED,
    PROJECTS_NOT_RECEIVED,
    RESET_PROJECT_STATE
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isLoading: false, 
    error: '',
    success: false,
    allProjects : [], 
    isFetching: 'false'
}

export default project = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_NEW_PROJECT: 
            return {
                ...state,
                isLoading : true
            }
        case PROJECT_SUCCESSFULLY_ADDED: 
            return {
                ...state,
                success: true,
                isLoading: false, 
                error: ''
            }
        case FAILED_TO_ADD_PROJECT: 
            return {
                ...state,
                error: 'Failed to add project. Please try again!',
                isLoading: false
            }
        case GET_PROJECTS: 
            return {
                ...state,
                success : false,
                isFetching : true,
            }
        case PROJECTS_RECEIVED: 
            return {
                ...state,
                allProjects : action.payload,
                isFetching : false, 
                success : true
            }
        case PROJECTS_NOT_RECEIVED: 
            return {
                ...state,
                ifFetching : false,
                error : 'Failed to retrieve project(s). Please try again!',
                isLoading: false, 
                success: false,
                allProjects : [], 
            }
        case RESET_PROJECT_STATE: 
            return {
                isLoading: false, 
                error: '',
                success: false,
                isFetching: 'false'
            }
        default: 
            return state; 
    }
}
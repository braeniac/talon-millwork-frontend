import { combineReducers } from 'redux'; 
import auth from './authReducer'; 
import project from './projectReducer'; 
import user from './userReducer'; 
import report from './reportReducer'; 

export default combineReducers({
    auth, 
    project, 
    user, 
    report
}); 



//auth---------------------------------------------------------------------

export const USERNAME_CHANGED           = 'username_changed'; 
export const PASSWORD_CHANGED           = 'password_changed';

export const LOGIN_USER                 = 'login_user'; 
export const LOGIN_USER_SUCCESS         = 'login_user_success'; 
export const LOGIN_USER_FAIL            = 'login_user_fail'; 
export const SET_TOKEN                  = 'set_token'; 

export const STORE_QUESTION             = 'store_question'; 
export const STORE_QUESTION_SUCCESS     = 'store_question_success'; 
export const STORE_QUESTION_FAIL        = 'store_question_fail'
export const RESET_QUESTION             = 'reset_question';

export const LOGOUT_USER                = 'logout_user'; 


//user---------------------------------------------------------------------

//add new user
export const ADD_NEW_USER               = 'add_new_user'; 
export const USER_SUCCESSFULLY_ADDED    = 'user_successfully_added';
export const FAILED_TO_ADD_USER         = 'failed_to_add_user'; 

//delete user 
export const DELETE_USER                = 'delete_user'; 
export const DELETE_USER_SUCCESS        = 'delete_user_success'; 
export const DELETE_USER_FAIL           = 'delete_user_fail'; 
export const RESET_USER_STATE           = 'reset_user_state'; 


//retrieve user 
export const RETRIEVE_USER              = 'retrieve_user'; 
export const RETRIEVE_USER_SUCCESS      = 'retrieve_user_success'
export const RETRIEVE_USER_FAIL         = 'retrieve_user_fail'; 

//project------------------------------------------------------------------

//add project
export const ADD_NEW_PROJECT            = 'add_new_project'; 
export const PROJECT_SUCCESSFULLY_ADDED = 'project_successfully_added'; 
export const FAILED_TO_ADD_PROJECT      = 'failed_to_add_project'; 

//remove project
export const GET_PROJECTS               = 'get_projects'; 
export const PROJECTS_RECEIVED          = 'projects_received'; 
export const PROJECTS_NOT_RECEIVED      = 'projects_not_received'; 
export const RESET_PROJECT_STATE        = 'reset_project_state'; 

//Reports------------------------------------------------------------------
export const SUBMIT_REPORT              = 'sumbit_report'; 
export const SUBMIT_REPORT_SUCCESS      = 'submit_report_success'; 
export const SUBMIT_REPORT_FAIL         = 'submit_report_fail'; 
export const RESET_REPORT               = 'reset_report';

export const GET_REPORT                 = 'get_report'; 
export const GET_REPORT_SUCCESS         = 'get_report_success';
export const GET_REPORT_FAIL            = 'get_report_fail';
export const SAVE_INSTALLERS_SUCCESS    = 'save_installers_success'; 
export const SAVE_SUBTRADES_ON_SITE_SUCCESS = 'save_subtrades_on_site_success'; 
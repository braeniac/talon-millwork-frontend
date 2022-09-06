import {
    SUBMIT_REPORT,
    SUBMIT_REPORT_SUCCESS,
    SUBMIT_REPORT_FAIL,
    RESET_REPORT,
    GET_REPORT,
    GET_REPORT_SUCCESS,
    GET_REPORT_FAIL,
    SAVE_INSTALLERS_SUCCESS,
    SAVE_SUBTRADES_ON_SITE_SUCCESS
 } from "../actions/actionTypes"; 

const INITIAL_STATE = {
    report: [],
    reportError: '',
    retrieving: false,
    reportSuccess: false,
    installers: []
}

export default auth = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SUBMIT_REPORT:
            return {
                ...state,
                retrieving : true 
            }
        case SUBMIT_REPORT_SUCCESS: 
            return {
                ...state, 
                retrieving : false, 
                reportSuccess : true, 
                reportError : '',
            }
        case SUBMIT_REPORT_FAIL:
            return {
                ...state, 
                retrieving : false, 
                reportSuccess : false, 
                reportError : 'Submission failed. Please double-check and try again!'
            }
        case RESET_REPORT: 
            return {
                ...state,
                report: [],
                reportError: '',
                retrieving: false,
                reportSuccess: false,
            }
        case GET_REPORT:
            return {
                ...state,
                retrieving : true
            }
        case GET_REPORT_SUCCESS: 
            return {
                ...state,
                retrieving : false,
                reportSuccess: true,
                report: action.payload
            }
        case GET_REPORT_FAIL:
            return {
                ...state,
                retrieving : false,
                reportError : 'Could not retrieve reports. Please double-check and try again!',
                report : [],
                reportSuccess: false
            }
        case SAVE_INSTALLERS_SUCCESS:
            return {
                ...state,
                installers: action.payload
            }
        case SAVE_SUBTRADES_ON_SITE_SUCCESS:
            return {
                ...state, 
                subtrades: action.payload
            }
        default:
            return state; 
    }

}
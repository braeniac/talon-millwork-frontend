import axios from 'axios'; 

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
 } from "./actionTypes"


export const submitReport = (token, rname, pid, date, humidity, weather, siteConditions, obstacles, toDo, notes, nextDayPlan, creatorUid, supervisorUid, installers, subtradesOnSite) => {
    return (dispatch) => {
        dispatch({ type : SUBMIT_REPORT })
        return axios.post(
            // 'http://10.0.2.2:8080/api/report', //--android
            'http://localhost:8080/api/report',
            {
                "rname" : rname,
                "pid" : pid,
                "date" : date,
                "humidity" : humidity,
                "weather" : weather,
                "siteConditions" : siteConditions,  
                "obstacles" : obstacles,
                "toDo" : toDo,
                "notes" : notes, 
                "nextDayPlan" : nextDayPlan,
                "creatorUid" : creatorUid,
                "supervisorUid" : supervisorUid
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        )
        .then(res => {
            installers.map(d => {
                dispatch(submitInstallersOnSite(token, res.data, d))
            })
            subtradesOnSite.map(s => {
                dispatch(submitSubtradesOnSite(token, res.data, s))
            })
        })
        .catch( () => dispatch({ type : SUBMIT_REPORT_FAIL }))
    }
}


export const submitInstallersOnSite = (token, rid, name) => {
    return (dispatch) => {
        return axios.post(
            'http://localhost:8080/api/report/installer',
            {
                headers: {
                    "Authorization" : token
                }
            },
            {
                params: {
                    "rid" : rid,
                    "name" : name
                }
            }
        ).then(res => dispatch({ type : SUBMIT_REPORT_SUCCESS }))
        .catch(err => console.log(err))
    }
}


export const submitSubtradesOnSite = (token, rid, name) => {
    return (dispatch) => {
        return axios.post(
            'http://localhost:8080/api/report/subtrade',
            {
                headers: {
                    "Authorization" : token
                }
            },
            {
                params: {
                    "rid" : rid,
                    "name" : name
                }
            }
        ).then(res => dispatch({ type : SUBMIT_REPORT_SUCCESS }))
        .catch(err => console.log(err))
    }
}


//reset all reports 
export const resetReport = () => {
    return {
        type: RESET_REPORT
    }
}


//get all of the reports 
export const retrieveReport = (token) => {
    return (dispatch) => {
        return axios.get(
            // 'http://10.0.2.2:8080/api/report', //--android
            'http://localhost:8080/api/report',
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => console.log(res.data))
        // ).then( res => dispatch({ type : SUBMIT_REPORT_SUCCESS, payload : res.data }))
        .catch( () => dispatch({ type : SUBMIT_REPORT_FAIL }))
    }
}


//get a report by project id 
//retrieve installers and subtrades on site 
export const retrieveReportByID = (token, pid) => {
    return (dispatch) => {
        dispatch({ type: GET_REPORT })
        return axios.get(
            `http://localhost:8080/api/report/${pid}`,
            {
                headers: {
                    "Authorization" : token 
                }
            }
        ).then(res => dispatch({ type : GET_REPORT_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type : GET_REPORT_FAIL}))
    }
}



//retrieve installers

export const retrieveInstallersByRID = (token, rid) => {

    console.log(token)
    console.log(rid)


    return (dispatch) => {
        return axios.get(
            'http://localhost:8080/api/report/installer',
            {
                params: {
                    "rid" : rid
                }
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => dispatch({ type: SAVE_INSTALLERS_SUCCESS, payload: res.data}))
        .catch(err => console.log(err))
    }
}



//retrieve subtrades on site 
export const retrieveSubtradesByRID = (token, rid) => {
    
    return (dispatch) => {
        return axios.get(
            'http://localhost:8080/api/report/subtrade',
            {
                params: {
                    "rid" : rid
                }
            },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => dispatch({ type: SAVE_SUBTRADES_ON_SITE_SUCCESS, payload: res.data}))
        .catch(err => console.log(err))
    }
}
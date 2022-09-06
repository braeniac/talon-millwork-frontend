import axios from 'axios'
import { 
    ADD_NEW_PROJECT, 
    PROJECT_SUCCESSFULLY_ADDED, 
    FAILED_TO_ADD_PROJECT, 
    GET_PROJECTS,
    PROJECTS_RECEIVED,
    PROJECTS_NOT_RECEIVED
} from './actionTypes'


//add new project
export const addNewProject = (data, token) => {
    return (dispatch) => { 
        dispatch({ type : ADD_NEW_PROJECT })
        return axios.post(
            //'http://10.0.2.2:8080/api/project', // --android
            'http://localhost:8080/api/project',
            { "pname" : data },
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(() => dispatch({ type : PROJECT_SUCCESSFULLY_ADDED }))
        .catch(() => dispatch({ type : FAILED_TO_ADD_PROJECT }))
    }
}


//get all projects 
export const allActiveProjects = (token) => {
    return (dispatch) => {
        dispatch({ type : GET_PROJECTS })
        return axios.get(
            //'http://10.0.2.2:8080/api/project, // --android
            'http://localhost:8080/api/project',
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => dispatch({ type : PROJECTS_RECEIVED, payload : res.data }))
        // .catch(() => dispatch({ type : PROJECTS_NOT_RECEIVED }))
        .catch(err => console.log(err))
    }
}


//get project by id 
export const activeProject = (pid, token) => {
    return(dispatch) => {
        dispatch({ type : GET_PROJECTS })
        return axios.get(
            // `http://10.0.2.2:8080/api/project/${pid}`, // --android
            `http://localhost:8080/api/project/${pid}`, 
            {
                headers: {
                    "Authorization" : token
                }
            }
        ).then(res => dispatch({ type : PROJECTS_RECEIVED, payload : res.data }))
        // .catch(() => dispatch({ type : PROJECTS_NOT_RECEIVED }))
        .catch(err => console.log(err))
    }
}
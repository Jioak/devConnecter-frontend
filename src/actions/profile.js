import axios from "axios";

import {setAlert} from './alert';

import { ACCOUNT_DELETED, CLEAR_PROFILE, GET_PROFILE,GET_PROFILES,GET_REPOS,PROFILE_ERROR, UPDATE_PROFILE } from "./type";
import { url } from "../url";
// import { set } from "mongoose";
// 
// 
export const getCurrentProfile =() =>async dispatch => {


    try {
        const res=await axios.get(`${url}/api/profile/me`);
        
        dispatch({
            type:GET_PROFILE,
            payload:res.data

        })
        
        
    } catch (error) {

        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }

}
// create or update profile


export const createProfile=(formData,history,edit =false)=> async dispatch =>{


    try {

        const config ={
            Headers:{
                'Content-type':'application/json'
            }
        }

        const res =await axios.post(`${url}/api/profile`,formData,config)

        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })

        dispatch(setAlert(edit ? 'Profile Updated':'Profile Created','success'));

        if(!edit){
            history.push('/dashboard')
        }
        
    } catch (error) {

        const errors=error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }

        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }





}



//add Experience

export const addExperience=(formData,history)=> async dispatch =>{


    try {

        const config ={
            Headers:{
                'Content-type':'application/json'
            }
        }

        const res =await axios.put(`${url}/api/profile/experience`,formData,config)

        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })

        dispatch(setAlert('Experience Added','success'));

            history.push('/dashboard')
        
        
    } catch (error) {

        const errors=error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }

        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }





}

// add education


export const addEducation=(formData,history)=> async dispatch =>{


    try {

        const config ={
            Headers:{
                'Content-type':'application/json'
            }
        }

        const res =await axios.put(`${url}/api/profile/education`,formData,config)

        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })

        dispatch(setAlert('Education Added','success'));

            history.push('/dashboard')
        
        
    } catch (error) {

        const errors=error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }

        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }



}



// Delete experience

export const deleteExperience =id => async dispatch => {

    try {

        const res=await axios.delete(`${url}/api/profile/experience/${id}`)

        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })
        dispatch(setAlert('Experience Removed','success'));
        
    } catch (error) {
       
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}




// Delete education

export const deleteEducation =id => async dispatch => {

    try {

        const res=await axios.delete(`${url}/api/profile/education/${id}`)

        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })
        dispatch(setAlert('Education Removed','success'));
        
    } catch (error) {
       
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}


// Delete Account an d profile




export const deleteAccount =() => async dispatch => {

    if(window.confirm('Are you sure? This can not be undone!'))

    try {

        const res=await axios.delete(`${url}/api/profile`)

        dispatch({
            type:CLEAR_PROFILE,
        
        })
        dispatch({
            type:ACCOUNT_DELETED
        })

        dispatch(setAlert('Your account has been permanantly deleted'));
        
    } catch (error) {
       
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}


// get All profiles

export const getProfiles =() => async dispatch => {

    dispatch({type:CLEAR_PROFILE})

try {
    const res=await axios.get(`${url}/api/profile`);
        
dispatch({
    type:GET_PROFILES,
    payload:res.data
})
        

    
} catch (error) {


    dispatch({
        type:PROFILE_ERROR,
        payload:{msg:error.response.statusText,status:error.response.status}
    })
   
   
   

}


}





// get profile by id

export const getProfileById =(userid) => async dispatch => {

  

try {
    const res=await axios.get(`${url}/api/profile/user/${userid}`);
        
dispatch({
    type:GET_PROFILE,
    payload:res.data
})
        

    
} catch (error) {


    dispatch({
        type:PROFILE_ERROR,
        payload:{msg:error.response.statusText,status:error.response.status}
    })
   
   
   

}


}


// Get Github repos



export const getGithubRepos=(username) => async dispatch => {

  

    try {
        const res=await axios.get(`${url}/api/profile/github/${username}`);
            
    dispatch({
        type:GET_REPOS,
        payload:res.data
    })
            
    
        
    } catch (error) {
    
    
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
       
       
       
    
    }
    
    
    }

















































































































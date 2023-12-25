import axios from "axios";
import { setAlert } from "./alert";
import { ADD_COMMENT, ADD_POST, DELETE_POST, GET_POST, GET_POSTS,POST_ERROR, REMOVE_COMMENT, UPDATE_LIKES } from "./type";
import { url } from "../url";



export const getPosts= () => async dispatch =>{

    try {

        const res=await axios.get(`{${url}/api/post}`);


        dispatch({
            type:GET_POSTS,
            payload:res.data
        })

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}

//add like

export const addLike=postId=> async dispatch =>{

    try {

        const res=await axios.put(`${url}/api/post/like/${postId}`);


        dispatch({
            type:UPDATE_LIKES,
            payload:{postId,likes:res.data}
        })

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}


//removelike

export const removeLike=postId=> async dispatch =>{

    try {

        const res=await axios.put(`${url}/api/post/unlike/${postId}`);


        dispatch({
            type:UPDATE_LIKES,
            payload:{postId,likes:res.data}
        })

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}

//deletePost

export const deletePost=postId=> async dispatch =>{

    try {

        const res=await axios.delete(`${url}/api/post/${postId}`);

console.log(res.data)
        dispatch({
            type:DELETE_POST,
            payload:postId
        })

        dispatch(setAlert('Post Removed','success'))

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.msg}
        })
        
    }
}



//addPost

export const addPost=formData=> async dispatch =>{

    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {

     const res= await axios.post(`${url}/api/post`,formData,config)


        dispatch({
            type:ADD_POST,
            payload:res.data
        })

        dispatch(setAlert('Post Created','success'))

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}


// Get Post

export const getPost=id=> async dispatch =>{

    try {

        const res=await axios.get(`${url}/api/post/${id}`);


        dispatch({
            type:GET_POST,
            payload:res.data
        })

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}

//addcomment


export const addComment=(postId,formData)=> async dispatch =>{

    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {

     const res= await axios.post(`${url}/api/posts/comment/${postId}`,formData,config)


        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        })

        dispatch(setAlert('Comment Added','success'))

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}

// 
// deleteComment

export const 
deleteComment=(postId,commentId)=> async dispatch =>{

    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {

     const res= await axios.delete(`${url}/api/posts/comment/${postId}/${commentId}`,config)


        dispatch({
            type:REMOVE_COMMENT,
            payload:commentId
        })

        dispatch(setAlert('Comment Removed','success'))

        
    } catch (error) {
        

        dispatch({
            type:POST_ERROR,
            payload:{msg:error.response.statusText,status:error.response.status}
        })
        
    }
}
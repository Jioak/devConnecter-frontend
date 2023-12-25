import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Link, Navigate } from 'react-router-dom'


import {register} from '../../actions/auth';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert'


export const Register = ({ setAlert, register, isAuthenticated }) => {

const [formData,setFormData]=useState({
    name:'',email:'',password:'',confirmPassword:''
})

const onChange= (e) => {
setFormData({...formData,[e.target.name]:e.target.value})
}
const {name,password,confirmPassword,email}=formData;

const  onSubmit = async (e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
    
        setAlert('Passwords do not match', 'danger');
    // toast.error('password do not match')
console.log('password do not match')
    } else{
        
        

        register({name,email,password})
        // console.log('success')
        
        // const newUser={
            // name,
            // email,password
        // }

        // try {
            // const config={
                // headers:{
                    // 'Content-Type':'application/json'

                // }
            // }
            // const body=JSON.stringify(newUser);
            // 
            // const res=await axios.post(`api/users`,body,config)

            // console.log(res.data)

            // 
        // } catch (error) {
            // console.error(error.response.data)
            // 
        // }
    
    }
}
if(isAuthenticated){
    return <Navigate to='/dashboard'/>
}

  return (
    <div className='container'>

    <h1 className='large text-primary'>
        Sign Up</h1> 
        <p className='lead'><i className='fas fa-user'></i>
        Create Your Account</p>
        <form onSubmit={onSubmit} className='form'>
            <div className='form-group'>
                <input type='text' placeholder='name' name='name'
                 onChange={e => onChange(e)} required
                />

            </div>
            <div className='form-group'>
     <input type='email' placeholder='Email Address' name='email'
          onChange={e => onChange(e)}  required/>
     <p className='form-text'>This site uses Gravatar, so if you want
     a profile image,use a Gravatar email</p>
 </div>
 <div className='form-group'>
     <input type='password' name='password' placeholder='Password'
   onChange={e => onChange(e)} required minLength='6'/>
 </div>
 <div className='form-group'>
    <input type='password' placeholder='Confirm Password' name='confirmPassword' 
      onChange={e => onChange(e)} required minLength='6'/>
</div>
<input type='submit' value='Register' 
className='btn btn-primary'/>
        </form>

        <p className='my-1'>
            Already have an account? {''}
            <Link to='/login'>Sign In</Link>
        </p>

    </div>
  )
}


Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });


export default connect(mapStateToProps,{setAlert,register})(Register);


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Profile from './components/profile/Profile';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';

import PrivateRoute from './components/routing/PrivateRoute';
// import { LOGOUT } from './actions/types';
// 
// Redux
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utills/setAuthToken';
import EditProfile from './components/profile-forms/EditProfile';
// 
import './App.css';
import Profiles from './components/profiles/Profiles';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
  

  

const App = () => {

useEffect(()=>{
  if(localStorage.token){
    setAuthToken(localStorage.token)
        }
    
  store.dispatch(loadUser())
},[])



 
    // try to fetch a user, if no token or invalid token we
  
  

    // log user out from all tabs if they log out in one tab
  
   
   
   
   
  
  
  

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profiles" element={<Profiles/>} />
          <Route path="profile/:id" element={<Profile/>} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
            <Route
    path="/create-profile"
    element={<PrivateRoute component={CreateProfile} />}
  />

               <Route
  path="/edit-profile"
  element={<PrivateRoute component={EditProfile} />}
/>    
    
         
         
<Route
  path="/add-experience"
  element={<PrivateRoute component={AddExperience} />}
/>    
    
         
              

<Route
   path="/posts"
  element={<PrivateRoute component={Posts} />}
/>    

         
<Route
   path="/posts/:id"
  element={<PrivateRoute component={Post} />}
/>    
<Route
  path="/dashboard/add-education"
  element={<PrivateRoute component={AddEducation} />}
/>    
         
         
         
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;




































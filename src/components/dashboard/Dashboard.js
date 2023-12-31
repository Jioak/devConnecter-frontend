import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardAction from './DashboardAction';
import Experience from './Experience';
import Education from './Education';

 const Dashboard = ({getCurrentProfile,deleteAccount,auth:{user},profile:{profile,loading}}) => {

  useEffect(()=>{
    getCurrentProfile()
  },[getCurrentProfile])



  return (
    
    <div className='container'>
      {
        loading && profile === null ? <Spinner/>:
        <div>
<h1 className='large text-primary'>Dashboard</h1>
<p className='lead'>
  <i className='fas fa-user'/> Welcome {user &&user.name}

</p>
{profile !== null ? (<div>
  <DashboardAction/>
  <Experience experience={profile.experience}/>
  <Education education={profile.education}/>

  <div className='my-2'>
    <button className='btn bnt-danger' onClick={()=>deleteAccount()}>
<i className='fas fa-user-minus'></i> Delete My Account
    </button>
  </div>
  </div>
):(<div>
  <p>you have not yet setup a profile, please add some info</p>
  <Link to='/create-profile' className='btn btn-primary my-1'>
    Create Profile
  </Link>
</div>)}

        </div>
      }
    </div>
  )
}

Dashboard.propTypes={
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deleteAccount:PropTypes.func.isRequired
}

const mapStateToProps= state=>({

  auth:state.auth,
profile:state.profile
})

export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(Dashboard)
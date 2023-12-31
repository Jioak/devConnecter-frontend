import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import {connect} from 'react-redux'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'
const Profiles = ({getProfiles,profile:{profiles,loading}}) => {


    useEffect(()=>{
        getProfiles()
    },[getProfiles])


  return (

    <div className='container'>
        { loading ? <Spinner/>:
         <div>
                <h1 className='large text-primary'>Developers</h1>
                <p className='lead'>
                    <i className='fab fa-connectdevelop'></i>Browse and connect
                    with developers
                </p>
                <div className='profiles'>
                    {profiles.length>0 ? (<div>
                        {profiles.map((profile) => {
                        return    <ProfileItem key={profile.id} profile={profile}/>
                            // console.log(profile)
} )}
                    </div>):(<h4>No profiles found...</h4>)}
                </div>
            </div>
        }

    </div>
  )
}

Profiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}

const mapStateToProps=state => ({
    profile:state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)
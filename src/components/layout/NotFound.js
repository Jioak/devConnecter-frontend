import React from 'react'
import PropTypes from 'prop-types'

const NotFound = props => {



  return (
    <div>
<h1 className='x-large text-primary'>
    <i className='fas fa-exclamation-triangle'></i>
    Page Not Found
</h1>
<p className='large'>Soory,this page does not exist</p>
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound
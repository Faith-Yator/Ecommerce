import React from 'react'
import './rightside.css'
import Update from './Update'
import Customerreview from './Customerreview' 

const Rightside = () => {
  return (
    <div className='rightside'>
      <div>
        <h3>Updates</h3>
        <Update/>
      </div>
      <div>
        <h3> Customer Review</h3>
        <Customerreview/>
      </div>
    </div>
  )
}

export default Rightside

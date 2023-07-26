import React from 'react'
import './admininfo.css'
import Sidebar from './Sidebar'
import Main from './Main'
import Rightside from './Rightside'

function AdminInfo() {
  return (
    <div className='app'>
        <div className="appglass">
        <Sidebar/>
        <Main/>
        <Rightside/>
        </div>
      
    </div>
  )
}

export default AdminInfo

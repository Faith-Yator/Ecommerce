import React from 'react'
import './update.css'
import { UpdateData } from '../Data/Data'

const Update = () => {
  return (
    <div className='update'>
        {UpdateData.map((Update)=>{
            return(
                <div className="Update">
                    <img src={Update.img} alt=""/>
                    <div className="not1">
                    <div style={{marginBottom:' 0.5rem'}}>
                        <span>{Update.name}</span>
                        <span>{Update.not1}</span>
                        <span>{Update.time}</span>
                    </div>
                    </div>
                    
                       
                    
                </div>
            )
        })}
      
    </div>
  )
}

export default Update

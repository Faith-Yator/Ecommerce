import React from 'react'
import "./placeorder.css"
import { Link } from 'react-router-dom'

function PlaceOrder() {
  return (
    <div>
        <div className="card2">
            <img src=".\src\home\1 (5).jpg"/>
      </div>
      <div>
      <div className="order">
      <div className="card">
      <Link to="/order">
         <p>PlaceOrder</p>
         </Link>
      </div>
      <div className="card">
      <Link to="/trackorderpage">
         <p>TrackOrder</p>
         </Link>
      </div>
      <div className="card">
      <Link to="/deliverytime">
         <p>Deliverytimeline</p>
         </Link>
      </div>
      <div className="card">
      <Link to="/questions">
         <p>Frequent delivery questions</p>
         </Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default PlaceOrder

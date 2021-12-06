import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
        <Link to ="/" className="navbar-item">
            Home
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="navbar-brand">
         
          <Link to ="/character" className="navbar-item">
            Characters
          </Link>
        
          <Link to ="/episode" className="navbar-item">
            Episodes
          </Link>
          <Link to="/quote" className="navbar-item">
            Quote Game
          </Link>
        </div>
      </div>
    </nav>
  )
}


export default Nav
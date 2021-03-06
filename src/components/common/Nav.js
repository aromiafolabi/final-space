import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className="home-navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to ="/" className="navbar-item">
            Home
          </Link>      
          <Link to ="/character" className="navbar-item">
            Characters
          </Link>        
          <Link to ="/episode" className="navbar-item">
            Episodes
          </Link>
        </div>
      </div>
    </nav>
  )
}


export default Nav

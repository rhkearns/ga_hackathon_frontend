import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './NavBar-styles'
import logo from '../../pages/images/Logo.png';

const NavBar = ({ user, handleLogout, handleShowSignup, handleShowLogin }) => {
  return (
    <Wrapper>
       <img src={logo} alt='logo'/>
      {user ?
        <nav>
          <ul className='logged-in'>
            <li>Welcome, {user.name}</li>
            <li><Link to='/dashboard'>Event Dashboard</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
          <li><button className='login-btn' onClick={handleShowLogin}>Login</button></li>
            <li><button className='signup-btn' onClick={handleShowSignup}>Sign Up</button></li>
          </ul>
        </nav>
      }
    </Wrapper>
  )
}

export default NavBar
import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <NavLink></NavLink>
      <Link to={'/'}><h1>Home</h1></Link>
      <Link to={'/about'}><h1>About</h1></Link>
      <Link to={'/contact'}><h1>Contact</h1></Link>
    </div>
  )
}

export default Header

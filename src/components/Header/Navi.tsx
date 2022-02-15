import React from 'react';
import { NavLink } from 'react-router-dom';

const Navi = () => {

    return(
      <>
      <nav className='nav'>
        <div className='nav__wrapper'>
          <div className="nav__left">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contents">Contents</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
          <div className="nav__right">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </div>
      </nav>
      </>
    )
}

export default Navi
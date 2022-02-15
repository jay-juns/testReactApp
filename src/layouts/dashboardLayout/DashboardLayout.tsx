import React from 'react';
import Navi from '../../components/Header/Navi';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return(
    <div className='wrapper'>
        <Navi />
        <div className='left-dashboard__wrapper'>
          <ul>
            <li>
              <NavLink end to={`/dashboard`}>
                  dash board
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/sub/clip`}>
                clip board
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/sub/etc`}>
                etc board
              </NavLink>
            </li>
          </ul>
        </div>
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default DashboardLayout;
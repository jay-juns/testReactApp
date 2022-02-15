import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/mainLayout/MainLayout';
import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout';
import Home from './../pages/Home/Home';
import About from './../pages/About/About';
import Contents from './../pages/Contents/Contents';
import Dashboard from '../pages/Dashboard/Dashboard';
import DashboardSub from '../pages/Dashboard/DashboardSub';
import DashboardSubEtc from '../pages/Dashboard/DashboardSubEtc';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import NotFound from '../pages/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/sub/clip" element={<DashboardSub />} />
        <Route path="/dashboard/sub/etc" element={<DashboardSubEtc />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
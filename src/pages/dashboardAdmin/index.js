import React from 'react';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';

function DashboardAdmin() {
    return (
      <div style={{display: "flex", gap: "1rem"}}>
        <SideBar />
        <div><Outlet /></div>
      </div>
    );
  }
  
  export default DashboardAdmin;
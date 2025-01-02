import React from 'react'
import './../Css/Admin/Admin.css'
import AdminHeader from '../Components/Admin/AdminHeader/AdminHeader'
import AdminSidebar from '../Components/Admin/AdminSidebar/AdminSidebar'
import {Outlet} from 'react-router'
const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <Outlet/>
    </>
  )
}

export default AdminLayout
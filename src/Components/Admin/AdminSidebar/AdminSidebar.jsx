import React from 'react'
import { NavLink } from 'react-router'
const AdminSidebar = () => {
  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link collapsed")} to="/admin/dashboard">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link collapsed")} to="/admin/UserReg">
              <i className="bi bi-grid" />
              <span>User</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link collapsed")} to="/admin/VandoReg">
              <i className="bi bi-grid" />
              <span>Vendor</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link collapsed")} to="/admin/ServiceManReg">
              <i className="bi bi-grid" />
              <span>Technician</span>
            </NavLink>
          </li>
          {/* End Dashboard Nav */}

          {/* <li className="nav-item">
        <Link
          className="nav-link collapsed"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          to="#"
        >
          <i className="bi bi-layout-text-window-reverse" />
          <span>Tables</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="tables-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <Link to="tables-general.html">
              <i className="bi bi-circle" />
              <span>General Tables</span>
            </Link>
          </li>
          <li>
            <Link to="tables-data.html">
              <i className="bi bi-circle" />
              <span>Data Tables</span>
            </Link>
          </li>
        </ul>
      </li> */}
          {/* End Tables Nav */}


          {/* End Blank Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>

  )
}

export default AdminSidebar
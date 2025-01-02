import React from 'react'
import {Link} from 'react-router'
const AdminSidebar = () => {
  return (
<>
  {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <Link className="nav-link " to="/">
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </Link>
      </li>
      {/* End Dashboard Nav */}
      <li className="nav-item ">
        <Link className="nav-link collapsed" to="/admin/manageenquiry">
          <i className="bi bi-grid" />
          <span>ManageEnquiry</span>
        </Link>
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
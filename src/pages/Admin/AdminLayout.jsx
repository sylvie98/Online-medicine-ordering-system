import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Component/Sidebar'
import NavAdmin from '../../Component/NavAdmin'
const AdminLayout = () => {
  return (
    <div>
      <NavAdmin/>
      <Sidebar/>
      <main>
        <Outlet/>
        </main>
        {/* <Footer/> */}
    </div>
  )
}

export default AdminLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Component/Sidebar'
import Footer from '../../Component/Footer'
const AdminLayout = () => {
  return (
    <div>
      <Sidebar/>
      <main>
        <Outlet/>
        </main>
        {/* <Footer/> */}
    </div>
  )
}

export default AdminLayout

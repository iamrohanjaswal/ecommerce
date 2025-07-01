import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="border-1 border-gray-200">
      {/* topbar
      navbar 
      Cart Drawer*/}
      <Topbar/>
      <Navbar/>
    </header>
  )
}

export default Header

import React from 'react'
import './layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Layout = ({children}) => {
  return (
    <div className='layout_container'>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout
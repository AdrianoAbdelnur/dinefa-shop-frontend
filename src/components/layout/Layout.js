import React from 'react'
import './layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Layout = ({children, searchInput, setSearchInput}) => {
  
  return (
    <div className='layout_container'>
        <Header 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
          {children}
        <Footer/>
    </div>
  )
}

export default Layout
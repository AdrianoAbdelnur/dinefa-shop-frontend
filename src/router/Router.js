import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../components/pages/home/Home'


const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
              <Route path='/' element={<Home/>}   />
              <Route path='/login' element={<>login</>}/>
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
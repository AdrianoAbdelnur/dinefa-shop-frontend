import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../components/pages/home/Home'
import Product from '../../src/components/pages/productPage/Product'
import Carts from '../components/pages/cart/Carts'
import Register from '../components/pages/register/Register'
import Login from '../components/pages/login/Login'
import RequireAuth from '../requireAuth/RequireAuth'
import Unauthorized from '../unauthorized/Unauthorized'
import Admin from '../components/pages/admin/Admin'
import { useState } from 'react'
import AdminProducts from '../components/pages/admin/products/AdminProducts'


const Router = () => {
  const [searchInput, setSearchInput] = useState("")
  return (
    <BrowserRouter>
      <Layout 
        searchInput={searchInput}
        setSearchInput={setSearchInput}  
      >
          <Routes>
              <Route path='/' element={<Home searchInput={searchInput}/>}   />
              <Route path='/register' element={<Register/>}   />
              <Route path='/login' element={<Login />}   />
              <Route path='/product' element={<Product />}/>
              <Route path='/unauthorized' element={<Unauthorized/>}   />
              
              <Route element={<RequireAuth allowedRole={'admin'}/>}>
                <Route path='/admin' element={<Admin />}/>
                <Route path='/adminProducts' element={<AdminProducts searchInput={searchInput}/>}/>
              </Route>
              
              <Route element={<RequireAuth allowedRole={'user'}/>}>
                <Route path='/carts' element={<Carts />}/>
              </Route>
                
                
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
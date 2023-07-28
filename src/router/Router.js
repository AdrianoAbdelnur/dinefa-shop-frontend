import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../components/pages/home/Home'
import Product from '../../src/components/pages/productPage/Product'
import Carts from '../components/pages/cart/Carts'
import Register from '../components/pages/register/Register'
import Login from '../components/pages/login/Login'
import RequireAuth from '../requireAuth/RequireAuth'


const Router = ({props}) => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
              <Route path='/' element={<Home/>}   />
              <Route path='/register' element={<Register/>}   />
              <Route path='/login' element={<Login/>}   />
              
              <Route element={<RequireAuth {...props} />}>
                <Route path='/product' element={<Product/>}/>
                <Route path='/carts' element={<Carts/>}/>
              </Route>
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
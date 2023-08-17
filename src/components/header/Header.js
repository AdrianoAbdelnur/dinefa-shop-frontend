import React, { useEffect, useState } from 'react'
import './header.css'
import logo from './../../assets/img/logo-dinefa.png'
import {Button, Form, InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import useAuth from '../../hooks/useAuth'

const Header = () => {
  const {auth} = useAuth()
  const [userData, setUserData] = useState({})
  let navigate = useNavigate();
  
   
  useEffect(() => {
    getUserData();
  }, [])
  
useEffect(() => {
  if (auth) {
    getUserData();
  }
}, [auth])


const getUserData = async() => {
  try {
    const {data} = await axios.get('/user/userData')
    setUserData(data.userFound)
  } catch (error) {
    console.log(error)
  }
}

const handleLogOut = () => {
  localStorage.clear();
  window.location.replace('/');
};



  return (
    <div className='header_container'>
      <img src={logo} alt='logo Dinefa' className='logo'></img>
      { window.location.pathname === '/' && <InputGroup className="mb-3 w-50 searchInput">
          <InputGroup.Text id="search">Buscar</InputGroup.Text>
          <Form.Control
          placeholder="¿Que estas buscando?"
          aria-label="search"
          aria-describedby="search"
          />
        </InputGroup>
      } 
      <div>
          {
            userData.name && 
            <div className='d-flex flex-row justify-content-around'>
              <div>Bienvenido {userData.name}</div>
              <Button onClick={()=>navigate('/carts')}>Carrito</Button>
              <Link
                  to={'/'}
                  className="navOptions boton1"
                  onClick={handleLogOut}
                >
                  Salir
              </Link>
            </div>
          }
        <div className='navbar_options'>
            {
              !userData.name && 
              <>
              <Link to='./login' id='login'>INGRESAR</Link>
              <Link to='./register' id='register'>REGISTRARSE</Link>
              </>
            }
            <Link to='facebook.com' id='register'>AYUDA</Link>
            <Link to='facebook.com' id='register'>CONTACTO</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import './header.css'
import logo from './../../assets/img/logo-dinefa.png'
import {Button, Form, InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'

const Header = () => {
  const [userData, setUserData] = useState({})
  const {auth} = useAuth();
  let navigate = useNavigate();

useEffect(() => {
  getUserData();
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
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="search">Buscar</InputGroup.Text>
        <Form.Control
          placeholder="¿Que estas buscando?"
          aria-label="search"
          aria-describedby="search"
        />
      </InputGroup>
      <div>
        
          {
            userData.name && 
            <div className='d-flex flex-row justify-content-around'>
              <div>Bienvenido {userData.name}</div>
              <Button onClick={()=>navigate('/carts')}>Cart</Button>
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
              <a href='./login' id='login'>INGRESAR</a>
              <a href='./register' id='register'>REGISTRARSE</a>
              </>
            }
            <a href='facebook.com' id='register'>AYUDA</a>
            <a href='facebook.com' id='register'>CONTACTO</a>
        </div>
      </div>
    </div>
  )
}

export default Header
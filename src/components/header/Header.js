import React from 'react'
import './header.css'
import logo from './../../assets/img/logo-dinefa.png'
import {Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  let navigate = useNavigate();
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
        <div>
          <Button onClick={()=>navigate('/carts')}>Cart</Button>
        </div>
        <div className='navbar_options'>
            <a href='./login' id='login'>INGRESAR</a>
            <a href='./register' id='register'>REGISTRARSE</a>
            <a href='facebook.com' id='register'>AYUDA</a>
            <a href='facebook.com' id='register'>CONTACTO</a>
        </div>
      </div>
    </div>
  )
}

export default Header
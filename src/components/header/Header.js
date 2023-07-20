import React from 'react'
import './header.css'
import logo from './../../assets/img/logo-dinefa.png'
import {Form, InputGroup } from 'react-bootstrap'

const Header = () => {
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
        <div className='navbar_options'>
            <a href='login' id='login'>INGRESAR</a>
            <a href='facebook.com' id='register'>REGISTRARSE</a>
            <a href='facebook.com' id='register'>AYUDA</a>
            <a href='facebook.com' id='register'>CONTACTO</a>
        </div>
    </div>
  )
}

export default Header
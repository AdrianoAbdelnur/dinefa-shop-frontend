import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const ModalBought = ({show, setShow, message}) => {
    const navigate=useNavigate();

    const handleClose = () => {
        setShow(false)
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={()=>navigate('/')}>
            Seguir comprando
            </Button>
            <Button variant="primary" onClick={()=>navigate('/carts')}>
            Ir al carrito
            </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalBought
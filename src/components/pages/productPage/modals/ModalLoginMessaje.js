import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ModalLoginMessaje = ({show, setShow}) => {
    const navigate=useNavigate();

    const handleClose = () => {
        setShow(false)
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>Debes iniciar Sesión para poder comprar
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={()=>navigate('/login')}>
                ok
            </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalLoginMessaje
import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ProductModal = ({ show, setShow }) => {
    const [showInputDetails, setShowInputDetails] = useState(false)

    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del producto" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Marca del producto" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Modelo del producto" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="model">
                        <Form.Select aria-label="Floating label select example">
                            <option>Seleccione una Categoría</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control as="textarea" placeholder="Agregue la descripción del producto" />
                    </Form.Group>
                    {
                        !showInputDetails &&
                        <Link 
                            className="addDetail"
                            onClick={()=>setShowInputDetails(true)}
                        >
                            Añadir detalle
                        </Link>
                    }
                    {
                        showInputDetails && <div>
                            <Form.Group className="mb-3" controlId="details">
                                <Form.Label>Detalles:</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder=" Característica" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Detalle" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Link
                                className=""
                                onClick={()=>setShowInputDetails(false)}
                                >
                                Añadir
                            </Link>
                        </div>
                    }


                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese el Precio de lista" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal
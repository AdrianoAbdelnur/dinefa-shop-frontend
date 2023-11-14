import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FileButton from '../FileButton';
import axios from '../../../../../api/axios'

const ProductModal = ({ show, setShow }) => {
    const [showInputDetails, setShowInputDetails] = useState(false)
    const [image, setImage] = useState()
    const [feature, setFeature] = useState("")
    const [featureDetail, setFeatureDetail] = useState("")
    const [featuresArray, setFeaturesArray] = useState([])
    const [payload, setPayload] = useState({})

    useEffect(() => {
        if (payload.image) {
            handleAddProduct()
            setImage()
            setFeaturesArray([])
        }
        // eslint-disable-next-line
    }, [payload])
    
    

    const addFeature = () => {
        if(feature!== "" && featureDetail!==""){
            setFeaturesArray([...featuresArray, {feature:feature , detail: featureDetail}]);
            setFeature("");
            setFeatureDetail("");
            setShowInputDetails(false)
        }
    }
    

const handleSubmit = (e) => {
    e.preventDefault();
    const product = {}
    product.name = e.target[0].value;
    product.brand = e.target[1].value;
    product.model = e.target[2].value;
    for (const option of e.target[3]) {
        if (option.selected === true) {
            product.category = option.value
        }
    }
    product.description = e.target[6].value;
    product.price = e.target[7].value;
    setPayload({...product, image: image, features: featuresArray })
}

    const handleAddProduct = async() => {
        try {
            console.log(payload)
            await axios.post("/product/addProduct", payload)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setShow(false)
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Añadir Producto</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
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
                                <option value="64b58680f122d167152f247a">One</option>
                                <option value="64b58680f122d167152f247a">Two</option>
                                <option value="64b58680f122d167152f247a">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <div className='image_container'>
                            <FileButton
                                setFile={setImage}
                                />
                            <Image src={image} className='productImage'></Image>
                        </div>
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
                                            <Form.Control type="text" placeholder="Caracteristica" onChange={(e)=>setFeature(e.target.value)}/>
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Detalle" onChange={(e)=>setFeatureDetail(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Link
                                        onClick={addFeature}
                                        >
                                        Añadir
                                    </Link>
                                </Form.Group>
                            </div>
                        }
                        {
                            featuresArray &&
                            <div className='feature_container'>
                            <div>Caracteristica</div>
                            <div className='featureDetail'>Detalle</div>
                            </div>
                        }
                        {
                            featuresArray.map((feature)=> {
                                return(
                                    <div className='feature_container'>
                                        <div>{feature.feature}:</div>
                                        <div className='featureDetail'>{feature.detail}</div>
                                    </div>
                                )})
                        }
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el Precio de lista" />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ProductModal
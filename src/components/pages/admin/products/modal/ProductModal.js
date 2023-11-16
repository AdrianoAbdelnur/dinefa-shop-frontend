import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Form, Image, Modal, Row } from 'react-bootstrap'
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
    const [categories, setCategories] = useState([])
    const [message, setMessage] = useState("")
    
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
                handleClose()
              }, 3000);
        }
        // eslint-disable-next-line
    }, [message])
    
    
    useEffect(() => {
        if (payload.image) {
            handleAddProduct()
            setFeaturesArray([])
        }
        // eslint-disable-next-line
    }, [payload])

    useEffect(() => {
      if (show) {
        handleGetCategories()
      }
    }, [show])
    

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
            const {data} = await axios.post("/product/addProduct", payload)
            setMessage(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setShow(false)
        setFeaturesArray([])
        setImage()
    };

    const handleGetCategories = async() => {
        try {
            const {data} = await axios("/category/getAllCategories")
            setCategories(data.categories)
        } catch (error) {
            console.log(error)
        }
    }

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
                                {
                                    categories.length && 
                                    categories.map((category)=>{
                                        return <option key={category._id} value={category._id}>{category.name}</option>
                                    })
                                }
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
                            <div className='titlesFeatures'>
                                <Row>
                                    <Col xs={4}>Caracteristica</Col>
                                    <Col xs={8}>Detalle</Col>
                                </Row>
                            </div>
                        }
                        {
                            featuresArray.map((feature)=> {
                                return(
                                    <div key={feature.feature}>
                                        <Row>
                                            <Col xs={4}>{feature.feature}:</Col>
                                            <Col xs={8}>{feature.detail}</Col>
                                        </Row>
                                    </div>
                                )})
                        }
                        <Form.Group className="mb-3 mt-3    " controlId="price">
                            <Row>
                                <Col xs={3}><Form.Label>Precio</Form.Label></Col>
                                <Col xs={9}><Form.Control type="number" placeholder="Ingrese el Precio de lista" /></Col>
                            </Row>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    {message && <Alert>{message}</Alert>}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ProductModal
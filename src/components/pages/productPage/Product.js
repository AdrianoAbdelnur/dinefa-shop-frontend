import React, { useEffect, useState } from 'react'
import './product.css'
import { useLocation } from 'react-router-dom'
import axios from '../../../api/axios'
import { Button, Image, InputGroup } from 'react-bootstrap';
import ModalBought from './modals/ModalBought';
import useAuth from '../../../hooks/useAuth';
import ModalLoginMessaje from './modals/ModalLoginMessaje';

const Product = () => {
  const {auth} = useAuth();
  const location = useLocation();
  const [productId, setProductId] = useState("")
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [modalBoughtShow, setModalBoughtShow] = useState(false)
  const [modalLoginShow, setModalLoginShow] = useState(false)
  const [message, setMessage] = useState("")
  


  useEffect(() => {
    setProductId(location.hash.substring(1))
  }, [])
  
  useEffect(() => {
    if(productId) {
      getProduct(productId);
    }
  }, [productId])
 

  const getProduct = async(id) => {
    try {
      const {data} = await axios('/product/getProduct/'+ id)
      setProduct(data.product)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddToCart = async() => {
    if (auth) {
      try {
        const payload = {
          idProduct: product._id,
          price: product.price,
          quantity: quantity
        }
        const {data} = await axios.post("/cart/createCart", payload)
        setMessage(data.message)
        setModalBoughtShow(true)
      }
      catch (error) {
        console.log(error)
      }
    } else { setModalLoginShow(true) }
    
  }



  return (
    <div className='product_container'>
        <div className='productImage_container'>
          <Image src={product.image} rounded className='w-100'/>
        </div>
        <div className='price_contaier'>
          <h4>{product.brand}</h4>
            <h5>{product.name}</h5>
          <p><b>${product.price}</b></p>
          <p>quantity: 1</p>
          <Button variant='primary' onClick={handleAddToCart}>Agregar al carrito</Button>
        </div>
      
    
    <ModalBought
      show={modalBoughtShow}
      setShow={setModalBoughtShow}
      message={message}
      />

      <ModalLoginMessaje
        show={modalLoginShow}
        setShow={setModalLoginShow}
      />
    
    
    </div>
  )
}

export default Product
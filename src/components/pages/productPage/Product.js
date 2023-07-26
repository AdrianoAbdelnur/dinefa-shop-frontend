import React, { useEffect, useState } from 'react'

import './product.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Image } from 'react-bootstrap';

const Product = () => {
  const location = useLocation();
  const [productId, setProductId] = useState("")
  const [product, setProduct] = useState({})

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
      const {data} = await axios('http://localhost:4000/api/product/getProduct/'+ id)
      console.log(data.product)
      setProduct(data.product)
    } catch (error) {
      console.log(error)
    }
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
      </div>
    </div>
  )
}

export default Product
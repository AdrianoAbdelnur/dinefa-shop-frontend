import React, { useEffect, useState } from 'react'
import './home.css'
import ProductCard from '../../productCard/ProductCard'
import { CarouselComponent } from '../../carousel/CarouselComponent'
import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'


const Home = () => {
  let navigate =useNavigate();
  const [products, setproducts] = useState([])
  const [productToShow, setProductToShow] = useState({})

useEffect(() => {
  getProducts()
}, [])

useEffect(() => {
  if (productToShow._id) {
    navigate(`/product#${productToShow._id}`)
  }
}, [productToShow])



const getProducts = async() => {
  try {
    const {data}= await axios("/product/getAllProducts")
    setproducts(data.products)
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className='home_container'>
      <div className='w-100 m-2'>
        <CarouselComponent/>
      </div>
      <div className='products'>
        {
          products.length?
            products.map((product)=>{
              return (
                <ProductCard
                  key={product.name+product.brand+product.model}
                  product={product}
                  setShowToProduct={setProductToShow}
                />
              )
            })
            :
            "No hay productos para mostrar"
        }
      </div>

    </div>
  )
}

export default Home
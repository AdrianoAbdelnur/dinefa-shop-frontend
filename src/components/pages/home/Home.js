import React, { useEffect, useState } from 'react'
import './home.css'
import ProductCard from '../../productCard/ProductCard'
import { CarouselComponent } from '../../carousel/CarouselComponent'
import axios from 'axios'


const Home = () => {
  const [products, setproducts] = useState([])


useEffect(() => {
  getProducts()
}, [])

const getProducts = async() => {
  try {
    const {data}= await axios("http://localhost:4000/api/product/getAllProducts")
    setproducts(data.products)
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className='home_container'>
      <div className='w-100 m-3'>
        <CarouselComponent/>
      </div>
      <div className='products'>
        {
          products.length?
            products.map((product)=>{
              return (
                <ProductCard
                  product={product}
                />
              )
            })
            :
            "No hay productos para mostrar"
        }
        {
          products.length?
            products.map((product)=>{
              return (
                <ProductCard
                  product={product}
                />
              )
            })
            :
            "No hay productos para mostrar"
        }
        {
          products.length?
            products.map((product)=>{
              return (
                <ProductCard
                  product={product}
                />
              )
            })
            :
            "No hay productos para mostrar"
        }
        {
          products.length?
            products.map((product)=>{
              return (
                <ProductCard
                  product={product}
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
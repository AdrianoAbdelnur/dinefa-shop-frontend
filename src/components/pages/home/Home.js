import React, { useEffect, useState } from 'react'
import './home.css'
import ProductCard from '../../productCard/ProductCard'
import { CarouselComponent } from '../../carousel/CarouselComponent'
import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom'


const Home = ({searchInput}) => {
  let navigate =useNavigate();
  const [products, setProducts] = useState([])
  const [productToShow, setProductToShow] = useState({})
  const [filteredProducts, setFilteredProducts] = useState([])

useEffect(() => {
  getProducts()
}, [])


useEffect(() => {
  if (productToShow._id) {
    navigate(`/product#${productToShow._id}`)
  }
  // eslint-disable-next-line
}, [productToShow])

useEffect(() => {
  const productsFound = products?.filter((product) => 
  (product?.name.toLowerCase()?.includes(searchInput.toLocaleLowerCase())) ||
  (product?.brand.toLowerCase()?.includes(searchInput.toLocaleLowerCase())) || 
  (product?.brand.toLowerCase()?.includes(searchInput.toLocaleLowerCase()))  
  )
  setFilteredProducts(productsFound)
  // eslint-disable-next-line
}, [searchInput])

const getProducts = async() => {
  try {
    const {data}= await axios("/product/getAllProducts")
    setProducts(data.products)
    setFilteredProducts(data.products)
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
          filteredProducts.length?
          filteredProducts.map((product)=>{
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
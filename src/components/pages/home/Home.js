import React from 'react'
import './home.css'
import ProductCard from '../../productCard/ProductCard'
import { CarouselComponent } from '../../carousel/CarouselComponent'


const Home = () => {
  return (
    <div className='home_container'>
      <div className='w-100 m-3'>
        <CarouselComponent/>
      </div>
      <div className='products'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

    </div>
  )
}

export default Home
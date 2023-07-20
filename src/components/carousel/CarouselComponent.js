import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import agila from './../../assets/img/agilaCarousel.jpg'
import hoja from './../../assets/img/hojaCarousel.jpg'
import nubes from './../../assets/img/nubesCarousel.jpg'
import './carousel.css'

export const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={3000}>
        <Image
          className="d-block w-100 image"
          src={agila}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          className="d-block w-100 image"
          src={hoja}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          className="d-block w-100 image"
          src={nubes}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

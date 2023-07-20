import React from 'react'
import './productCard.css'
import { Button, Card} from 'react-bootstrap'
import televisor from './../../assets/img/istockphoto-638043774-612x612.jpg'

const ProductCard = () => {
  return (
    <div className='productCard_container'>
        <Card className='productCard'>
        <Card.Img variant="top" src={televisor} />
            <Card.Body>
                <Card.Title className='productCard_title'>Smart Tv 50 Pulgadas 4k Ultra HD - Marca: Samsung</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductCard
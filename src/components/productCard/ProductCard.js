import React from 'react'
import './productCard.css'
import { Button, Card} from 'react-bootstrap'

const ProductCard = ({product, setShowToProduct}) => {

  return (
    <div className='productCard_container' onClick={()=>setShowToProduct(product)}>
        <Card className='productCard' >
        <Card.Img variant="top" src={product?.image} />
            <Card.Body>
                <Card.Title className='productCard_title'> {product?.name} - Marca: {product?.brand}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <div className='price_Container'>${product.price}</div>
                <div className='addCartButton_container'>
                  <Button variant="primary" className='addCartButton'>Agregar al Carrito</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductCard
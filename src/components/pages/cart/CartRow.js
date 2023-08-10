import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './cart.css'

const CartRow = ({product}) => {
    const [quantityAdd, setQuantityAdd] = useState(0)
  return (
    <tr >
        <td>1</td>  
        <td>{product.idProduct.name}</td>
        <td className='d-flex justify-content-around '>
        <Button className='quantityButton' onClick={()=>setQuantityAdd(quantityAdd- 1)}>-</Button>
        {product.quantity+quantityAdd}
        <Button className='quantityButton' onClick={()=>setQuantityAdd(quantityAdd+ 1)}>+</Button>
        </td>
        <td>{product.price}</td>
        <td>{product.price*(product.quantity+quantityAdd)}</td>
    </tr>
  )
}

export default CartRow
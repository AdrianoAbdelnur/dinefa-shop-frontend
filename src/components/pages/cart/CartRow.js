import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const CartRow = ({product}) => {
    const [quantityAdd, setQuantityAdd] = useState(0)
  return (
    <tr key={product.idProduct.name}>
        <td>1</td>  
        <td>{product.idProduct.name}</td>
        <td className='d-flex justify-content-around '>
        <Button onClick={()=>setQuantityAdd(quantityAdd- 1)}>-</Button>
        {product.quantity+quantityAdd}
        <Button onClick={()=>setQuantityAdd(quantityAdd+ 1)}>+</Button>
        </td>
        <td>{product.price}</td>
        <td>{product.price*(product.quantity+quantityAdd)}</td>
    </tr>
  )
}

export default CartRow
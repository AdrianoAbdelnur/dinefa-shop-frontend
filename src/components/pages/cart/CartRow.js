import React, { useState } from 'react'

const CartRow = ({product}) => {
    const [quantityAdd, setQuantityAdd] = useState(0)
  return (
    <tr key={product.idProduct.name}>
        <td>1</td>  
        <td>{product.idProduct.name}</td>
        <td className='d-flex justify-content-around '>
        <button onClick={()=>setQuantityAdd(quantityAdd- 1)}>-</button>
        {product.quantity+quantityAdd}
        <button onClick={()=>setQuantityAdd(quantityAdd+ 1)}>+</button>
        </td>
        <td>{product.price}</td>
        <td>{product.price*(product.quantity+quantityAdd)}</td>
    </tr>
  )
}

export default CartRow
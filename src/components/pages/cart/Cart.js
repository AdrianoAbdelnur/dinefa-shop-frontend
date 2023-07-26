import './cart.css'
import { Table } from 'react-bootstrap'

const Cart = ({cart}) => {
  return (
    <div className='cart_container'>
      <div className='table_container'>
        <Table striped bordered hover variant="primary" className='cartTable'>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products?.map((product)=> {
              return(
                <tr key={product.idProduct.name}>
                <td>1</td>
                <td>{product.idProduct.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.price*product.quantity}</td>
              </tr>)
            })}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default Cart
import './cart.css'
import { Form, Table } from 'react-bootstrap'
import CartRow from './CartRow'

const Cart = ({cart}) => {
  return (
    <div className='cart_container'>
      <Form className='table_container'>
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
                  <CartRow product={product}/>
                  )
              })}
            </tbody>
          </Table>
      </Form>
    </div>
  )
}

export default Cart
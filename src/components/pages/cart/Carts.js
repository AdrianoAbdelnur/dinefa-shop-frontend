import axios from '../../../api/axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Alert, Button } from 'react-bootstrap';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import './cart.css'

const Carts = () => {
    const navigate=useNavigate();
    const [carts, setCarts] = useState([]);
    const [activeCart, setActiveCart, ]= useState({})
    const [errorMessage, setErrorMessage] = useState("")
  
    useEffect(() => {
        getCarts();
    }, [])
  
    const getCarts = async() => {
        try {
            const {data}= await axios('/cart/getCarts')
            const cartstoShow = data.ownCarts.filter(cart => cart.cartStatus === 'bought' || cart.cartStatus === 'cancelled' || cart.cartStatus === 'delivered' || cart.cartStatus === 'preparing');
            setCarts(cartstoShow.reverse());
            setActiveCart(data.ownCarts.find((cart)=> cart.cartStatus === "active"))
        } catch (error) {
            setErrorMessage(error.message);
        }
    }
return (
    <div className='cart_container'>
        {
        errorMessage &&
                <Alert variant="danger">{errorMessage}</Alert>
        }
        {
            activeCart?._id ? (
            <div>
                <h2 className='carts-title text-center'>Your active Cart</h2>
                <div className='p-3 active-cart-container'>
                <div className='overflow-table-container'>
                    <div className='ps-2'>
                    <div>Cart_id: {activeCart._id}</div>
                    <div className='mb-3'>Status: {activeCart.cartStatus}</div>
                    </div>
                    <Cart
                        cart={activeCart}
                    />
                </div>
                </div>
                <div className='w-100'>
                {
                    activeCart.cartStatus === 'active' &&
                                    <div className='w-100 mb-3 button-buy-cart-container flex-column flex-sm-row'>
                                    <Button
                                        variant='danger'
                                    >
                                            Delete Cart
                                    </Button>
                                    <Button
                                        variant='success'
                                    >
                                            Buy now
                                    </Button>
                                    </div>
                }
                </div>
            </div>
            ) : (
            <div className='w-100 text-center my-5 active-cart-container'>
                <h2>You don't have active Cart</h2>
            </div>
            )
        }
        {
            false
            ? (
                <div>loading</div>
            )
            : (
                <Accordion defaultActiveKey="0" >
                {
                    errorMessage &&
                                    <Alert variant="danger">
                                    {errorMessage}
                                    </Alert>
                }
                <Accordion.Header                >
                    your last carts
                </Accordion.Header>
                <Accordion.Body>
                    {
                    carts?.length ? (
                        carts?.map((cart, index) => {
                        return (
                            <div className={'order-container ' + cart?.cartStatus} key={index}>
                            <div className='w-100 py-2'>
                                <div className='w-100 overflow-table-container'>
                                <div className='ps-3'>
                                    <div>Cart id: {cart?._id}</div>
                                    <div className='mb-2'>Status: {cart?.cartStatus}</div>
                                    {
                                    cart?.cartStatus === 'bought' &&
                                                                        <div>
                                                                            Bought on {
                                                                            new Date(cart?.boughtAt).toLocaleDateString('en-us', {
                                                                            weekday: 'long',
                                                                            year: 'numeric',
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                            })
                                                                        }
                                                                        </div>
                                    }
                                </div>
                                <Cart
                                    cart={cart}
                                    className='w-100'
                                />
                                </div>
                            </div>
                            </div>
                        );
                        }
                        )
                    ) : (
                        <h2>you dont have any previous purchases</h2>
                    )
                    }
                </Accordion.Body>
                </Accordion>
            )
        }

        <div className='w-100 text-center mb-3 button-buy-cart-container'>
            <Button
            variant='secondary'
            onClick={() => navigate('/')}
            >
                Back to menu
            </Button>
        </div>
    </div>
  )
}

export default Carts
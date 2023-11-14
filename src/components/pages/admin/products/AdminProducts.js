import axios from './../../../../api/axios';
import React, { useEffect, useState } from 'react'
import './adminProducts.css'
import { Button, Image, Table } from 'react-bootstrap';
import ProductModal from './modal/ProductModal';

const AdminProducts = ({searchInput}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    getProducts()
  }, [])
  
  useEffect(() => {
    const productsFound = products?.filter((product) => 
    (product?.name.toLowerCase()?.includes(searchInput.toLocaleLowerCase())) ||
    (product?.brand.toLowerCase()?.includes(searchInput.toLocaleLowerCase())) || 
    (product?.brand.toLowerCase()?.includes(searchInput.toLocaleLowerCase())) || 
    (product?.category.name.toLowerCase()?.includes(searchInput.toLocaleLowerCase()))  
    )
    setFilteredProducts(productsFound)
    // eslint-disable-next-line
  }, [searchInput])
  
  const getProducts = async() => {
    try {
      const {data}= await axios("/product/getAllProducts")
      setProducts(data.products)
      setFilteredProducts(data.products)
      console.log(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteProduct = async(id) => {
    try {
      await axios.patch("/product/deleteProduct/"+id)
      getProducts()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='AdminProducts_container'>
      <div className='addProductButton_container'>
        <Button variant='primary' className='addProductButton' onClick={()=>setShowModal(true)}>Añadir producto</Button>
      </div>
      <Table striped bordered hover className='productsTable'>
        <thead>
          <tr>
            <th>#</th>
            <th>image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Category</th>  
            <th>Editar / borrar</th>    
          </tr>
        </thead>
        <tbody>
              {
                  filteredProducts.map((product, index)=> {
                      return(
                          <tr key={product._id}>
                              <td>{index}</td>
                              <td className='d-flex justify-content-center'><Image src={product.image} rounded className='imageRow'/></td>
                              <td>{product.name}</td>
                              <td>{product.brand}</td>
                              <td>{product.model}</td>
                              <td>{product.category.name}</td>
                              <td><Button variant='warning'>edit</Button> <Button variant='danger' onClick={()=>handleDeleteProduct(product._id)}>delete</Button></td>
                          </tr>
                      )    
                  }
                  )
              }
          
        </tbody>
    </Table>

    <ProductModal
      show={showModal}
      setShow={setShowModal}
    />



    </div>
  )
}

export default AdminProducts
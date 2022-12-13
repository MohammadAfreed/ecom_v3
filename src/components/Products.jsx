import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';


const Container=styled.div`
padding:20px;  
display:flex;
flex-wrap: wrap;
justify-content:space-between;
`;
const Products=({cat,filters,sort})=> {
  const [products,setProducts]=useState([]);
  const[filteredProducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    const getProducts=async ()=>{
      try{
        const res=await axios.get("http://localhost:3000/products");
        console.log(res);

      }catch(err){};
    };
    getProducts();

  },[cat])

   
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products
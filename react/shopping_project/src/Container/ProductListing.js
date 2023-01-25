import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions'


export default function ProductListing() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log("ERR",err);
        });
        // console.log(response.data);
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);

    console.log("products",products);
    
  return (
    <div className='ui grid container'style={{marginTop:"3rem"}}>
            <ProductComponent/>
        </div>
  )
}

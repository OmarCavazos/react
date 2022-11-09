import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductContainer = () => {
    const[product, setProduct]=useState({})
    
    const{id}=useParams();

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(res => setProduct(res.data));
    }, [id])
    
    return (
        <div>
            <h2>
                {product.title}
            </h2>
            <img src={product?.images?.[0]} alt="Cargando..." />
        </div>
    )
}

export default ProductContainer;
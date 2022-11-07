import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductsList from './ProductsList';


const ProductsContainer = () => {
    const [products, setproducts] = useState([]);
    // const [count, setCount] = useState(0);


    useEffect(() => {
        // fetch("https://dummyjson.com/products")
        // .then((res) => res.json())
        // .then(console.log)


        axios
            .get("https://dummyjson.com/products?limit=10")
            .then((res) => setproducts(res.data.products));
    
    },[])


    // useEffect (() => {
    //     console.log("useEffect");
    //     return () => {
    //     console.log("cleanUp");
    //     };
    // },);

    console.log("render");

    return (
        <div>
            {/* ProductsContainer
        //     <h3>Contador{count}</h3>
        //     <br />
        //     <button onClick={() =>setCount(count+1)}>agregar</button> */}
            <ProductsList products={products} />

        // </div>
    )
}

export default ProductsContainer
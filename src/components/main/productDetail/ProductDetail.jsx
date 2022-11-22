import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { cartContext } from "../../../context/CartContext";
import Counter from "../../counter/Counter";
import { Link } from "react-router-dom";

const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    height: 500px;
    margin: 10px;
    background-color: darkcyan;
    border-radius: 10px;
    img {
        width: 250px;
        height: auto;
        border-radius: 10px;
        margin: 10px;
    }
`;

const ProductDetail = ({ product }) => {
    const { addToCart } = useContext(cartContext);
    const [quantity, setQuantity] = useState(0);
    const[goToCart, setGoToCart] = useState(false);
    const handleQuantity = (n) => {
        setQuantity(n);
        setGoToCart(!goToCart);
    };
    useEffect(() => {
        quantity && addToCart({ ...product, quantity });
        setQuantity(0);
    }, [quantity]);

    return (
        <DivStyled>
            <h1>{product.title}</h1>
            <img src={product.images?.[0]} alt="" />
            <h3>{product.description}</h3>
            <h3>Precio: ${product.price}</h3>
            <h3>Stock: {product.stock}</h3>
            <Counter stock={product.stock} handleQuantity={handleQuantity} />
            <br />
            {
                goToCart &&(
                    <Link to="/cart">
                        <button>ir al carrito</button>
                    </Link>
                )
            }
        </DivStyled>
    );
};

export default ProductDetail;
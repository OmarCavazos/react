import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ArticleStyled = styled.article`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    margin: 10px;
    border-radius: 10px;
    background-color: darkcyan;
    justify-content: center;
    img{
        width: 250px;
        height: auto;
        margin : 25px;
        border-radius: 10px;
    }
`;

const Product = ({product}) => {
    // console.log({product})
    return (
        <Link to = {`/product/${product.id}`}>
            <ArticleStyled>
                <h3>{product.title}</h3>
                <img src={product?.images?.[0]} alt="no jala" />
                <h3>Precio: ${product.price}</h3>
            </ArticleStyled>
        </Link>
    )
}

export default Product
import React, { useContext } from "react";
import { cartContext } from "../../../context/CartContext";

const Cart = () => {
    const { cart, cleanCart, addToCart  } = useContext(cartContext);

    return( 
        <div>
            {cart.cart.length?<table>
                <thead>
                    <tr>
                        <th>Articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cart.map((p, key) =>{
                        return <tr key={key} >
                            <td>{p.tittle}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td>${p.price*p.quantity}</td>
                            <td onClick={() =>addToCart({...p,quantity: 1})}>Agregar</td>
                            <td onClick={() =>addToCart({...p,quantity: -1})}>Quitar</td>
                        </tr>
                    })}
                </tbody>
            </table>:<h2>no hay nada aqui</h2>
        }
        <br></br>
        {
            cart.cart.length > 0 && <button onClick={cleanCart}> vaciar carrito </button>
        }
        </div>
    );
};

export default Cart;
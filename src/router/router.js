import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import Count from "../components/main/Count";
import Logout from "../components/main/Logout";
import ProductsListContainer from "../components/main/productsListContainer/ProductsListContainer";
import ProductDetailContainer from "../components/main/productDetail/ProductDetailContainer"

import Cart from  "../components/main/cart/Cart"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: "No Jala",
            children: [
                {
                    path: "/",
                    element: "home"
                },
                {
                    path: "/about",
                    element: "about"
                },
                {
                    path: "/products",
                    element: <ProductsListContainer />
                },
                {
                    path: "/product/:id",
                    element: <ProductDetailContainer />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/logout",
                    element: <Logout />
                },
                {
                    path: "/editProfile",
                    element: "editProfile"
                },
                {
                    path: "/count",
                    element: <Count/>
                }

            ]
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        }

    ]
)

export default router
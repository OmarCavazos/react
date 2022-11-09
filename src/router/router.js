import { createBrowserRouter} from 'react-router-dom';
import App from '../App' 
import ProductContainer from '../componentes/main/product/ProductContainer';
import ProductsContainer from '../componentes/main/products/ProductsContainer';
import Register from '../componentes/main/register/Register';
import Error from '../componentes/main/error/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: "Home",
            },
            {
                path: "/about",
                element: "About",
            },
            {
                path: "/products",
                element: <ProductsContainer />,
            },
            {
                path: "/product/:id",
                element: <ProductContainer />,
            },
            {
                path: "/cart",
                element: "cart",
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: "login",
    },
])

export default router;
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Register from "../../Pages/Register/Register";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/', element: <Main></Main>, children: [
            {
                path: '/' , element: <Home></Home>
            },
            {
                path: '/login' , element: <Login></Login>
            },
            {
                path: '/register' , element: <Register></Register>
            },
            {
                path: '/checkout/:id' , element: <Checkout></Checkout>,
                loader: ({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: '/orders' , element: <Orders></Orders>
            },
        ]
    },  
])

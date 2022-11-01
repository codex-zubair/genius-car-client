import Home from "../../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/', element: <Home></Home>
    }  ])

import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout"
import HomeSceen from "../Pages/HomeSceen"


export const mainRote = createBrowserRouter([{
element:<Layout/>,
children:[
    {
index: true,
element:<HomeSceen/>,
    },
]
}
])
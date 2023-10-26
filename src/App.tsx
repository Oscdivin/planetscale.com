
import {RouterProvider} from "react-router-dom"
import { mainRote } from "./Router/mainRouter"
const App = () => {
  return (
    <div>
      <RouterProvider router={mainRote}/>
    </div>
  )
}

export default App
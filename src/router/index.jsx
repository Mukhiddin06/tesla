import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import App from "../App.jsx"
import Model from "../pages/modelS/modelS.jsx"
import Model3 from "../pages/model3/model3.jsx"
import Modelx from "../pages/modelX/modelX.jsx"
import ModelY from "../pages/modelY/modelY.jsx"
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Model/>}/>
                <Route path="model3" element={<Model3/>}/>
                <Route path="modelX" element={<Modelx/>}/>
                <Route path="modelY" element={<ModelY/>}/>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
 }
 export default Index
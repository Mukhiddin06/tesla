import "./App.css"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
const App = ()=> {
  return(
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}
export default App
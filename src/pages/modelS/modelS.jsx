import "modelS.css"
import vector1 from "../../assets/Group 18.svg"
import vector2 from "../../assets/Group 17.svg"
import model from "../../assets/Group 20.png"
const Model =() =>{
    <>
    <div className="container">
        <div className="model">
            <button className="model-btn"><img src={vector1} alt="vec" width={40} height={40}/></button>
            <img src={model} alt="Model" width={1000} height={750}/>
            <button className="model-btn"><img src={vector2} alt="vec" width={40} height={40}/></button>
        </div>
    </div>
    </>
}
export default Model
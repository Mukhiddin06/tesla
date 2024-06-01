import vector from "../../assets/Group 15.svg"
import "./footer.css"
const Footer =()=>{
    return(
        <>
        <footer className="site-footer">
            <div className="container">
                <div className="footer">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <h3 className="footer-title">396 mi</h3>
                            <p className="footer-text">Range (EPA est.)</p>
                        </li>
                        <li className="footer-item">
                            <h3 className="footer-title">1.99s</h3>
                            <p className="footer-text">0-60 mph*</p>
                        </li>
                        <li className="footer-item">
                            <h3 className="footer-title">200mph</h3>
                            <p className="footer-text">Top Speed†</p>
                        </li>
                        <li className="footer-item">
                            <h3 className="footer-title">1,020hp</h3>
                            <p className="footer-text">Peak Power</p>
                        </li>
                    </ul>
                    <button className="footer-button">Order Now <img className="footer-img" src={vector} alt="vec" width={20} height={16} /></button>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer
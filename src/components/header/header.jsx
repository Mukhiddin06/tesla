import "./header.css"
import tesla from "../../assets/Group 1.svg"
import  search from "../../assets/Group 6.svg"
import  contact from "../../assets/Group 7.svg"
import  hmbr from "../../assets/Group 9.svg"
import { NavLink } from "react-router-dom"
const Header = () => {
    return(
        <>
        <header className="site-header">
        <div className="container">
            <div className="header">
                <div className="header-logo-wrapper"><img className="header-logo" src={tesla} alt="tesla" width={180} height={24} /></div>
                <ul className="header-list">
                    <li className="header-item">
                        <NavLink className="item-link link-s" to="/">
                            Model S
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink className="item-link link-3" to="/model3">
                            Model 3
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink className="item-link link-x" to="/modelX">
                            Model X
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink className="item-link link-y" to="/modelY">
                            Model Y
                        </NavLink>
                    </li>
                    <li className="header-item">
                        Solar Roof
                    </li>
                    <li className="header-item">
                        Solar Panels
                    </li>
                </ul>
                <div className="header-img-wrapper">
                    <img className="header-img" src={search} alt="search" width={170} height={40}  />
                    <img className="header-img" src={contact} alt="search" width={40} height={40}  />
                    <img className="header-img" src={hmbr} alt="search" width={40} height={40}  />
                </div>
            </div>
        </div>
        </header>
        </>
    )
}
export default Header
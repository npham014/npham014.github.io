import "./navbar.scss";
import {Phone, Mail, LinkedIn} from "@material-ui/icons";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">me</a>
                    <div className="itemContainer"> {/*TODO: CHANGE ICONS TO BUBBLE ON CLICK*/}
                        <Phone className="icon"/>
                        <span>+1 (626) 800-7175</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>natpham014@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/nathan-pham-186a2b14b/" className="icon"> <LinkedIn className="liIcon"/> </a>
                    </div>
                </div>
                
                <div clasName="right">
                    right
                </div>
            </div>
        </div>
    )
}

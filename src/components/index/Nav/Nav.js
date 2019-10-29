import React from "react";
import './Nav.css'

const logo = require('./image/Lab519.png');
class Nav extends React.Component{
    render() {
        return(
            <div className="Nav">
                <img src={logo}/>
            </div>
        )
    }
}
export default Nav
import React from 'react'
import {Carousel} from "antd";
import './Caro.css'
import Groups from "../Group/Group";


const background = require('./image/01-1.png');
const background2 = require('./image/02-1.png');
const background3 = require('./image/03-1.png');
const background4 = require('./image/04-1.png');
class Caro extends React.Component{
    render() {
        return(
            <div className="Caro">
                <Carousel autoplay>
                    <div >
                        <img src={background} />
                    </div>
                    <div>
                        <img src={background2 } />
                    </div>
                    <div>
                        <img src={background3} />
                    </div>
                    <div>
                        <img src={background4} />
                    </div>
                </Carousel>
            </div>

        )
    }
}
export default Caro;
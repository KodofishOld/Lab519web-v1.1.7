import React from "react";
import {Card, Icon} from "antd";
import axios from "axios"
import './Ele.css'

const ele = require('./image/ele.png');
class Ele extends React.Component{
    state = {
        data_loaded: false,
        articles: null
    };

    componentDidMount() {
        setInterval( () => {
            this.getData()
        },5000)
    }

    getData() {
        return axios.get('https://api.thingspeak.com/channels/888646/feeds.json?api_key=6YXSU260TL6UDA8B&results=2')
            .then((response) => {
                return response
            }).then((feeds) => {
                //console.log(["feeds",feeds.data.feeds]);
                this.setState({
                    articles: feeds.data.feeds,
                    data_loaded: true
                });
                console.log(feeds.data)
            }).catch(function (err) {
                if (axios.isCancel(err)) {
                    console.error(err.message, err)
                } else {
                    throw err
                }
            })
    }

    showArticles(){
        if(this.state.articles !== null){
            return
        }
    }
    render() {
        if (this.state.articles !== null) {
            return (
                <div className="ele">
                    <img src={ele} />
                    <h1>{Math.round(this.state.articles[this.state.articles.length - 1].field4*1000)}</h1>
                </div>
            )
        }else{
            return (
                <div>
                    <h1 >  </h1>
                </div>
            )
        }
    }
}
export default Ele
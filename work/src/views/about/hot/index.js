import React, { Component } from 'react'
import axios from 'axios';
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import './index.css'
export default class Hot extends Component {
    state = {
        imgText: [],
        swipers: []
      }
    componentDidMount() {
        setTimeout(()=>{
            new Swiper('.swiper-container', {
                autoplay: true
            })
        },500)
        axios.get('/api').then(data=>{
            this.setState({
              imgText: data.data.imgText,
              swipers: data.data.swiper
            })
          })
    }
    render() {
        let {imgText,swipers} = this.state
        return (
            <div className="hot">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            swipers.map((item)=>{
                                return <div key={item.id} className="swiper-slide"><img src={item.img} alt=""/></div>
                            })
                        }
                    </div>
                </div>
                <div className="imgText">
                    {
                        imgText.map((item)=>{
                            return <div key={item.id}>
                            <img src={item.img} alt=""/>
                            <span>{item.text}</span>
                        </div>
                        })
                    }
                    
                </div>
            </div>
        )
    }
}
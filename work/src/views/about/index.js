import React,{Component} from 'react';
import {Route,NavLink,Redirect} from 'react-router-dom'
import Hot from './hot/index'
import './index.css'

  function Flower(){
    return <div>鲜花</div>
  }
  function Lifeflower(){
    return <div>永生花</div>
  }
  function Cake(){
    return <div>蛋糕</div>
  }
  function Gift(){
    return <div>特色礼品</div>
  }
  function Hamper(){
    return <div>礼篮</div>
  }
  function Plants(){
    return <div>绿植花卉</div>
  }

export default class About extends Component{
    render(){
        return (
            <div className="about">
                <div className="header">
                    <input type="text" className="inp" placeholder="搜索鲜花、蛋糕、礼品" />
                </div>
                <div className="main">
                    <div className="left">
                        <NavLink to="/about/hot">热门推荐</NavLink>
                        <NavLink to="/about/flower">鲜花</NavLink>
                        <NavLink to="/about/lifeflower">永生花</NavLink>
                        <NavLink to="/about/cake">蛋糕</NavLink>
                        <NavLink to="/about/gift">特色礼品</NavLink>
                        <NavLink to="/about/hamper">礼篮</NavLink>
                        <NavLink to="/about/plants">绿植花卉</NavLink>
                    </div>
                    <div className="right">
                        <Route path="/about/hot" component={Hot} />
                        <Route path="/about/flower" component={Flower} />
                        <Route path="/about/lifeflower" component={Lifeflower} />
                        <Route path="/about/cake" component={Cake} />
                        <Route path="/about/gift" component={Gift} />
                        <Route path="/about/hamper" component={Hamper} />
                        <Route path="/about/plants" component={Plants} />
                        <Redirect from="/about" to="/about/hot" />
                    </div>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react';
import {Route,NavLink,Redirect} from 'react-router-dom'

import About from './views/about/index'
import './icon/iconfont.css'
import './App.css'

function Nice(){
  return <div>首页</div>
}
function Fuck(){
  return <div>购物车</div>
}
function Bitch(){
  return <div>我的</div>
}

export default class App extends Component{
  render(){
    return (
      <div className="app">
        <div className="app-show">
          <Route path="/home" component={Nice} />
          <Route path="/about" component={About} />
          <Route path="/car" component={Fuck} />
          <Route path="/my" component={Bitch} />
          <Redirect from="/" to="/home" />
        </div>
        <div className="btns">
            <NavLink to="/home">
              <span className="iconfont icon-shouye"></span>
              <span>首页</span>
            </NavLink>
            <NavLink to="/about">
              <span className="iconfont icon-icon04"></span>
              <span>分类</span>
            </NavLink>
            <NavLink to="/car">
              <span className="iconfont icon-gouwuchekong"></span>
              <span>购物车</span>
            </NavLink>
            <NavLink to="/my">
              <span className="iconfont icon-wode"></span>
              <span>我的</span>
            </NavLink>
        </div>
      </div>
    )
  }
}
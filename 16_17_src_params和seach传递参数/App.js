import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {

  render() {
    return (
      <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><Header/></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
  {/* React中靠路由链接切换组件 */}
        {/* <NavLink activeClassName='atguigu' className="list-group-item" to="/about" >About</NavLink>
          <NavLink activeClassName='atguigu' className="list-group-item" to="/home" >Home</NavLink> */}
          
          <MyNavLink to="/about"  >About</MyNavLink>
          <MyNavLink to="/home"  >Home</MyNavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <Switch>
            <Route  path="/about" component={About} /> 
            <Route  path="/home" component={Home} />
            <Redirect to="/about"/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

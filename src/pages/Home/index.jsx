import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
  render() {
    return (
      <div>
      <h3>Home组件的内容</h3>

       <MyNavLink to="/home/news">News</MyNavLink>
       <MyNavLink to="/home/message">Message</MyNavLink>
    {/* 注册路由 */}
    <Switch>
      <Route path="/home/news" component={News}></Route>
      <Route  path="/home/message" component={Message}></Route>
    </Switch>  
    </div>
    )
  }
}

import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state={messageArr:[{
    id:'01',title:'消息1'
  },
  {
    id:'02',title:'消息2'
  },
  {
    id:'03',title:'消息3'
  }
]}
replaceShow=(id,title)=>{
  //replace跳转+params参数
  // this.props.history.replace(`/home/message/detail/${id}/${title}`)
  //replace跳转+search参数
  // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
  //replace跳转+state参数
  this.props.history.replace('/home/message/detail',{id,title})
}
pushShow=(id,title)=>{
   //replace跳转+params参数
  //  this.props.history.push(`/home/message/detail/${id}/${title}`)
   //replace跳转+search参数
  //  this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
   //replace跳转+state参数
   this.props.history.push('/home/message/detail',{id,title})
}
back=()=>{
  this.props.history.goBack()
}
forwork=()=>{
  this.props.history.goForward()
}
  render() {
    const {messageArr}=this.state
    return (
      <div>
        <ul>
          {messageArr.map((item)=>{return (<li key={item.id}>
            {/* 向路由组件传params参数 */}
          <Link to={`/home/message/detail/${item.id}/${item.title}`} >{item.title}</Link>        
            {/* 向路由组件传aearch参数 */}
          {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`} >{item.title}</Link> */}
          {/* 向路由组件传state参数 */}
           <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}} >{item.title}</Link>
           <button  onClick={()=>this.pushShow(item.id,item.title)}>push查看</button>
          <button onClick={()=>this.replaceShow(item.id,item.title)}>replace查看</button>
          <button onClick={this.back}> 回退</button>
          <button onClick={this.forwork}>前进</button>
        </li>)})}
      </ul>
      {/* 注册路由 */}
      {/* <Route  path="/home/message/detail/:id/:title" component={Detail}></Route> */}
      {/* search参数无需声明接收 */}
      {/* <Route  path="/home/message/detail/" component={Detail}></Route> */}
       {/* state参数无需声明接收 */}
       <Route  path="/home/message/detail/" component={Detail}></Route>
      </div>
    )
  }
}

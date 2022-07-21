import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
    state={
        users:[],
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//是否加载中
        err:'',//存储请求错误信息
      }
    componentDidMount(){
        //订阅消息
       this.token =PubSub.subscribe('atguigu',(_, data)=>{
       this.setState(data)
    });
    }
    //组件将要挂载
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
  render() {
    const {users,err,isLoading,isFirst}=this.state
    return (
        <div className="row">
            {
                isFirst? <h2>欢迎使用！！</h2>:
                isLoading? <h2>加载中...</h2>:
                err? <h2>{err}</h2>:
            users.map((item)=>{ return (
                <div key={item.id} className="card">
                <a href={item.html_url} target="_blank"  rel="noreferrer">
                    <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{item.login}</p>
                </div>)
            })
            }
        
      </div>
    )
  }
}

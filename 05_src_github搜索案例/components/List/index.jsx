import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
  render() {
    const {users,err,isLoading,isFirst}=this.props
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

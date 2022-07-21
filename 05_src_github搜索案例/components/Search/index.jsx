import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  search=()=>{
    //连续解构赋值
    const {keyWordEl:{value}}=this
    console.log(value)
    this.props.updateAppState({isFirst:false,isLoading:true})
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (response)=>{
        console.log(response.data.items)
        this.props.updateAppState({isFirst:false,isLoading:false,users:response.data.items})
      },
      error=>{
        this.props.updateAppState({isFirst:false,isLoading:false,err:error.message})
      }
    )
  }
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
            <input ref={(c)=>this.keyWordEl=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;<button onClick={this.search}>搜索</button>
            </div>
      </section>
    )
  }
}

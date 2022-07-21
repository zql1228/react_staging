import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search=async()=>{
    //发布消息

    //连续解构赋值
    const {keyWordEl:{value}}=this
    console.log(value)
    //this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('atguigu',{isFirst:false,isLoading:true});
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (response)=>{
        console.log(response.data.items)
        PubSub.publish('atguigu',{isFirst:false,isLoading:false,users:response.data.items});
        //this.props.updateAppState({isFirst:false,isLoading:false,users:response.data.items})
      },
      error=>{
        PubSub.publish('atguigu',{isFirst:false,isLoading:false,err:error.message});
        //this.props.updateAppState({isFirst:false,isLoading:false,err:error.message})
      }
    )
    //未优化
    // fetch(`https://api.github.com/search/users?q=${value}`).then(
    //   response=>{
    //     console.log('联系服务器成功了',response.json())
    //     return response.json()
    //   },
    //   err=>{
    //     console.log('联系服务器失败了',err)
    //     return new Promise(()=>{})//promise知识欠缺
    //   }
    // ).then(
    //   response=>{
    //     console.log('获取数据成功了',response)
    //   },
    //   err=>{
    //     //console.log('获取数据失败了',err)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })
    //优化
    try{
      const response= await fetch(`https://api.github.com/search/users?q=${value}`)
      const data=await response.json()
      console.log(data,'/////')
      PubSub.publish('atguigu',{isFirst:false,isLoading:false,users:data.items});
    }catch(err){
      console.log(err);
      PubSub.publish('atguigu',{isFirst:false,isLoading:false,err:err.message});
    }
    

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

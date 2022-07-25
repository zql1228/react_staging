import React, { Component } from 'react'
// import qs from 'qs'
export default class Detail extends Component {
    state={data:[{
        id:'01',content:'我爱中国'
      },
      {
        id:'02',content:'努力的自己'
      },
      {
        id:'03',content:'懒惰的自己'
      }
    ]}
  render() {
     //接受params参数
    // const {id,title}=this.props.match.params
    //接受search参数
    //  const {id,title}=qs.parse(this.props.location.search.slice(1)) 
    //接受state参数
    const {id,title}=this.props.location.state || {}
    const findContent=this.state.data.find((detailObj)=>{return detailObj.id===id})
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findContent.content}</li>
      </ul>
    )
  }
}

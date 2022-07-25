import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
  back=()=>{
    this.props.history.goBack()
  }
  forwark=()=>{
    this.props.history.goForward()
  }
  go=()=>{
    this.props.history.go(-2)
  }
  render() {
    return (
      <div><h2>React Router Demo</h2>
        <button onClick={this.back}> 回退</button>
        <button onClick={this.forwark}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}
export default withRouter(Header)
//withrouter可以加工一般组件
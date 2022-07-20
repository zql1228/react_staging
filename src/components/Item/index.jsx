import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class index extends Component {
  static propTypes={
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  state={mouse:false}
  //鼠标移入移出的回调
  handleMous=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  //勾选或取消勾选某一个todo的回调
  handleCheck=(id)=>{
    return (event)=>{
     this.props.updateTodo(id,event.target.checked) 
    }
  }
  handleDelete=(id)=>{
    if(window.confirm('确定删除吗?')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id,name,done}=this.props
    const {mouse} =this.state
    return (
      <li style={{background:mouse? '#ddd':'#fff'}} onMouseLeave={this.handleMous(false)} onMouseEnter={this.handleMous(true)}>
      <label>
        <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
        <span>{name}</span>
      </label>
      <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
    </li>
    )
  }
}

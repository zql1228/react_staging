import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'
export default class Header extends Component {
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }
  //键盘事件回调
  handleKeyup=(e)=>{
    if(e.keyCode===13){
      //添加的todo面名字不能为空
      if(e.target.value.trim()===''){
        alert('输入不能为空')
        return 
      }
      this.props.addTodo({id:nanoid(),name:e.target.value,done:false})
    }
  }
  render() {
    return (
      <div className="todo-header">
      <input type="text" onKeyUp={this.handleKeyup} placeholder="请输入你的任务名称，按回车键确认"  />
    </div>
    )
  }
}

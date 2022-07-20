import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  render() {
    const {todos,clearAllDone}=this.props
    const total=todos.length
    const doneCount=todos.reduce((pre,todo)=>pre+(todo.done? 1:0),0)
    return (
      <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total!==0? true:false}/>
            </label>
            <span>
              <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={clearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}

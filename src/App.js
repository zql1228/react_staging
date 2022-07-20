import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
  //状态在哪里，操作状态的方法就在那里
  state={
    todos:[
      {id:"001",name:'吃饭',done:true},
      {id:"002",name:'睡觉',done:false},
      {id:"003",name:'敲代码',done:false},
      {id:"004",name:'逛街',done:false}
    ]
  }
  //用于添加一个todo,接收的参数是一个对象
  addTodo=(todoObj)=>{
    const {todos}=this.state
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }
  //用于更新todo
  updateTodo=(id,done)=>{
    const {todos}=this.state
    const newTodos=todos.map((item)=>{
      if(id===item.id){
        return {...item,done}
      }else{
        return item
      }     
    })
    this.setState({todos:newTodos})
  }
  //删除某一个todo
  deleteTodo=(id)=>{
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:newTodos})
  }
  //全选
  checkAllTodo=(done)=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  //清楚所有已经完成的
  clearAllDone=()=>{
    const {todos}=this.state
    const newTodos= todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  render(){
    const {todos}=this.state
    return (
        <div className="todo-container">
        <div className="todo-wrap">
        <Header  addTodo={this.addTodo} />
        <List todos={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}  />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo}  clearAllDone={this.clearAllDone}/>         
        </div>
      </div>
    )
  }
}


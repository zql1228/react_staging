//创建并暴露app组件
import React, {Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}


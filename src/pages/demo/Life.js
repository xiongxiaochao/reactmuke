import React from 'react'
import Child from './Child'
import './index.css'

export default class Life extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             count: 0
         }
     }

    handleAdd=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return <div className="content">
            <p>React生命周期</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <p>{this.state.count}</p>
            {/* <Child name="Jack"></Child> */}
            <Child name={this.state.count}></Child>
        </div>
    }
 } 
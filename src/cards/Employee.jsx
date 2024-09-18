import React, { Component } from 'react'
import userData from "./data.json"
export default class Employee extends Component {

    constructor()
    {
        super()
        this.state ={
            data:userData
        }
    }

  render() {
    return (
      <div >
            <div className='margin'>{this.state.data.map((x)=>{
             return(
                <div className='card'>
                    <h1>name : {x.login}</h1> 
                    <h1>id : {x.id}</h1>
                    <h1>type : {x.type}</h1>
                    <img src={x.avatar_url} height={"200px"} alt="" />
                </div>
             )
            })}</div>
      </div>
    )
  }
}



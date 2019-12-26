import React, { Component } from 'react'

class Decrement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:20,
        }
    }

    decrement(){
        this.setState({
            count:this.state.count-1,
        })
    }
    
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            fontFamily: "Arial",
            border: "2px solid red",
            padding: "10px",
           
        }
        return (
            <div>
            <div>
               <h1> Decrement -{this.state.count};</h1>
            </div>
            <button onClick={()=>this.decrement()} style={mystyle}> Decrement </button>
            </div>
        )
    }
}

export default Decrement

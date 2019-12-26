import React, { Component } from 'react'
import Counter from './Counter'

class Counter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    myfunction(){
        this.setState({
            count:this.state.count+1
        },()=>{console.log(this.state.count)})
        // console.log('====================================');
        // console.log(this.state.count);
        // console.log('====================================');
    }

    incrementFive(){
        this.myfunction();
        this.myfunction();
        this.myfunction();
        this.myfunction();
        this.myfunction();
    }
    
    
    render() {
        return (
            <div>
                <h1>Counting : {this.state.count}</h1>
                <button onClick={()=>this.myfunction()}>Press</button>
                <h1>Counting with increment five : {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Press</button>
            </div>
        )
    }
}
export default Counter1;
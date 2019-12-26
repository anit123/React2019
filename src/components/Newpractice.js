import React, { Component } from 'react'

class Newpractice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cound:23
      }
    }
    myfucntion(){
        this.setState({
            cound:this.state.cound+1
        })
    }
    
  render() {
    return (
      <div>
  <h1>{this.state.cound}</h1>
          <button onClick={()=>this.myfucntion()}>Click</button>
        
      </div>
    )
  }
}

export default Newpractice

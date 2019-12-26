import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div>
                <Childcomponent greethandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parentcomponent

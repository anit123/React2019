import React, { Component } from 'react'

class Propsdestructuringwithclass extends Component {
    state={
        showEmail:false
    }

    myfunction(){
        this.setState({
            showEmail:this.state.showEmail,
        })
    }
    
    render() {
        const {name, address, email}=this.props
        return (
            <div>
    <h1>Hello{name} your email address is {email} </h1>
        <span>Your address is{address}</span>
    <p>your email  can be {this.state.showEmail}</p>
    <button onClick={()=>this.myfunction()}>Click</button>
            </div>
        )
    }
}

export default Propsdestructuringwithclass

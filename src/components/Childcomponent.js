import React from 'react'

function Childcomponent(props) {
  return (
    <div>
      <button onClick={props.greethandler}>Greet Parent</button>
      <button>Hello</button>
    </div>
  )
}

export default Childcomponent

// user can create new entry 
import React from 'react'

const Entry = (props) => {
  return (
  <div>
      <h1>Add a Wine Entry</h1>
    <input type='text' onChange={props.changeName} value={props.name} />
    <button onClick={props.addEntry}>Add Entry</button>
  </div>
  )
}


export default Entry; 


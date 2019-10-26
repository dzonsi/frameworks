import React from 'react'

const NewTodo = ({onChange, onChangePush}) => (
  <div>
    <h3>New</h3>
    <input id="target" type="text" onKeyUp={onChange}/>
    <input type="button" value="add to add" onClick={onChange}/>
  </div>
)

export default NewTodo;
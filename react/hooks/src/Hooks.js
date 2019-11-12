import React, { useState, useEffect } from 'react';
import UseReducer from './UseReducer';

function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  	document.title = `You clicked ${count} times`;
  }, [count]);// after every render if count changes!!!
  // ako effect vrati funkciju, ona se registruje kao componentWillUnmount
	const [name, setName] = useState("John");

  useEffect(() => {
  	alert(name);
  	return () => {
  		alert("I will never fired m")
  	};
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br/>
      <UseReducer />
    </div>
  );
}

export default Hooks;
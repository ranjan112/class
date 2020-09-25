import React, { useState } from 'react';

export  const Statesuse= () =>  {
const [counter,setCounter]=useState(0)


function buttonwasclicked(){
  setCounter(counter+1)
}
function subtract(){
setCounter(counter-1)
}
function multiply(){
  setCounter(counter*10)
  }
  return (
    <div>
      <button style={{width:55,height:55,margin:10,padding:10}} onClick={buttonwasclicked}>Add</button>
      <button style={{width:80,height:55,margin:10,padding:10}} onClick={subtract}>Subtract</button>
      <button style={{width:80,height:55,margin:10,padding:10}} onClick={multiply}>Multiply</button>
      <h1 style={{padding:10}}>{counter}</h1>
    </div>
  )
}
export default Statesuse;
import React, { useEffect } from 'react'
import { useState ,useRef} from 'react'

function App() {
  const [count,setcount]=useState(0);
  const inputref=useRef(0);
  function inc(){
    setcount((e)=>(e+1));
  }
  function dec(){
    inputref.current++;
  }

  useEffect(()=>{
    console.log('hello')},[]);

  return (
    <>
    <div> count is : {count}</div>
    <div> ref is : {inputref.current}</div>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>decrement</button>
    </>
  )
}

export default App
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter,setHarshit]=useState(15)
  function addValue(){
    setHarshit((prevmad)=>{return prevmad+1})
    setHarshit((prevmad)=>{return prevmad+1})
    setHarshit((prevmad)=>{return prevmad+1})

  }
  const decValue=()=>{
    if (counter>0){
    counter--
    setHarshit(counter)}
  }
  useEffect(()=>{console.log("rendered")},[counter])
  
  return (
    <>
      <h1>hello from harshit</h1>
      <h2>value is {counter}</h2>
      <button onClick={addValue}>add the value</button><br/>
      <button onClick={decValue}>decrese the value</button>
    </>
  )
}
export default App
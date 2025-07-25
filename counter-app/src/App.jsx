import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15
      //variable  //function/method    //hook
  // useState needs to be initialized with a Number (0) a bool (true/false) a [] a "" a {}
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // counter = counter + 1
    // console.log(counter);
    // react works in batches, bundles things together using reconcilliation
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // to avoid use a callback method, which guaruntees callback needs to finish and cannot be batched b/c theyre dependent on previous values
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>React course with hitesh {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button> {" "}
    <button onClick={removeValue}>remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App

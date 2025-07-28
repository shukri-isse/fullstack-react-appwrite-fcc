import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
    // can pass in properties 
    // key and value pair

    let myObj = {
        name: 'Hitesh',
        age: 25,
        address: {
          city: 'Jaipur',
          state: 'Rajasthan',
          country: 'India'
        }
    }
    let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
        Vite + Tailwind
      </h1>
      <Card username="shukri" myArr={newArr}/>
      <Card username="Json" post="Staff Engineer"/>
      <Card/>
    </>
  )
}

export default App

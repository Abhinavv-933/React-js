import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    if(counter< 21){
    setCounter(counter + 1)
    }
  }

const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1)
  }
}

// har hook ka ek kaaam hota h aur wo wahi krta h 
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button 
         onClick={addValue} 
      >Add value{counter}</button>
      <button 
         onClick={removeValue} 
      >remove value{counter}</button>
    </>
  )
}

export default App

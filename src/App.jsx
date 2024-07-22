import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-white font-header-font">
        Hello world!
      </h1>
      <button className='bg-primary-color'>button</button>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       1)
        <button onClick={() => setCount((count) => count +}>
          count is {count}
        </button>
       
    </div>
  )
}

export default App

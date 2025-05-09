import { useState } from 'react'

import './App.css'
import Spells from './components/Spells'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Spells />
  )
}

export default App

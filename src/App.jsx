import { useState } from 'react'

import './App.css'
import Autocomplete from './autocomplete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Autocomplete/>
     </>
  )
}

export default App

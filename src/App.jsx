import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Condition from './components/conditional'
import Name from './RestaurantM/name'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Condition/>
     <br />
     <br />
     <Name/>
    </>
  )
}

export default App

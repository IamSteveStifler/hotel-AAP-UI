import { useState } from 'react'
import AddRoom from "./components/room/AddRoom";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddRoom />
    </>
  )
}

export default App

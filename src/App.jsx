
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Home from './Pages/Home'

function App() {
 
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App

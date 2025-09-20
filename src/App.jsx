
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'

function App() {
 
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App

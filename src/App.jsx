
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'

function App() {
 
  return (
    <div className='bg-white text-black'>
      <Header></Header>
      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App

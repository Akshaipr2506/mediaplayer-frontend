import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App

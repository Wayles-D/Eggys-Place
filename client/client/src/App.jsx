import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import { Home } from './Routes/Routes'
import { Suspense } from 'react'
import Footer from './Layout/Footer'
import LoadingRing from './Utils/Loader'


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='flex justify-center items-center h-screen'> <LoadingRing/> </div>}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

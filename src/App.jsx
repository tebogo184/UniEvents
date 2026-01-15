import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {


  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/UniEvents' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

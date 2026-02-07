import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Event from './Pages/Event'
import AllEvents from './Pages/AllEvents'
import Footer from './Components/Footer'
import SubmitEvent from './Pages/Submit-Events'
import Login from './Pages/Login'
import Approval from './Pages/Approval'
import Request from './Pages/Request'

function App() {


  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/UniEvents' element={<Home/>}/>
    <Route path='UniEvents/events/:eventID' element={<Event/>}/>
    <Route path='UniEvents/events'element={<AllEvents/>}/>
    <Route path='UniEvents/submitEvent' element={<SubmitEvent/>}/>
    <Route path='UniEvents/adminLogin' element={<Login/>}/>
    <Route path='UniEvents/approvals' element={<Approval/>}/>
    <Route path='UniEvents/request' element={<Request/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App

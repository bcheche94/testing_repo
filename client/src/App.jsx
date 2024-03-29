import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import New_Page_Main_Func from './pages/newPage'


export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={ <Home /> } />
      <Route path='/sign-in' element={ <SignIn /> } />
      <Route path='/sign-up' element={ <SignUp /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/newpage' element={ <New_Page_Main_Func /> } />

    </Routes>

    </BrowserRouter>
  )
}

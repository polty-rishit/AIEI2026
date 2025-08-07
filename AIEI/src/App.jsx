 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import General from './pages/General'
import Committee from './pages/Committee'
import Venue from './pages/Venue'
import CallForPapers from './pages/CallForPapers'
import Guidelines from './pages/guidelines'
 
 const App = () => {
   return (
     <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/general' element={<General/>}/>
        <Route path='/committee' element={<Committee/>}/>
        <Route path='/venue' element={<Venue/>}/>
        <Route path='/papers' element={<CallForPapers/>}/>
        <Route path='/guidelines' element={<Guidelines/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App
 
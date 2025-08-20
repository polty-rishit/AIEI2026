 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import General from './pages/General'
import Committee from './pages/About/Committee'
import Venue from './pages/Venue'
import CallForPapers from './pages/CallForPapers'
import Guidelines from './pages/guidelines'
import CMT from './pages/CMT'
import { useEffect } from "react";
import Overview from './pages/About/Overview'
import Patrons from './pages/About/Patrons'
import Contact from './pages/About/Contact'
import IeeeAc from './pages/About/IeeeAc'
import IeeeP from './pages/About/IeeeP'
 
 const App = () => {

  function RedirectToHTML() {
  useEffect(() => {
    window.location.href = "/cmt.html";
  }, []);
  return null;
}

   return (
     <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/general' element={<General/>}/>
        <Route path='/committee' element={<Committee/>}/>
        <Route path='/venue' element={<Venue/>}/>
        <Route path='/papers' element={<CallForPapers/>}/>
        <Route path='/guidelines' element={<Guidelines/>}/>
        <Route path="/cmt-acknowledgment" element={<RedirectToHTML />} />
        <Route path='/overview' element={<Overview/>}/>
         <Route path='/patrons' element={<Patrons/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/ieeeac' element={<IeeeAc/>}/>
         <Route path='/ieeep' element={<IeeeP/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App
 
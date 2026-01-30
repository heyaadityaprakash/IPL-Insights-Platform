import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import TeamOverview from './pages/TeamOverview'
import Teams from './pages/Teams'
import Stats from './pages/Stats'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Standings from './pages/Standings'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/teams/:id' element={<TeamOverview/>}/>
      <Route path='/stats' element={<Stats/>}/>
      <Route path="/standings" element={<Standings />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

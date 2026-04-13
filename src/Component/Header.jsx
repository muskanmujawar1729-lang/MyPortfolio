import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Navbar from './Navbar'
import Skills from './Skills'


function Header() {
    return (
        <>
        <div className=''>
        <Navbar/>
        <div className='text-center m-4  '>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='/project' element={<Projects/>} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path='skill' element={<Skills/>} />
                </Routes>
            </div>
            </div>
        </>
        
            
    )
}

export default Header
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Aboutimage from '../Components/Aboutimage/Aboutimage'
import About_ws from '../Components/About_Ws/About_ws'
import Aboutservice from '../Components/About_service/Aboutservice'
import Footer from '../Components/Footer/Footer'


export default function About() {
  return (
    <div>
        <Navbar/>
        <Aboutimage/>
        <About_ws/>
        <Aboutservice/>
        <Footer/>
  
    </div>
  )
}

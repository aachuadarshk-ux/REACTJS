import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Contactimg from '../Components/Contact_img/Contactimg'
import Contactenquery from '../Components/Contact_Enquery/Contactenquery'
import Contactlocation from '../Components/Contact_Location/Contactlocation'
import Footer from '../Components/Footer/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <Contactimg/>
      <Contactenquery/>
      <Contactlocation/>
      <Footer/>


    </div>
  )
}

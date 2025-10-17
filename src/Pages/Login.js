import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Loginform from '../Components/Login_form/Loginform'
import Logintext from '../Components/Login_text/Logintext'
import Footer from '../Components/Footer/Footer'

export default function Login() {
  return (
    <div>
      <Navbar/>
      <Loginform/>
      <Logintext/>
      <Footer/>

    </div>
  )
}

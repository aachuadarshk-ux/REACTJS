import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Bookimg from '../Components/Book_imgft/Bookimg'
import Bookscard from '../Components/Books_card/Bookscard'
import Footer from '../Components/Footer/Footer'

export default function Book() {
  return (
    <div>

      <Navbar/>
      <Bookimg/>
      <Bookscard/>
      <Footer/>
    </div>
  )
}

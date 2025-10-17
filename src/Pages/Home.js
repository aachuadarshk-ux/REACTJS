import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import  Carousel from '../Components/Carousel/carousel'
import Demo from '../Components/Demotext/Demo'
import Card from '../Components/Card/card'
import Book from '../Components/Booksection/Book'
import Ws from '../Components/WS_aboutbooks/Ws'
import Textimonial from '../Components/Textimonial/Textimonial'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Demo/>
        <Card/>
        <Book/>
        <Ws/>
        <Textimonial/>
        <Footer/>

        
        

    </div>
  )
}

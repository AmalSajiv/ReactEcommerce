import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Product from '../components/Product'
import Slider from '../components/Slider'



function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <Categories />
      <Product />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
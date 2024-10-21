import React from 'react'
import Hero from '../components/Hero/Hero'
import Review from '../components/Review/Review'
import Track from '../components/Track/Track'
import Navbar from '../components/Navbar/Navbar'
import Comingsoon from '../components/Comingsoon/Comingsoon'
import About from '../components/About/about'
import Faq from '../components/Faq/Faq'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
        <Hero/>
        <Review/>
        <Track/>
        <Comingsoon/>
        <About/>
       <Faq/>
       <Blog/>
    <Footer/>
    </div>
  )
}

export default Home
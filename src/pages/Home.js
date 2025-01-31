import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Feature from '../components/Feature/Feature'

const Home = () => {
  return (
    <div className="header-carousel owl-carousel">
      <Carousel/>
      <Feature/>
    </div>
  )
}

export default Home

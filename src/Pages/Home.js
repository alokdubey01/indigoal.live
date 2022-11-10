import React from 'react'
import Carousel from '../components/Carausel'
import { Featured } from '../components/Featured'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="p-2">
        <h1 className="text-lg font-semibold pl-2 text-second">Featured Match</h1>
        {/* <Carousel/> */}
      </div>
    <Featured/>
    <Footer/>
    </>
  )
}

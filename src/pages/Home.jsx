import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Home = () => {
  return (
    <div className="text-center">
      <Navbar/>
      <h1 className= "mt-10 text-2xl">Home</h1>
      <h2>Curious Developers Community</h2>
      <Form/>
    </div>
  )
}

export default Home

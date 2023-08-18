import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Home = () => {
  return (
    <div className="text-center">
      <Navbar/>
      <h1 className= "mt-10 text-2xl">Home</h1>
      <h2>Sample Git Push</h2>
      <h2>New Code</h2>
      <Form/>
    </div>
  )
}

export default Home
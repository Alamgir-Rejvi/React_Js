import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


function App() {
  

  return (
    <>
       <Header/>

       <Main/>
      <h3>Welcome to My Site</h3>
      <p>Name: Alamgir Rejvi <br />
        Age: 28
      </p>
     
      <Footer/>
    </>
  )
}

export default App

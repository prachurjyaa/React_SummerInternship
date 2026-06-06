import {Routes, Route} from 'react-router-dom'
import Header from './Header.jsx'
import Products from './Products.jsx'
import { useState } from 'react'
import About from './About.jsx'
import products from './products.jsx'
import SignUp from './SignUp.jsx'
import SignIn from './SignIn.jsx'
import Home from './Home.jsx'


function App() {
  const[searchQuery,setSearchQuery]=useState("")
  return (
    <> 
    <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}/> 
      {searchQuery}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
     <Route path="products" element={<Products searchQuery={searchQuery}/>} />
     <Route path="signup" element={<SignUp />} />
     <Route path="signin" element={<SignIn />} />
    </Routes>
     
      {/* <Products searchQuery={searchQuery}/> */}
     
    </>
  )}
  


export default App

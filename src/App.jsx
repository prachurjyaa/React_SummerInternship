import Header from './Header.jsx'
import Products from './Products.jsx'
import { useState } from 'react'


function App() {
  const[searchQuery,setSearchQuery]=useState("")
  return (
    <>
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}/> 
      {searchQuery}
      <Products searchQuery={searchQuery}/>
     
    </>
  )}
  


export default App

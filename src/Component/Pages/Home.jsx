import React, { useEffect } from 'react'
import Apple from './Apple'

function Home({categories,inputSearch,setIndex,setShowDropdown}) {

  return (
   <Apple  categories={categories} inputSearch={inputSearch} setIndex={setIndex}/>
  )
}

export default Home
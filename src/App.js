
import './App.css';
import { BrowserRouter,Route,Routes, useLocation } from 'react-router-dom';
import Home from './Component/Pages/Home';

import Nav from './Component/Nav/Nav';
import React,{ useEffect, useState } from 'react';
import ShowMore from './Component/Pages/ShowMore';

function App() {
  const [categories, setCategories] = useState("general");
  const [inputSearch,setInputSearch] = useState("us");
  const [index,setIndex] = useState();
  


 
 
  return (


    <BrowserRouter>
 
  <Nav setCategories={setCategories}  setInputSearch={setInputSearch} categories={categories} />
      <Routes>
        <Route path="/" element={<Home categories={categories} inputSearch={inputSearch} setIndex={setIndex}/>}/>
        <Route path="/showMore" element={<ShowMore index={index} categories={categories} inputSearch={inputSearch} />}/>
    
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;

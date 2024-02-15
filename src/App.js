
import React from 'react';
import './App.css';

import { FaChrome } from 'react-icons/fa';





import { Helmet } from 'react-helmet-async';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Indexx from './pages/indexx';
import Bienvenue from './pages/bienvenue'






function App() {
  return (
  

    <div>

<h1> site en reparation</h1>


<Bienvenue/>

      <BrowserRouter>
      
      <Routes>

      <Route index element ={<Bienvenue/>} />

      <Route path='/indexx' element ={<Indexx/>} />


      </Routes>
      
      
      
      
      
      </BrowserRouter>






</div>








  
  );
}

export default App;

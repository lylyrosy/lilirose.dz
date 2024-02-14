
import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import indexx from './pages/indexx';
import darkindek from './pages/darkindek';
import coherence from './pages/coherence';



import { Helmet } from 'react-helmet-async';







import { Link } from 'react-router-dom';

function App() {
  return (
  

    <div>



<Helmet>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Teko:wght@300..700&display=swap" rel="stylesheet"/>



<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Teko:wght@300..700&display=swap" rel="stylesheet"/> 


<link rel="stylesheet" href="./styles/bienvenue.css"/>

</Helmet>



<Link to="/indexx">Cliquez ici </Link>








<BrowserRouter>
    
  
<Routes>

<Route indexx element ={indexx} />


<Route darkindek element ={darkindek} />

<Route coherence element ={coherence} />


</Routes>



</BrowserRouter>


</div>








  
  );
}

export default App;

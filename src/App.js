
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

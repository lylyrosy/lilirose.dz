

import React from 'react';

import { FaChrome } from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';


const Bienvenue = () => {
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

<div className="container">
<h1>
Bienvenue <br />
Fais comme chez toi
</h1>
<p className="design">
Designed by Lili Rose- 100% free à but caritatif
<br />
<br />
Conjointement avec Dr 
<strong>SIF.Zahia</strong> Gynécologue-Obstétricienne <br />
<br />
Pour accompagner toute personne atteinte d'un stress post-traumatique
</p>
<p>
<strong>Instructions setup/use</strong>
</p>

<code style={{ textAlign: "center" }}>
  <strong>
    {" "}
    &nbsp; Ouvrez dans chrome <FaChrome/>
  </strong>
  <br />
</code>
<code>
<strong>Trouvez dans la barre d'adresse </strong>
</code>
<br />
<code>
<strong>
  {" "}
  <span className="points"> ⁝ </span> INSTALLER (mobile)
</strong>
</code>
<code>
<strong>
  {" "}
  <span className="points">💻</span>INSTALLER (desktop){" "}
</strong>
</code>

<code style={{ textAlign: "center" }}>
{" "}
&nbsp; alt+ <span className="points">🔙</span>(retour desktop)
</code>



<br />
<p>
<span style={{ letterSpacing: 1, color: "rgb(101, 5, 47)" }}>
  {" "}
  Pour consulter Lili Rose &nbsp;
</span>
<Link to="/indexx">Cliquez ici </Link>
</p>
<p className="groupo">
Mon kif pour l'informatique m'accompagne sur le chemin qui mène à la paix...
</p>
<code>Lili Rose Version 1.1 Beta</code>
</div>








        </div>
    );
}

export default Bienvenue;

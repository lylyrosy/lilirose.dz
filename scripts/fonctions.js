const rainheart = (params) => {

    const stop= setInterval(() => {
  
  
      // creation dun element html emoji coeur
      const rain=document.createElement("div")
     rain.classList.add("heart")
    
      // const rain=`<div class="heart"></div>`
      rain.innerHTML="&#129505;"
      rain.style.left=`${Math.random()*100}%`
    
      rain.style.animationDuration= `${(Math.random()+0.5)*5}s`
    
    
    // creation parent pour l"emoji heart l'emoji et son parent  se trouvent a l'interierur de la heart box
      const heartbox=document.getElementById("heartbox")
    
    
        const parentheart=document.createElement("div")
        parentheart.classList.add("parentheart")
    
        //mettre le parent de l'emoji dans la heart box
        heartbox.append(parentheart)
    
        //mettre l emoji crée dans son parent 
        parentheart.append(rain)
    
    
    //on utilise append et non innerhtml car l'element est crée avec create element et non avce ``, je dois utiliser createlement sinon style.left ne va pas marcher
      // document.getElementById("heartbox").append(rain)
      // document.getElementById("heartbox").innerHTML=rain
    
        console.log(rain.style.left)
    
    
        setTimeout(() => { clearInterval(stop)}, 5000);
    
    setTimeout(() => {parentheart.remove()}, 6000);
    
    
    
        
    
        
      }, 100);
    
    
    
    

    //je peux pas faire un remove pour la heart box car elle doit reserver sa place dans le code html donc je crée un parent dans js que je peux supprimer et recréer 
    
       
    // si je manipule le heart box avec le body la deuxieme tournée de coeur descend derriere la video 
    
  }
  





const autobig = (joy,bonheur) => {

  let j=1
const auto = (params) => {

  
bonheur.innerText= joy.slice(0,j)
j++
 if (j>joy.length) { j=1;
    }
    

    
}

setInterval(auto ,200)
  
}



    
const random = (params) => {
  const random=Math.floor(Math.random()*101)
  return random
}



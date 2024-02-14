
 function videoslider(id) {
    
    document.querySelector(".slider").src=`https://www.youtube.com/embed/${id}`
}


// remplir mon slider 





// une proposition de chatgpt pour le deilement su ruban 
// document.addEventListener('DOMContentLoaded', function () {
//     const ribbon = document.getElementById('ribbon');
//     const videos = ribbon.getElementsByClassName('video');
  
//     // Dupliquer les vidéos pour créer un effet de défilement continu
//     ribbon.innerHTML += ribbon.innerHTML;
  
//     // Animation de défilement
//     let scrollPosition = 0;

  
//     function scrollRibbon() {
//       scrollPosition -= 1;
//       ribbon.style.transform = `translateX(${scrollPosition}px)`;
//       console.log(scrollPosition)
  
//       // Réinitialiser la position si toutes les vidéos ont défilé
//       if (scrollPosition <= -videos[0].offsetWidth) {
//         scrollPosition = 0;
//       }
  
//       requestAnimationFrame(scrollRibbon);
//     }
  
//     // Lancer l'animation
//     scrollRibbon();
//   });


// mon code pour un ruban qui defile sans interruption 


let i= -1;
const ribbon = document.getElementById('ribbon');
const videos = ribbon.getElementsByClassName('video');
console.log(videos[0].offsetWidth)
const nb=videos.length-2

ribbon.innerHTML+=ribbon.innerHTML




const monruban = (params) => 


{
    //offsetwidth est la largeur de la video

    
     ribbon.style.transform = `translateX(${i}px)`;
  
      // Réinitialiser la position si toutes les vidéos ont défilé
      if (i <= (-videos[0].offsetWidth)*nb) {
        i= -1;

        // clearInterval(stop)
      }
i--;



    
}
 let stop= setInterval(monruban,20)


  
 //const stop= setInterval(monruban,10) fct a l;'infini a arreter avec Clearinterval(stop)


 

// une pluie de petits coeurs 

const ibalise=document.querySelector("i")
console.log(ibalise)

ibalise.addEventListener("click", (params) => {


  rainheart()


 })

 const film=document.getElementById("film")



  film.addEventListener("click", (params) => {


  if (film.classList.contains("pause")) 
  
  {
    clearInterval(stop); film.classList.toggle("pause");

 

   } 
   
   
   else
   {

    
    film.classList.toggle("pause")
    stop=setInterval(monruban, 25)
  console.log(stop)

  }
    
  })
 

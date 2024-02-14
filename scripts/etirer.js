
    
        
    // remplissage de la playist class .videos 



data.forEach(Element => {

    let i=data.indexOf(Element)

    // console.log(i)

    let elementvideo=`

    <div class="video" >



     <p class="p"> ${data[i].id}</p>
 
    <img src="../imgb/you.png" alt="">

    
      <h3 class="title"> ${data[i].titre}  </h3>
      <p class="time"> ${data[i].duree}</p>

 </div>  

    
    `

    // remplir le document html creer les classes .video dans la classe .videos qui se trouve dans la playist c'est un travail de création de balises html js
   document.querySelector('.videos').innerHTML+= elementvideo;
    
});


// je ramene toutes les div video crées et je les met sous forme de tableau pour pouvoir manipuler le indexof

let video=document.querySelectorAll('.video')

video=Array.from(video)

// console.log(video)

//  console.log(video.length)

// je ramene toutes les tag img crées  et je les met sous forme de tableau pour pouvoir manipuler l'image marche coeur-arret youtube avec  le indexof


let logo=document.querySelectorAll('img')


// premiere video active par defaut 
logo[0].src= `../imgb/you2.png`

video[0].classList.add("active")

logo=Array.from(logo)




    video.forEach(currentItem => {

        currentItem.addEventListener("click", () => 
        
        {
            
            
            
            video.forEach(element=> {element.classList.remove("active");   let i=video.indexOf(element); logo[i].src= `../imgb/you.png`}  )



            currentItem.classList.add("active")

        //   recup  l index de l'elt courant dans le tableau syntaxe index= tableau.indexof(element recherché)
    
    let i=video.indexOf(currentItem)

    // console.log(i)
            
            logo[i].src=`../imgb/you2.png`
            
                
    // injecter la video adequate ,ici la balise exitse deja je remplace son contenu par la video adequate donc je ne fais pas de innerhtml dans le document 
     let myvideo=document.querySelector(' .main-video iframe' )
     let mytitle=document.querySelector('.main-video .title')

    //  console.log(mytitle)

    //  ici je rajoute la source de la video dans le tag video deja existant 

     myvideo.src=`${myvideos[i].iv}`

// ici je rajoute du texte à l'interieur du tag h3 classe title deja existant , le innerhtml cree des tags non existants a l'interieur d'un element parent existant dans le document 

    mytitle.innerText= `${myvideos[i].tv}`
    
        })



    
});

//je vais peindre la page en couleurs 


//j'importe le style de toutes les classes life




// HOVER AVEC JAVA SCRIPT AVEC MOUSEMOVE ET MOUSEOUT
// const life= document.querySelectorAll('.life')
// console.log(life)

//pour chaque noeud j'ajoute la classe qui change le style qui est la classe changcolor 

// life.forEach(element => {

//     element.addEventListener("mousemove", () => {
//         element.classList.add("changcolor")
    
// });

// })

// life.forEach(element => {

//     element.addEventListener("mouseout", () => {
//         element.classList.remove("changcolor")
    
// });

// })



//HOVER AVEC DES FONCTIONS

// const life= document.getElementsByClassName('icon-paint-format life')[0]

// console.log(life)

// function chang() {
    
    
//           life.classList.add("changcolor")

  

    
// }

// function supp() {
    
    
//     life.classList.remove("changcolor")




// }
// code html     <span  onmousemove="chang()" onmouseout="supp()" class="icon-paint-format life"></span> 

    
    

//jeux de couleurs 

// const htmlElement = document.documentElement;

// Changez la valeur de la variable --text
//  htmlElement.style.setProperty('--text', 'hsl(208, 39%, 40%)');



//ramner le selecteur dans inspecter element copier selecteur 
// const life= document.querySelector('body > main > section.video-playist > div:nth-child(6)')


//ramner tous les span sauf un span en particulier qui est le premier span 
// const span=document.querySelectorAll("span:not(body > main > section.video-playist > div:nth-child(6) > span.icon-paint-format.life)")
// console.log(span)

const htmlElement = document.documentElement;
const life= document.querySelector('.life').parentElement
console.log(life)

const lf=document.querySelectorAll('.life')
console.log(lf)

const myvid=document.querySelectorAll('.videos .video img')
console.log(myvid)


// COULEURS ANARCHIQUES

/*


life.addEventListener("click", 

(params) => {

    const random1=Math.round(Math.random()*360)
    const random4=Math.round(Math.random()*360)
    const random7=Math.round(Math.random()*360)


    const random2=Math.round(Math.random()*100)
    const random3=Math.round(Math.random()*100)
    const random5=Math.round(Math.random()*100)
    const random6=Math.round(Math.random()*100)
    const random8=Math.round(Math.random()*100)
    const random9=Math.round(Math.random()*100)


    const random = (params) => {
        const random=Math.round(Math.random()*360)
        return random 
        
    }

    const randomp = (params) => {
        const randomp=Math.round(Math.random()*100)
        return randomp 
        
    }




    htmlElement.style.setProperty ('--primary', `linear-gradient(to bottom right , hsl( ${random1} ,${randomp()}% , ${randomp()}% ), hsl(${random()}, ${randomp()}%, ${randomp()}%)` );

    htmlElement.style.setProperty('--secondary', 'black')

      myvid.forEach(element => {

    element.style.filter='none'
    
                                });
   
 htmlElement.style.setProperty('--text', `hsl(${random1} ,90% , 80% )`)

 

lf.forEach(element => {

    element.addEventListener("mousemove", (params) => {
        element.style.color=`hsl(${random3} ,80% , 90% )`
    
})});

lf.forEach(element => {

    element.addEventListener("mouseout", (params) => {
        element.style.color=`hsl(${random1} ,50% , 50% )`
    })
    
});



}


//pour le logo youtube
myvid.forEach(element => {

                element.style.filter='none'
                
                                          });
)*/


// COULEURS STRUCTUREES

  


let i=0

life.addEventListener("click", (params) => 

{    

    

    // avec un i en random , le i change aleatoirement sans un ordre predefeni ellver la condition i=0 et le i++ 
//    let i = random()
    
    
       
    
// random rgb changer le tableau carrement 

// const arrco=[`rgb(${random()},${random()} ,${random()})`,`rgb(${random()},${random()} ,${random()})`,`rgb(${random()},${random()} ,${random()})`,`rgb(${random()},${random()} ,${random()})`, '#0a0057', '#3f00ee']

// const arrco=[ `#${random()}`,`#${random()}`,`#${random()}`,`#${random()}`,`#${random()}`,`#${random()}`,`#${random()}`,`#${random()}`]

// random hexadecimal
// const arrco=[ random(), random(),random()]

const arrco=[ "#ff006e", "#e0b1cb","#f7a072","#a98467","#fbc4ab" ,"#b56576","#0a0057", "#3f00ee"]





    
    htmlElement.style.setProperty ('--primary', `linear-gradient(to bottom right , ${arrco[i]} ,${arrco[i+1]})` ); 
    // ds un linear gradient la transition n'est pas visible, si je souhaite une transition en douceur pas de linear gradient mettre une seule couleur hexadecimale
    // htmlElement.style.setProperty ('--primary', arrco[i] ); 

    if (arrco[i]=="#ff006e"){ coloors('#fcf6bd','#14213d','invert(100%) hue-rotate(180deg)','white');}
    else if (arrco[i]== "#e0b1cb") {coloors('#f72585','#6f1d1b', 'invert(100%) ','#f72585') ; }

    else if (arrco[i]== "#f7a072") {coloors('#590d22','#a4133c','saturate(50%) brightness(80%)','#590d22');  }


    else if (arrco[i]== "#a98467"){ coloors('#d00000','#472d30','none','#d00000')


}

    else if (arrco[i]== "#fbc4ab") {coloors('#00509d','#00296b','invert(100%)','#00509d'); }

    // else if (arrco[i]== "#b56576"){ coloors('#ccff33','#fcca46');}

    else{ coloors('#ccff33','#fcca46','none','#ccff33');}




    // i==arrco.length-1? (i=0)(coloors('gold','white','invert(100%) sepia(100%) saturate(2000%) hue-rotate(360deg)','pink')):console.log() ------ne marche quune seule fois a l'interieur du loop

  


   


i++;

 if (i==arrco.length-1) {
    i=0; coloors('gold','white','invert(100%) sepia(100%) saturate(2000%) hue-rotate(360deg)','pink'); 
   
 } 

// i++;
// i==arrco.length-1? (i=0)(coloors('gold','white','invert(100%) sepia(100%) saturate(2000%) hue-rotate(360deg)','pink')):console.log("i n'est pas encore a 7")


// rainheart()

// console.log(rainheart())
}


)






//fonction pour le texte et la video active 
const coloors = (second, texte,filtre,lifh) => {

    htmlElement.style.setProperty('--secondary',second)




htmlElement.style.setProperty('--text',texte)

htmlElement.style.setProperty('--filtre',filtre)


htmlElement.style.setProperty('--lifh',lifh)



return coloors
    
}

// const random = (params) =>
// {
// // return(Math.round(Math.random()*100))



// //    round 6 pour length-1 ou bien floor 7 
//    //floor a la place de round si multiplier par 7

// //    pour rgb multiplier par 255

// //pour hsl multiplier par 360 et 100

// // pour transformer random en string
// // const random=String (Math.random())

// // const random=Math.random().toString(2) binaire
// // const random=Math.random().toString(8) octal
//  // hexadecimal 2+6=8
// //  const random= Math.random().toString(16).slice(2,8) 


 

   
// }


const random = () => {

    const random= `#${Math.random().toString(16).slice(2,8) }`
    return random
    
}


//instructions pour le pinceau et le texte 



// const peindre = (params) => {

//     lf.forEach(element => {

//         element.addEventListener("mousemove", (params) => {
              
                      
//         element.style.color=` black`
        
//         })});
        
//         lf.forEach(element => {
        
//         element.addEventListener("mouseout", (params) => {
//           element.style.color=`snow`
//         })
        
//         });
    
// }


// AUTO ECRIRE LA VIE EN Lili ROSE
let j=1
const auto = (params) => {

    const joy= "La vie en Lili ROSE"
  
const bonheur=document.getElementById("bonheur")
bonheur.innerText= joy.slice(0,j)
j++
 if (j>joy.length) { j=1;
    }
    

    
}

setInterval(auto ,200)






    
    

 



    


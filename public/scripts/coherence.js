



data=[

    `https://www.youtube.com/embed/Uzk19x23doA?si=uDIM6TBKZ1Vhs2vJ`,
    `https://www.youtube.com/embed/Eq4MkZI5SUQ?si=wT4yM73w31nW7G96`,
    `https://www.youtube.com/embed/WsBigYZ_ic0?si=4TOA14Wn1vCVs-8g`,
    `https://www.youtube.com/embed/CYaiZTo8pQo?si=VBb716XsiblUIVGo`,
    `https://www.youtube.com/embed/RUp_3B4XeCY?si=nw8yrm5RmEisQQVQ`,
    `https://www.youtube.com/embed/0BNejY1e9ik?si=c6W0yKXcAQMJR9hG`,



]


const image=document.querySelectorAll(".image")


console.log(image)


image[image.length-1].addEventListener("click",(params) =>
 {
    window.open("https://www.youtube.com/@wimhof1", "_blank");

} )


image[image.length-2].addEventListener("click",(params) =>
 {
    window.open("https://www.youtube.com/channel/UC7JpQ9SvvYral2rRpO9AUCA", "_blank");

} )


image.forEach((element,index) => {

    if(index<image.length-2){

        element.addEventListener("click", 
() => {

    let video= document.querySelector("iframe")
    
    video.src= data[index]
    document.querySelector(".pop-video").style.display="block"

    window.scrollTo({

        top: 0,
        behavior: 'smooth' // Ajoutez ceci pour un défilement fluide, si pris en charge par le navigateur
       
      });
   

    
})



    }

    



   
});



const fermer= document.querySelector(".pop-video")



console.log(fermer)

fermer.addEventListener("click", (eo) => {

    const span=document.getElementsByTagName("span")[0]

    if(eo.target==span) 
    {

        let video= document.querySelector("iframe")
    
        video.src=``
    fermer.style.display="none"
}

        
    });

  


    



const id=document.getElementById("id")
const texto=id.textContent

autobig(texto,id)


document.querySelector(".fa-moon").addEventListener("click",(params) => {

    
    document.getElementsByTagName("body")[0].classList.toggle("dark")



    
})



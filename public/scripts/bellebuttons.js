



// const btn= document.getElementsByClassName('bt')[0]
// console.log(btn)






// btn.addEventListener("click", (params) => 
// {

//   window.location.href = "etirer.html";

// })


// mon entrainement js avec queryselector


let adresspage=[
"etirer.html","cardio.html", "abdos.html", "jbras.html", "yoga.html"]

// window.location.href = adresspage[i];

let bt=Array.from(document.querySelectorAll('.bt'))
console.log(bt)



bt.forEach(element => {

  let i=bt.indexOf(element)

  element.addEventListener("click", (params) => 
  { 
   
    window.location.href = adresspage[i];


  
});
  
  })
  
;





// le hiboux

const hibou= document.getElementById('hibou')
const body= document.getElementById('body')


hibou.addEventListener("click", (eo) => 

{
  body.classList.toggle("dark")


})

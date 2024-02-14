let next=document.querySelector(".next")
let prev=document.querySelector(".prev")



next.addEventListener("click", ()=>
{



    let items=document.querySelectorAll(".item")
    const element= document.querySelector(".slide").append(items[0])
    // const name= items[0].getElementsByClassName("name")[0].textContent
    // const but= items[0].getElementsByClassName("voir")[0]
  



})

prev.addEventListener("click", ()=>
{

    let items=document.querySelectorAll(".item")
    // const elem= document.querySelector(".slide").prepend(items[items.length-1])


    const elem= document.querySelector(".slide").prepend(items[items.length-1])

    // const bot= items[items.length-2].getElementsByClassName("voir")[0]


 

    })

    let voir=document.querySelectorAll(".voir")
let data=[

`https://www.marieclaire.fr/cuisine/recette-pate-a-pizza-de-quinoa-pizza-vegan,1212354.asp
`,
`https://www.monquotidienautrement.com/recettes/amandier-tres-chocolate/
`,
`https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Poelee-de-brocolis-a-la-menthe-4043288
`,
`https://www.lespommesdeterre.com/recette/frites-maison-au-four/
`,
`https://www.ptitchef.com/recettes/plat/chtitha-sardine-a-l-algeroise-sardines-en-sauce-fid-457402
`,
`https://solpatisserie.blogspot.com/2014/03/jus-dorange-sanguine-carotte-betterave.html`

]

voir.forEach((element,index) => {

    console.log(voir)

    element.addEventListener("click", (params) => {

    window.open(`${data[index]}`, "_blank");

        
    })
    
});

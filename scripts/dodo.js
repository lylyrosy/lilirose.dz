

const p=document.querySelector("p")
console.log(p)

let i=0; 
p.addEventListener("click", (params) => {

    const encore=document.getElementById("encore")
    console.log(encore)
    const array=[

`<iframe width="560" height="315" src="https://www.youtube.com/embed/F1NNH3PjV4U?si=jQDxTxw9PU1qqwR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/lnZN4L2MgjM?si=UsKlsCnlwk0bTby5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/kYO8ZPyiano?si=zSmhv5WsFz7-fE8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/yOsOneDV4GI?si=stkSejFxTqX8CRiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/YFDngBGc8J0?si=bgZRXllqfSD1HiIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/wpuvHIQgrkw?si=ZSG7wdLWMPJzTElr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/GksdcbAxjkY?si=QknUVrASqHG1uHYT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/vUFOx24oySg?si=2HqjHN2z3pHfi4Ia" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

`<iframe width="560" height="315" src="https://www.youtube.com/embed/f0KJXIPhH6Y?si=LGo8cujANuaYZCMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/2rdGgk5XKYc?si=yqtp3rgO2koVR5zL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe width="560" height="315" src="https://www.youtube.com/embed/8FLgDk1MgAw?si=RN3yp0IN6KoaTECt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,


    ]



encore.innerHTML=`${array[i]}`

i++;

if(i==array.length) i=0;

    
})
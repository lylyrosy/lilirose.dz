
const data=[
    `<img class="imgslider"  src="../imgb/alim/img12.jpg" alt="">`,
    `<img  class="imgslider" src="../imgb/alim/img1.png" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img2.png" alt=""> 
    `,
    `<img  class="imgslider" src="../imgb/alim/img3.jpg" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img4.png" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img5.webp" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img6.jpg" alt="">
    `,
    `<img  class="imgslider"  src="../imgb/alim/img7.jpg" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img8.png" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img9.jpg" alt="">
    `,
    `<img class="imgslider"  src="../imgb/alim/img10.png" alt="">
    `,
    `<img  class="imgslider"  src="../imgb/alim/img11.jpg" alt="">
    `,
  
]

const slidercontain=document.querySelector(".slidercontain")

let i=0;

slidercontain.innerHTML+=data[i]

let p=document.getElementsByTagName('p')[0];

p.innerText=`Conseil ${i+1}/${data.length}`;

const fin=document.querySelector(".fin")

fin.setAttribute("disabled","disabled")


const debut=document.querySelector(".debut")



const nextbt=document.querySelectorAll(".nextbt")
nextbt[i].classList.add("active")


debut.addEventListener("click", 
        (params) => {

            document.querySelector('.fin').removeAttribute("disabled");


            nextbt[i].classList.toggle("active")

            i++;

            nextbt[i].classList.toggle("active")

            slidercontain.innerHTML+=data[i];

            let p=document.getElementsByTagName('p')[0];

            p.innerText=`Conseil ${i+1}/${data.length}`;




       if(i==data.length-1)

       document.querySelector('.debut').setAttribute("disabled","disabled")

              
        })


        fin.addEventListener("click", () => {

            nextbt[i].classList.toggle("active")

            i--;

            nextbt[i].classList.toggle("active")

            slidercontain.innerHTML+=data[i];

            let p=document.getElementsByTagName('p')[0];

            p.innerText=`Conseil ${i+1}/${data.length}`;

            if(i==0) document.querySelector('.fin').setAttribute("disabled","disabled")

            document.querySelector('.debut').removeAttribute("disabled")


        })

        for (let j = 0; j < data.length; j++) {
            
            nextbt[j].addEventListener("click",(params) => {


                    i=j;

                

                    slidercontain.innerHTML+=data[j];
                    let p=document.getElementsByTagName('p')[0];

                    p.innerText=`Conseil ${i+1}/${data.length}`;


               
               nextbt[j].classList.add("active")
               for (const k in data) {
                if (k!=j) {
                    nextbt[k].classList.remove("active");
                    
                }


               }

               if (j==0) {
                document.querySelector('.debut').removeAttribute("disabled")
                document.querySelector('.fin').setAttribute("disabled","")

                
               }
               else if(j==data.length-1){  
                document.querySelector('.fin').removeAttribute("disabled")
                document.querySelector('.debut').setAttribute("disabled","")

                
               }

               else{
            
                    document.querySelector('.debut').removeAttribute("disabled")
                    document.querySelector('.fin').removeAttribute("disabled")
    
                    
                   
               }


            })

         
            
        }

    






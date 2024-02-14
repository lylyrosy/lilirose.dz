const ad=document.querySelector(".song")
const playing=document.querySelector(".fa-play")
const pauses=document.querySelector(".fa-pause")
const forw=document.querySelector(".fa-forward-step")
const ttl=document.querySelector(".title")
const art_img=document.querySelector("#artist")
const art_name=document.querySelector("#name")
const playsong=document.querySelector("#playsong")

const artist_title=[ 'Sinfonia in C Major, RV 112','Strings Concerto in B-Flat Minor, RV 164','Sinfonia in C Major, RV 112:','Orchestral Suite No. 2 in B Minor, BWV 1067',]

const artist_name=[ 'III. Presto', ' II. Adagio','I. Allegro','VII. Badinerie',]




playsong.addEventListener("click",effect)








function effect()


{
    

    console.log(ad.duration)
    console.log(x)
  console.log(progres.clientWidth)

    if ((!playing.classList.contains('none'))) {

        ad.play();
        setInterval(prog,1000);
        setInterval(line,1000);
         progres.addEventListener("click", (e) => {
            
            var widthbar2= (e.offsetX/e.target.clientWidth)*ad.duration;
             ad.currentTime=widthbar2;
         })
     
    } else
    {
        ad.pause();

  
    }

  ttl.classList.toggle('run');
    playing.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');

dur();




}

function RemoveEffect(){

ad.pause();
ad.currentTime=0.01;
ttl.classList.remove('run');
playing.classList.remove('none');
pauses.classList.add('none');
art_img.classList.remove('round');
dur();

}



var x=0;

function backward(){

   
 
   
 if (x<=0) {
        x=artist_name.length;
        
    }

    
   dur();
    x--;
 RemoveEffect();
    songs(x);





}

function forward(){

    



 if (x>=artist_name.length-1) {
        x=-1;}

dur();
        
    x++;
     RemoveEffect();
    songs(x); 
  

    


}

function songs(x)
{
    art_name.innerHTML=artist_name[x];
    ttl.innerHTML=artist_title[x];
    art_img.src=`../audios/ar${x}.jpg`;
     ad.src=`../audios/s${x}.mp3`;
   
}

songs(0);


const lines=document.querySelector(".linechild");
const progres=document.querySelector(".line");
const strt=document.querySelector("#start");
const end=document.querySelector("#end");


function dur()
{
    var dura=ad.duration
    var secdu=Math.floor(dura % 60)
    var mindu=Math.floor(dura / 60)
    if (secdu<10) {
        secdu=`0${secdu}`
        
    }
end.innerHTML=`${mindu}:${secdu}`

}



function prog()
{
    var curtime=ad.currentTime
    var mincur=Math.floor(curtime / 60)
    var seccur=Math.floor(curtime % 60)

    if (seccur<10) {
        seccur=`0${seccur}`
        
    }

    strt.innerHTML=`${mincur}:${seccur}`

}

function line()
{

    var widthbar= (ad.currentTime / ad.duration)*100
    lines.style.width=`${widthbar}%`
    
    if (widthbar==100) {
        
        sauter()
        
    }

}


const sauter = (params) => {

 if(x==artist_name.length-1) x=-1;  

dur();
 
x++;


 RemoveEffect();
songs(x); 

console.log(x);

}

    



   


  

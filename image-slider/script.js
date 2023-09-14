console.log("hello world");

const slides=document.querySelectorAll('.slide');
var counter=0;
slides.forEach
(

   (slide,index)=>{
    slide.style.left=`${index*100}%`
   }
)

const slideimage = () =>
{
   slides.forEach
   (
    (slide) => 
    {
        slide.style.transform=`translateX(-${counter*100}%)`
    }
   )
}
const next = () =>
{
    if(counter==4)
    {
        counter=0;
        slideimage();
    }
     counter++;
     slideimage();
}
const prev = () =>
{
     counter--;
     slideimage();
}
    


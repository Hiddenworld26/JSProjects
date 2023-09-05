const end_date = "6 September 2023 10:00:00 AM ";
document.getElementById("end-date").innerHTML=end_date;
const inputs=document.querySelectorAll('input');

function clock()
{
    const end=new Date(end_date);
    const now=new Date();
    const diff=(end-now)/1000;
    // console.log(diff);
if(now>end)
return;
   const days= inputs[0].value=Math.floor(diff/3600/24);
   const hours= inputs[1].value=Math.floor((diff/3600)%24);
   const mins= inputs[2].value=Math.floor((diff/60)%60);
   const secs= inputs[3].value=Math.floor(diff%60);
//    console.log(days,hours,mins,secs);
}
clock();
setInterval(
    ()=>
    {
        clock();
    },
    1000
)


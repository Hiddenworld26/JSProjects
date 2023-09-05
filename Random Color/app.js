
const getcolor = () =>
{
    const randomNumber=Math.floor(Math.random()*16777215);
    const code="#"+randomNumber.toString(16);

document.body.style.backgroundColor=code;
    document.getElementById('color-code').innerHTML=code;
    console.log(code);

}
document.getElementById('bt').addEventListener("click",getcolor)
getcolor();

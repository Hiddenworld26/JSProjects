// console.log("hello world");
const questions= [
    {
       q:' 1). What is the national flower of India?',
        a:'Lotus',
        b:'Rose',
        c:'Sunflower',
        d:'Hibiscus',
        correct:'a',
    },
    {
        q:' 2). What is the capital city of India?',
        a:'New Delhi',
        b:'Mumbai',
        c:'Kolkata',
        d:'Chennai',
        correct:'a',
    },
    {
        q:' 3). Which is the national sport of India? ',
        a:'Cricket',
        b:'Hockey',
        c:'Kabadi',
        d:'Football',
        correct:'b'  ,
    },
    {
        q:' 4). Who is popularly known as the “Iron Man” of India?  ',
        a:'Lal Bahadur Shastri',
        b:'Sardar Vallabh Bhai Patel',
        c:'Mahatma Gandhi',
        d:'Dr. B.R Ambedkar',
        correct:'b' ,   
    },
    {
       q:' 5). Who discovered India?  ',
        a:'Vasco da Gama',
        b:'Christopher Columbus',
        c:'James Cook',
        d:'Willem Janszoon',
      correct:'a',  
    }
];
const total=questions.length;
console.log(total);
var wrong=0;
var right=0;
var index=0;
const loadquestions = () =>
{
    if (total === index) {
      quizEnd();
    }
    reset();
    
    let option = document.querySelectorAll('input');
    var data=questions[index];
document.getElementById('question').innerHTML = questions[index].q;

    option[0].nextElementSibling.innerText=questions[index].a;
    option[1].nextElementSibling.innerText=questions[index].b;
    option[2].nextElementSibling.innerText=questions[index].c;
    option[3].nextElementSibling.innerText=questions[index].d;
   

}
const submitques = () =>
{
    var ans= getanswer();
    
    if(ans===questions[index].correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    console.log(right);
    console.log(wrong);
    
    index++;
    loadquestions();
    
}
const getanswer = () =>
{
   var ans;
let option = document.querySelectorAll('input')
option.forEach((input) => {
    if(input.checked)
    {
        ans=input.value;
    }
    
    
    
}
);
return ans;


}
function reset ()
{
    let option = document.querySelectorAll('input'); 
    option.forEach((input) => {
        input.checked=false;
        // ans=input.value;
        
    });
}
const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div  >
            <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
        </div>
    `
}

loadquestions();




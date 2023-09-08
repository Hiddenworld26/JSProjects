console.log('Hello world');
const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="0123456789";
const symbolset="+_*&%$#@!";
// let password=Math.floor(Math.random());
// console.log(password);

const getrandomdata = (dataset) =>
{
    var password=dataset[Math.floor(Math.random()*dataset.length)];
    
    return password;
    // Math.random() * dataset.length calculates a random floating-point number between 0 (inclusive) and dataset.length (exclusive). This means it will produce a random number between 0 and one less than the length of the dataset array.
    // Math.floor() is then used to round down this random floating-point number to the nearest integer. This ensures that the result is a whole number.
}

const uppercase=document.getElementById('cu');
const lowercase=document.getElementById('cl');
const numbers=document.getElementById('pn');
const symbols=document.getElementById('s');
const passlen=document.getElementById('len');

const genpass = (password=" ") =>
{ var password;
    if(uppercase.checked)
    password+=getrandomdata(upperset);
    
    if(lowercase.checked)
    password+=getrandomdata(lowerset);
    
    if(numbers.checked)
    password+=getrandomdata(numberset);
    if(symbols.checked)
    password+=getrandomdata(symbolset);
    if(password.length < passlen.value)
    {
       return genpass(password);
    }

    password= truncateString(password, passlen.value);
   const passshow= document.getElementById('p');
   passshow.value="Password is " + password;
    console.log(password);
}

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// The truncateString function you've provided is a simple JavaScript function that truncates 
// a given string str to a specified length num.
// If the length of the input string str is greater than num,
// it returns the first num characters of the string, effectively truncating it. 
// If the length of the string is equal to or less than num,
// it returns the original string unaltered.




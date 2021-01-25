


// ------------------input------------------
const input = document.querySelector('#input') //get the input element
const outputLeap = document.querySelector('#output1') //get the output element
const outputPrime = document.querySelector('#output2') //get the output2 element
const btn = document.querySelector('#btn')   // get the btn element




function eventHandler () {

// to check if b'day is prime

const inputDate = new Date(input.value).getDate();

for (let i =2; i < inputDate; i++) {           ////// ------------process
    if (inputDate % i == 0){
    outputPrime.innerText = "your Birthday is prime number";
    break;
}
   else{
    outputPrime.innerText = "your bday is not prime";               // ---------------output
    break;
}
}





// to check B'day leap year or not

    const inputYear = new Date(input.value).getYear();

if ((inputYear % 4 ==0) && (inputYear % 100 != 0) || (inputYear % 400 == 0)) {
      outputLeap.innerText = "Your birthDay is a leap year";
}
else{
    outputLeap.innerText ="Your birthDay is not a leap year";
}

}

btn.addEventListener("click", eventHandler)
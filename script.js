let inputDate = document.getElementById("inputDate");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");
calculateBtn.addEventListener('click',function(){
    let birthDate = new Date(inputDate.value);
    let birthYear = birthDate.getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;
    result.innerText = `Your age is ${age} years.`;
})

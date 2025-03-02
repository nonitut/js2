document.addEventListener("DOMContentLoaded", function(){


// alert("Привет ребята")
// alert("wow")
// alert(6 + 8)
// alert("Nan")

// let x = 6 ;
// const y = 3; 
// let x4 = 10;
// alert(x)

// alert( 1 / 0 );

// let name = "Friend";
// alert( `Привет, ${name}!` );


// let iter = 4 < 1;
// alert( iter );


// let isGre = 5 > 10;
// console.log(isGre);


// let temperature = 25;
// let isHot = temperature > 30 ? "Горячо" : "Не горячо";
// console.log(isHot); 


// let value = "Привет, мир!";
// let valueType = typeof value === "string" ? "Строка" : "Не строка";
// alert(valueType);


let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`);


let textik = prompt('Write your name?', "First Name");
alert(`hi ${textik} !`);


let userAnswer = prompt("Вы согласны с условиями использования? (да/нет)");

if (userAnswer.toLowerCase() === "да") {
  console.log("Спасибо за согласие!");
} 
else if (userAnswer === null) {
  console.log("Операция отменена");
} 
else {
  console.log("Вы отказались от условий использования.");
}



})
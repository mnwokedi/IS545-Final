var start = document.getElementById("number1");
var end = document.getElementById("number2");

var button = document.querySelector(".submit-button");
var form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
   for (var x = 0; x<=100; x++)
   if (x === 0) {
    console.log(x +  " is even");
}
else if (x % 2 === 0) {
    console.log(x + " is even");   
}
else {
    console.log(x + " is odd");
}
}

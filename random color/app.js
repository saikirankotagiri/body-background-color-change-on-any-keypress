// generating 3 random numbers to get random rgba value from 0-255

let randomNumber1;
let randomNumber2;
let randomNumber3;
function randomColor() {
  let min = 0;
  let max = 255;
   randomNumber1 = Math.floor((Math.random() * (max - min + 1)));
   randomNumber2 = Math.floor((Math.random() * (max - min + 1)));
   randomNumber3 = Math.floor((Math.random() * (max - min + 1)));
  // console.log(randomNumber1, randomNumber2, randomNumber3)
}

// using keypress event to change body color based on above generated random numbers.
let body = document.querySelector('body');
body.addEventListener('keypress', function () {
  randomColor();
  body.style.backgroundColor = `rgba(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`
})
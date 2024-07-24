/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let total = ""
let num1 = ""
let num2 = ""
let operator = ""
let reset = "0"

// console.log(`test: ${num1}`)


/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector("#calculator")    //<- parent node/element
console.log(calculator)
const displayEl = document.querySelector(".display")



/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
    // to test/verify if getting the correct value when button is clicked -> 8 button prints 8
    console.log(event.target.innerText)


})


/*-------------------------------- Functions --------------------------------*/

  
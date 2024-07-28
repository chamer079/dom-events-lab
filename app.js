/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let total 
let num1 = ""   //<- if doesn't work, try null
let num2 = ""
let operator    // <- no equal sign - initializing
let reset = 0

// console.log(`test: ${num1}`)


/*------------------------ Cached Element References ------------------------*/

const displayEl = document.querySelector(".display")
const numEl = document.querySelectorAll(".number")
const operatorEl = document.querySelectorAll(".operator")
const equalEl = document.querySelector(".equals")


/*----------------------------- Event Listeners -----------------------------*/
numEl.forEach((num) => {
    num.addEventListener("click", (event) => {
        let currentNum = event.target.textContent

        displayEl.textContent = currentNum
    })
})

operatorEl.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        let currentOperator = event.target.textContent

        displayEl.textContent = currentOperator
    })
})

equalEl.addEventListener("click", (event) =>{
    console.log(event.target)
})





/*-------------------------------- Functions --------------------------------*/
// const calculations = () => {

//     if(operatorEl.event === "+"){       //<- revisit: perhaps place in a new function?
//         equalEl.textContent = currentNum + currentNum
//         console.log(event.target)
//     }

// }

// calculations()

  
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

let number1 = "";
let operator = "";
let number2 = "";

function operate(operator, num1, num2){
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

const bnumbers = document.querySelectorAll(".number");
const p = document.querySelector("#display");

function updateNumbers () {
    bnumbers.forEach(function (button) {
        button.addEventListener("click", function (e) {
            p.textContent = e.currentTarget.textContent;
            if (operator === "") {
                number1 += e.currentTarget.textContent;
                console.log("number1: " + number1)
            } else {
                number2 += e.currentTarget.textContent;
                console.log("number2: " + number2);
            }
    })
})
}

const boperators = document.querySelectorAll(".operator");

function updateOperator () {
    boperators.forEach(function (button) {
        button.addEventListener("click", function (e) {
            p.textContent = e.currentTarget.textContent;
            operator = e.currentTarget.textContent;
            console.log("operator: " + operator);
        })
    })
}

const bequal = document.querySelector(".equal");

function equal () 
    {bequal.addEventListener("click", function (e) {
        p.textContent = e.currentTarget.textContent;
        if (number1 !== "" && operator !== "" && number2 !== "") {
            p.textContent = operate(operator, Number(number1), Number(number2));
        } else {
            p.textContent = "Something went wrong";
        }
        });
    };

updateNumbers()
updateOperator()
equal()

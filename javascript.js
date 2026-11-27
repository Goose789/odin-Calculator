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
            p.textContent += e.currentTarget.textContent;
            if (operator === "") {
                number1 += e.currentTarget.textContent;
                console.log("number1: " + number1);
            } else {
                number2 += e.currentTarget.textContent;
                console.log("number2: " + number2);
            };
    });
});
};

const boperators = document.querySelectorAll(".operator");

function updateOperator () {
    boperators.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (number1 === "" && (e.currentTarget.textContent === "+" || e.currentTarget.textContent === "-") ) {
                p.textContent += e.currentTarget.textContent;
                number1 += e.currentTarget.textContent;
                console.log("number1: " + operator);
            } else if (number1 === "" && (e.currentTarget.textContent === "*" || e.currentTarget.textContent === "/")) {
                p.textContent = "nope, we can't start with that";
            } else if (operator === "") {
                p.textContent += e.currentTarget.textContent;
                operator = e.currentTarget.textContent;
                console.log("operator: " + operator);
            } else {
                p.textContent = "error";
            };
        });
    });
};

const bequal = document.querySelector("#equal");

function equal () {
    bequal.addEventListener("click", function (e) {
        p.textContent += e.currentTarget.textContent;
        if (number1 !== "" && operator !== "" && number2 !== "") {
                if (operator === "/" && number2 === "0") {
                    p.textContent = "We don't divide by 0, idiot!"
                } else {
                    p.textContent = Number(operate(operator, Number(number1), Number(number2)).toFixed(2));
                    number1 = p.textContent;
                    number2 = "";
                    operator = "";
                    console.log("num1: " + number1 + ",num2: " + number2 + ",operator: " + operator)
            };
        } else {                 
            p.textContent = "Something went wrong";
        };
    });
};

const bclear = document.querySelector("#clear");

function clear () {
    bclear.addEventListener("click", function (e) {
        p.textContent = "";
        number1 = "";
        operator = "";
        number2 = "";
    })
}

const bdot = document.querySelector("#dot");

function decimal () {
    bdot.addEventListener("click", function (e) {
        if (number1 === "") {
            p.textContent = "can't start with '.'";
        } else if (operator === "" && !number1.includes(".")) {
            p.textContent += e.currentTarget.textContent;
            number1 += e.currentTarget.textContent;
            console.log("number1: " + number1);
        } else if (operator !== "" && !number2.includes(".")) {
            p.textContent += e.currentTarget.textContent;
            number2 += e.currentTarget.textContent;
            console.log("number2: " + number2);
        } else {
            p.textContent = "can't have two '.' in one number, duh!"
        }
    })
}

const bbackspace = document.querySelector("#backspace");

function backspace () {
    bbackspace.addEventListener("click", function (e) {
        p.textContent = p.textContent.slice(0, -1);
        if (number1 === "" && number2 === "" && operator === "") {
            // Do nothing
        } else if (number1 !== "" && operator === "") {
            number1 = String(number1).slice(0,-1);
            console.log("number1: " + number1);
        } else if (operator !== "" && number2 === "") {
            operator = operator.slice(0, -1);
            console.log("operator: " + operator);
        } else if (number2 !== "") {
            number2 = String(number2).slice(0, -1);
            console.log("number2: " + number2)
        }
    })
}

updateNumbers();
updateOperator();
equal();
clear();
decimal();
backspace();
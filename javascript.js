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
};

const p = document.querySelector("#display");

function handleNumbers (num) {
    p.textContent += num;
    if (operator === "") {
        number1 += num;
    } else {
        number2 += num;
    };
};

function handleOperators (op) {
    if (number1 === "" && (op === "+" || op === "-") ) {
        p.textContent += op;
        number1 += op;
    } else if (number1 === "" && (op === "*" || op === "/")) {
        p.textContent = "nope, we can't start with that";
    } else if (operator === "") {
        p.textContent += op;
        operator = op;
    } else {
        p.textContent = "error";
    };
};

function handleEqual (eq) {
    p.textContent += eq;
    if (number1 !== "" && operator !== "" && number2 !== "") {
        if (operator === "/" && number2 === "0") {
            p.textContent = "We don't divide by 0, idiot!"
        } else {
            p.textContent = Number(operate(operator, Number(number1), Number(number2)).toFixed(2));
            number1 = p.textContent;
            number2 = "";
            operator = "";
        };
    } else {                 
        p.textContent = "Something went wrong";
    };
};

function handleClear () {
    p.textContent = "";
    number1 = "";
    operator = "";
    number2 = "";
}

function handleDot (dot) {
    if (number1 === "") {
        p.textContent = "can't start with '.'";
    } else if (operator === "" && !number1.includes(".")) {
        p.textContent += dot;
        number1 += dot;
        console.log("number1: " + number1);
    } else if (operator !== "" && !number2.includes(".")) {
        p.textContent += dot;
        number2 += dot;
        console.log("number2: " + number2);
    } else {
        p.textContent = "can't have two '.' in one number, duh!"
    }
};

function handleBackSpace () {
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
};

const bnumbers = document.querySelectorAll(".number");
function updateNumbers () {
    bnumbers.forEach(function (button) {
        button.addEventListener("click", function (e) {
            handleNumbers(e.currentTarget.textContent);
    });
});
};

const boperators = document.querySelectorAll(".operator");
function updateOperator () {
    boperators.forEach(function (button) {
        button.addEventListener("click", function (e) {
            handleOperators(e.currentTarget.textContent);
        });
    });
};
const bequal = document.querySelector("#equal");
function equal () {
    bequal.addEventListener("click", function (e) {
        handleEqual(e.currentTarget.textContent);
    });
};


const bclear = document.querySelector("#clear");
function clear () {
    bclear.addEventListener("click", function (e) {
        handleClear();
    });
};

const bdot = document.querySelector("#dot");
function decimal () {
    bdot.addEventListener("click", function (e) {
        handleDot(e.currentTarget.textContent);
    });
};

const bbackspace = document.querySelector("#backspace");
function backspace () {
    bbackspace.addEventListener("click", function (e) {
        handleBackSpace();
    });
};

document.addEventListener("keydown", function (e) {
    if  (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        handleNumbers(e.key)
    } else if (["+", "-", "*", "/"].includes(e.key)) {
        e.preventDefault();
        handleOperators(e.key);
    } else if (["=", "Enter"].includes(e.key)) {
        e.preventDefault();
        handleEqual(e.key);
    } else if (e.key === "c") {
        handleClear();
    } else if (e.key === ".") {
        handleDot(e.key);
    } else if  (e.key === "Backspace") {
        handleBackSpace();
    }
});

updateNumbers();
updateOperator();
equal();
clear();
decimal();
backspace();
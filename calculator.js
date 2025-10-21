let varnum1= 7;
let varnum2 = 6;
let operator = "subtract";
//console.log(operate(operator,varnum1,varnum2));

const displaynum = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const value = button.textContent;
        if (value ==="C"){
            displaynum.textContent ="";
        }
        else if (value ==="+"){
            displaynum.textContent =0;
        }
        else if (value ==="-"){
            displaynum.textContent =0;
        }
        else if (value ==="/"){
            displaynum.textContent =0;
        }
        else if (value ==="*"){
            displaynum.textContent =0;
        }else if (value ==="="){
            displaynum.textContent =0;
        }else {
            displaynum.textContent +=value;
        }
        console.log(button.textContent)
}
)
} 
)



function operate(operator,num1,num2){
    let result;
switch(operator){
    case "add":
        result = add(num1,num2);
        break;
    case "subtract":
        result = subtract(num1,num2);
        break;
    case "multiply":
        result = multiply(num1,num2);
        break;
    case "divide":
        result = divide(num1,num2);
        break;
};
return result;

}

function add(num1,num2){
    return num1+num2
}
function subtract(num1,num2){
    return num1-num2
}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    return num1/num2
}

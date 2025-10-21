//console.log(operate(operator,varnum1,varnum2));
        let varnum1="";
        let varnum2="" ;
        let operator="";
        let result =null;
const displaynum = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const value = button.textContent;
        
        if (value ==="C"){
            displaynum.textContent ="";
            varnum1="";
            varnum2="";
            operator="";
            result =null;
        }
        else if (value ==="="){
            result= operate(operator,Number(varnum1),Number(varnum2));
            displaynum.textContent =result;
            varnum1=result;
        varnum2 ="";}
        else if (value ==="+"){
            if(operator !=""){
            result= operate(operator,Number(varnum1),Number(varnum2));
            operator="+";
            displaynum.textContent =result;
            varnum1=result;
            }
            else{
                operator="+";
                displaynum.textContent +=value;
            }
        }
        else if (value ==="-"){
            if(operator !=""){
            result= operate(operator,Number(varnum1),Number(varnum2));
            operator="-";
            displaynum.textContent =result;
            varnum1=result;
            }
            else{
                operator="-"
                displaynum.textContent +=value;
            }
        }
        else if (value ==="/"){
            if(operator !=""){
            result= operate(operator,Number(varnum1),Number(varnum2));
            operator="/";
            displaynum.textContent =result;
            varnum1=result;
            }
            else{
                operator="/"
                displaynum.textContent +=value;
            }
        }
        else if (value ==="*"){
            if(operator !=""){
            result= operate(operator,Number(varnum1),Number(varnum2));
            operator="*";
            displaynum.textContent =result;
            varnum1=result;
            }
            else{
                operator="*";
                displaynum.textContent +=value;
            }
        }
        else {
            if(operator===""){
                varnum1 +=value;
            }
            else{
                varnum2 +=value;
            }
            displaynum.textContent +=value;
        }
        console.log(operator)
        console.log(varnum1)
        console.log(varnum2)
}
)
} 
)



function operate(operator,num1,num2){
    let result;
switch(operator){
    case "+":
        result = add(num1,num2);
        break;
    case "-":
        result = subtract(num1,num2);
        break;
    case "*":
        result = multiply(num1,num2);
        break;
    case "/":
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

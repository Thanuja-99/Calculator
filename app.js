// function cal() { 
 
//     let number1; 
//     let  number2; 
 
//     number1=new Number(document.getElementById("number1").value); 
//     number2=new Number(document.getElementById("number2").value); 
 
//     let op = document.getElementById("cal").value; 
    
 
//   // number1=new Number(12); 
//     //number2=new Number(10); 
 
//     console.log(number1+number2); 
     
//     //let number1=document.getElementById("number1").value; 
 
//     //let number2=document.getElementById("number2").value; 
 
//     let result; 
 
     
//     switch (op) { 
//         case "+": 
//             result = number1 + number2; 
//             break; 
//         case "-": 
//             result = number1 - number2; 
//             break; 
//         case "*": 
//             result = number1 * number2; 
//             break; 
//         case "/": 
//             if (number2 !== 0) { 
//                 result = number1 / number2; 
//             } else { 
//                 result = "Cannot divide by zero"; 
//             } 
//             break; 
//         default: 
//             result = "Invalid operator"; 
//             break; 
//     } 
 
    
//     let lblOutput = document.getElementById("output"); 
//     lblOutput.innerHTML = "Result is : " + result; 
// }

function cal(operator) { 
        let number1; 
        let  number2; 
     
        number1=new Number(document.getElementById("number1").value); 
        number2=new Number(document.getElementById("number2").value); 
    let result;

    
        switch (operator) { 
            case "+": 
                result = number1 + number2; 
                break; 
            case "-": 
                result = number1 - number2; 
                break; 
            case "*": 
                result = number1 * number2; 
                break; 
            case "/": 
                if (number2 !== 0) { 
                    result = number1 / number2; 
                } else { 
                    result = "Cannot divide by zero"; 
                } 
                break; 
            default: 
                result = "Invalid operator."; 
                break; 
        } 
    
    
    document.getElementById("output").innerHTML = "Result is: " + result;
}

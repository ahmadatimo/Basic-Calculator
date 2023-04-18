
let input1;
let input2;
let sign;
let answer;

let displayInput1 = document.getElementById('show1');
let displayInput2 = document.getElementById('show2');
let displaySign = document.getElementById("sign");
let displayAnswer = document.getElementById("res");

let firstInput = document.getElementById('num1');
let add = document.getElementById("addButton");
let minus = document.getElementById("minusButton");
let multiply = document.getElementById("multiButton");
let divide = document.getElementById("divisionButton");
let equal = document.getElementById("submit");
let secondInput = document.getElementById('num2');

firstInput.addEventListener('input', function(event) {
    input1 = firstInput.value;
    console.log(input1);
    displayInput1.innerText = "First number is: " + input1;
});

add.onclick = function(){
    sign = '+';
    console.log(sign);
    displaySign.innerText = "Sign is: " + sign;
}

minus.onclick = function(){
    sign = '-';
    console.log(sign);
    displaySign.innerText = "Sign is: " + sign;
}

multiply.onclick = function(){
    sign = '*';
    console.log(sign);
    displaySign.innerText = "Sign is: " + sign;
}

divide.onclick = function(){
    sign = '/';
    console.log(sign);
    displaySign.innerText = "Sign is: " + sign;
}

secondInput.addEventListener('input', function(event) {
    input2 = secondInput.value;
    console.log(input2);
    displayInput2.innerText = "Second number is: " + input2;
});

equal.onclick = function() {

    if(sign == "+")
    {
        answer = Number(input1) + Number(input2);
    }
    else if (sign == "-")
    {
        answer = Number(input1) - Number(input2);
    }
    else if( sign == "*")
    {
        answer = Number(input1) * Number(input2);
    }
    else if( sign == "/")
    {
        if(input2 ==     "0")
        {
            answer = "Can't divide by 0";
        }
        else
        {
            answer = Number(input1) / Number(input2);
            let temp = Number(input1) % Number(input2) * 0.1;
            console.log(temp);
            //answer = Number(answer) + 0.001*  (Number(temp));
        }
    }

    displayAnswer.innerText = "The answer is: " + answer;
}
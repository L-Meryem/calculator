/*
Create a simple calculator that has two inputs and returns the result of +,-,/,* somewhere in the DOM
*/

const smurf = document.querySelectorAll('h1');
smurf.forEach(h1 => h1.addEventListener('click', () => calculate(h1)));

function calculate(smurf) {
    const numberOne = +document.querySelector('#numberOne').value;
    const numberTwo = +document.querySelector('#numberTwo').value;
    const result = document.querySelector('#result');
    result.innerText = operation(smurf.id, numberOne, numberTwo);

}

function operation(operator,num1, num2){
    switch(operator){
        case 'add':
            return  num1 + num2;
            break;
        case 'sub':
            return  num1 - num2;
            break;
        case 'multi':
            return  num1 * num2;
            break;
        case 'divid':
            return  (num1 / num2).toFixed(8);
            break;

    }

}


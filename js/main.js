const smurf = document.querySelectorAll('h1');
smurf.forEach(h1 => h1.addEventListener('click', () => calculator(h1)));

function calculator(h1) {
    const result = document.querySelector('#result');

    if (h1.innerText === "C")
        clear(result);
    else if (h1.innerText === "=") {
        const operationArray = stringToArray(result);
        calculate(operationArray);
    }else
        result.value += h1.innerText;
}


function clear(result) {
    document.querySelector('#result').value = "";
}

function calculate(operationArray){
      let calc = operationArray[0];

        for (let i = 1; i < operationArray.length; i += 2) {
            const operator = operationArray[i];
            const number = operationArray[i + 1];

            if (operator === '+') calc += number;
            else if (operator === '-') calc -= number;
            else if (operator === 'x') calc *= number;
            else if (operator === '/') calc /= number;
            else if (operator === '%') calc %= number;

        document.querySelector('#result').value = calc;

        }
}


 // 12+4-332 => [12, "+", 4, "-", 322] 
function stringToArray(display) {

    let myDisplay = display.value;
    let myArr = [];
    let num = "";

    for (let i = 0; i < myDisplay.length; i++) {
        if(!"+-x/%".includes(myDisplay[i])){
            num = num + myDisplay[i];
        } else {
            myArr.push(+num);
            myArr.push(myDisplay[i]);
            num = "";
        }
        if (i == myDisplay.length - 1)
            myArr.push(+num);
    }

    return myArr;
}
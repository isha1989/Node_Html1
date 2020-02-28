function biggerNumber(firstNumber, secondNumber) {
    if (isNaN(firstNumber) && isNaN(secondNumber)) {
        console.log("error");
    }
    if (firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
    }
    if (firstNumber < secondNumber) {
        console.log(`Number ${firstNumber} is smaller than ${secondNumber}`);
    }

    if (firstNumber === secondNumber) {
        console.log(`Both numbers are equal`);
    }

}
biggerNumber(3, 5);
biggerNumber(6, 3);
biggerNumber(2, 2);

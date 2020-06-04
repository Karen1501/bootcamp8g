const getUserString = () => {
    let userString = prompt("Ingresa solo una palabra")
    let stringArray = userString.split(" ")
    let wordCount = stringArray.length
    if (wordCount > 1) {
        alert("Ingresa solo una palabra")
    } else {
        console.log(userString)
    }
    var lettersArray = userString.split("");
    for (let i = 0; i < lettersArray.length; i++) {
        let character = lettersArray[i]
        let isNumber = isNaN(character)
        isNumber ? null : alert("No puedes tener números")
    }
    if (userString.split(" ") === userString.split(" ").reverse()) {
        alert("Es un palíndromo")
    } else {
        userString.split(" ") != userString.split(" ").reverse()
        alert("No es un palíndromo")
    }
}





/*crear una función que reciba un número del usuario
        -si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
        -si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
        -si el usuario ingresa un número, descomponer ese número en sus factores primos ( https://www.youtube.com/watch?v=NPaBFe6QBDQ )
        -concatenar cada factor primo encontrado en un string, y entregar ese string como resultado final al usuario.
        input -> 24
        output -> "2, 2, 2, 3"
        */
/*
const count_input = string => string.trim().replace(',', ' ').split(' ').length;
const get_number = () => {
    let number = prompt("Ingresa un numero")
    if (count_input(number) > 1) {
        return 'solo ingresar un numero'
    }
    if (filter_number(number)) {
        return 'Favor de ingresar solo números'
    }
    let arrayPrimeNumbers = get_prime_number_array(parseInt(number))
    let primeFactor = get_prime_factor(number, arrayPrimeNumbers);
    if (primeFactor) {
        return alert(`Los factores primo de ${number} son: ${primeFactor}`);
    } else {
        return alert(`No pudimo obtener el factor primo  ${number}`)
    }
}
const filter_number = number => {
    if (number.match(/\D/)) {
        return true;
    }
    return false;
}
const get_prime_number_array = number => {
    let arrayNumber = []
    for (let i = 2; i <= number; i++) {
        if (is_prime_number(i)) {
            arrayNumber.push(i);
        }
    }
    return arrayNumber;
}
const is_prime_number = number => {
    if (number === 0 || number === 1) {
        return false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false
            }
        }
    }
    return true
}
const get_prime_factor = (number, arrayPrimeNumbers) => {
    let primeFactorArr = [],
        flag = true
    while (flag == true) {
        let firstNumber = get_first_number(arrayPrimeNumbers)
        if (number % firstNumber === 0) {
            primeFactorArr.push(firstNumber);
            number /= firstNumber;
        } else {
            arrayPrimeNumbers.shift();
        }
        flag = arrayPrimeNumbers.length === 0 ? false : true;
    }
    return primeFactorArr.join(',');
}
const get_first_number = numberArr => numberArr[0]
console.log(get_number());
*/


var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
var primeFactors;
var primeCounter;
var originalNumber;
var primeNumber;
const findPrimeFactors = () => {
    primeFactors = [];
    primeCounter = 0;
    originalNumber = parseInt(prompt("Ingresa un número"))
    primeNumber = primeNumbers[primeCounter]; /*aquí prime counter vale 0*/
    checkIfIsFactor(originalNumber, primeNumber)
}
const checkIfIsFactor = (originalNumber, primeNumber) => {
    if (originalNumber / primeNumber === 1) { /*Salida temprana*/
        primeFactors.push(primeNumber);
        alert(primeFactors.join(", "))
    } else if (originalNumber % primeNumber === 0) { /*revisamos si el númerooriginal es divisible entre el factor*/
        primeFactors.push(primeNumber);
        originalNumber /= primeNumber;
        checkIfIsFactor(originalNumber, primeNumber)
    } else {
        primeCounter++
        primeNumber = primeNumbers[primeCounter] /*seleccionamos el siguiente factor primo*/
        checkIfIsFactor(originalNumber, primeNumber)
    }
}
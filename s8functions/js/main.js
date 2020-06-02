/*
const selectedOperation = (getUserOperation) => {
    var selectedOperation = prompt("¿Qué operación deseas realizar")
    var valor1 = parseInt(prompt("ingresa el primer dato"))
    var valor2 = parseInt(prompt("ingresa el segundo dato"))
    getUserOperation(selectedOperation, valor1, valor2)
}

const getUserOperation = (selectedOperation, valor1, valor2) => {
    switch (selectedOperation) {
        case "suma":
            console.log("tu elección es una adición")
            alert(`El resultado de la operación es  ${valor1 + valor2 }`)
            break;
        case "resta":
            console.log("Vas a hacer una resta")
            alert(`El resultado de la operación es  ${valor1 - valor2 }`)
            break;
        case "división":
            console.log("seleccionaste una división")
            alert(`El resultado de la operación es  ${valor1 / valor2 }`)
            break;
        case "multiplicación":
            console.log("lo que vas a hacer es una multiplicación")
            alert(`El resultado de la operación es  ${valor1 * valor2 }`)
            break;
        default:
            console.log("no puedo realizar la operación seleccionada")
    }
}
*/
/*
/*1:
    -preguntar al usuario el nombre de una figura geométrica (cuadrado, rectángulo, círculo, triángulo)
    -preguntar al usuario qué desea calcular (area, perímetro)
    -dependiendo de la figura y lo que se desea calcular, aplicar la fórmula correspondiente y mostrar al usuario en un alert el resultado del cálculo.
    */
/*
2:
    -pedirle al usuario un número entre 0 y 50
    -si el número ingresado por el usuario sale del rango, pedirle que ingrese un número diferente
    -si el número es mayor a 0, imprimir en consola todos los números pares que existan entre 0 y el número ingresado por el usuario
*/
/*
const PI = 3.1415
const askUserForNumber = () => {
        let userNumber = parseInt(prompt("Ingresa un número entre 0 y 50"))
        console.log(userNumber)
        if (userNumber > 0 && userNumber < 50) {
            for (let i = 0; i <= userNumber; i++) {
                if (i % 2 === 0) {
                    console.log(`${i} es un número par`)
                }
            }
        } else {
            alert("Tu número no esta dentro del rango")
        }
    }
    /*
    const askUserForData = () => {
        let figure = prompt("Escoge entre cuadrado, rectángulo, círculo y triángulo");
        let operation = prompt("Qué deseas calcular? área ó perímetro?");
        console.log(figure, operation)
        if (figure === "cuadrado" && operation === "área") { 
            let side = parseInt(prompt("Cuánto mide el lado de tu cuadrado?"))
            let result = getSquareArea(side)
            alert(`El ${operation} de tu ${figure} es igual a ${result}`)
        } else if (figure === "cuadrado" && operation === "perímetro") {
            let side = parseInt(prompt("Cuánto mide el lado de tu cuadrado?"))
            let result = getSquarePerimeter(side)
            alert(`El ${operation} de tu ${figure} es igual a ${result}`)
        } else if (figure === "círculo" && operation === "área") {
            let radius = parseInt(prompt("Cuánto mide el radio de tu círculo?"))
            let result = getCircleArea(PI, radius);
            alert(`El ${operation} de tu ${figure} es igual a ${result}`)
        } else if (figure === "círculo" && operation === "perímetro") {
            let diameter = parseInt(prompt("Cuánto mide el díametro de tu círculo?"))
            let result = getCirclePerimeter(PI, diameter);
            alert(`El ${operation} de tu ${figure} es igual a ${result}`)
        }
    }
    const getSquareArea = (side) => {
        let squareArea = (side * side);
        return squareArea
    }
    const getTriangleArea = (base, height) => {
        let triangleArea = (base * height) / 2
        return triangleArea
    }
    const getCircleArea = (PI, radius) => {
        let circleArea = PI * (radius * radius);
        return circleArea
    }
    const getSquarePerimeter = (side) => {
        let squarePerimeter = side * 4
        return squarePerimeter
    }
    const getCirclePerimeter = (PI, diameter) => {
        let circleDiameter = PI * diameter
        return circleDiameter
    }
    */





const getUserName = () => {
    let userName = prompt("Ingresa tu nombre completo")
    let lettersCount = countLetters(userName);
    let vowelsCount = countVowels(userName)
    let isPrime = checkPrimeNumber(lettersCount);
    alert(`Tu nombre tiene ${lettersCount} letras, también tiene ${vowelsCount} vocales`)
    isPrime ?
        alert("La cantidad de letras corresponde a un número primo") :
        alert("La cantidad de letras no corresponde a un número primo")
}
const countLetters = (string) => {
    let stringWithoutSpaces = string.replace(/ /g, "")
    let stringLength = stringWithoutSpaces.length;
    return stringLength
}
const countVowels = (string) => {
    var vowelCount = string.match(/[aeiou]/gi)
    return vowelCount.length
}
const checkPrimeNumber = (number) => {
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
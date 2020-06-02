var nombre = prompt("Por favor, ingresa tu nombre")
console.log(nombre)


var nombreUsuario = nombre.split(" ")
console.log(nombreUsuario)

if (nombreUsuario.length <= 3) {
    alert("Tu nombre es corto")
} else if (nombreUsuario.length > 3) {
    alert("Tu nombre es muy largo")
}

//Pedir al usuario mediante dferentes prompt,mostrar al usuario su dirección completa.


var calle = prompt("Por favor igresa en nombre de la calle")
var number = prompt("Por favor ingresa el número")
var colonia = prompt("Por favor ingresa la colonia")
var alcaldia = prompt("Por favor ingresa la alcaldía")
var edo = prompt("Por favor ingresa el estado")

var direction = `${calle} ${number} ${colonia} ${alcaldia} ${edo}`
console.log(direction)
var splittedDirection = direction.split(" ");

var finalDirection = "";

for (let i = 0; i < splittedDirection.length; i++) {
    let currentWord = splittedDirection[i]
    let firstChar = currentWord.charAt(0);
    let firstCharUppercased = firstChar.toUpperCase();
    let newWord = currentWord.replace(firstChar, firstCharUppercased) + " ";
    console.log(newWord)
    finalDirection = finalDirection + newWord
    console.log(finalDirection)
}

//Pedir al usuario que escriba una frase completa.Pedir al usuario que escriba un caracter
//Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase
/*
var frase = prompt("Por favor escriba una frase")
var caracter = prompt("Por favor, escriba un caracter")
frase = charAt(e)
*/
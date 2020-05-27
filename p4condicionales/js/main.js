//Declarar una variable que contenga un número cualquiera y determinar mediante un mensaje si ese número es par o impar//

var someNumber = 56
var someOtherNumber = 33
if (someNumber / 2 == 0 || 2 || 4 || 6 || 8)
    console.log("El número es par")
else(someOtherNumber / 2 == 1 || 3 || 5 || 7 || 9)
console.log("El número es impar")

//Determinar dos variables (base,altura) e indicar si con ellas se forma un cuadrado o un rectángulo//

var base = 10
var altura = 20
if (base == altura)
    console.log("Se forma un cuadrado")
else(base !== altura)
console.log("Es un rectángulo")

//Determinar una variable (numeroDeLados) e indicar el nombre  de la figura geométrica que tiene esa cantidad de lados,si número de lados es mayor que 5, poner un mensaje que diga "tu figura tiene muchos lados"

var numeroDeLados = 10
if (numeroDeLados === 4)
    console.log("La figura es un cuadrado")
else(numeroDeLados > 5)
console.log("La figura tiene muchos lados")
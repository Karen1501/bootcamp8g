/*
Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO" 
    */
/*
var originalString = ("La mejor forma de predecir el futuro es creándolo").split(" ").length
console.log(originalString)
if ( index % 2 === 0 ){
    return itenm.toUpperCase ()
}else {
    return item.toLowerCase ()
}
*/
var originalPhrase = "La mejor forma de predecir el futuro es creándolo";
var arrayPhrase = originalPhrase.split(" ")
var arrayLength = arrayPhrase.length
var newArray = []
console.log(arrayPhrase)
var words = arrayPhrase.map(function(word, index) {
    let moduleIndex = index % 2
    if (moduleIndex === 0) {
        console.log(moduleIndex, word)
        let wordUpperCase = word.toUpperCase()
        console.log(wordUpperCase)
        newArray.push(wordUpperCase)
    } else {
        console.log(moduleIndex, word)
        let wordLowerCase = word.toLowerCase()
        console.log(wordLowerCase)
        newArray.push(wordLowerCase)
    }
})
console.log(newArray)
let newPhrase = newArray.join(" ")
console.log(newPhrase)

words = arrayPhrase.filter((word) => {
    return word.length >= 5
})
console.log(words.join(" "))


const finalExercise = arrayPhrase.reduce((sumaLetraTotal, word, indexWord) => {
    return sumaLetraTotal + word.length
}, 0)
const avarageLetter = (totalLetter, totalWords) => {
    let avarage = totalLetter / totalWords
    console.log("la frase en promedio" + " " + avarage)
}
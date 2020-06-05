/*
    crear una función que pida al usuario los siguientes datos:
    nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
    esa función debe devolver un objeto con la siguiente estructura: 
    {
        nombre:
        apellidos:
        direccion:{
            calle:
            numero:
            colonia:
            cp:
            alcaldia:
        }
    }
    
*/
const createUserObject = () => {

    var userInfo = {}

    var name = prompt("Ingresa tu nombre")
    var lastName = prompt("Ingresa tus apellidos")
    var adress = {}
    var street = prompt("Ingresa el nombre de la calle")
    var number = parseInt(prompt("Ingresa el número"))
    var colony = prompt("Ingresa la colonia ")
    var cp = parseInt(prompt("Ingresa tu código postal"))
    var townHall = prompt("Ingresa la alcadía")


    userInfo.name = name,
        userInfo.lastName = lastName,
        userInfo.adress = {}
    userInfo.adress.street = street,
        userInfo.adress.number = number,
        userInfo.adress.colony = colony,
        userInfo.adress.cp = cp,
        userInfo.adress.townHall = townHall
    return userInfo
}


/* crear una función que pida al usuario un año (2000, 1989, etc).
la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
por cada auto extraído, mostrar al usuario un mensaje que diga 
"Opción ${indice}: ${fabricante del auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"*/



/*


cars = [{
        year: "2000",
        maker: "Toyota",
        model: "Corolla",
        hp: "300"
    },
    {
        year: "1967",
        maker: "Ford",
        model: "Mustang",
        hp: "500"
    },
    {
        year: "2000",
        maker: "Nissan",
        model: "Sentra",
        hp: "128"
    },
    {
        year: "2012",
        maker: "Mitubishi",
        model: "Lancer",
        hp: "300"
    },
    {
        year: "2000",
        maker: "Nissan",
        model: "Altima",
        hp: "200"
    },
    {
        year: "1990",
        maker: "Volkswagen",
        model: "Sedan",
        hp: "80"
    },
    {
        year: "2015",
        maker: "Nissan",
        model: "Tiida",
        hp: "200"
    }
]
const showCars = () => {
    let userRequire = parseInt(prompt("Escribe un año"))
    let filterCars = cars.filter((car, index) => {
        return parseInt(car.year) >= userRequire

    })
    filterCars.forEach(element => {
        console.log(element)
    })
} */

var carsData = [
    [
        "2010",
        "Toyota",
        "Supra",
        "300"
    ],
    [
        "2015",
        "Mazda",
        "RX7",
        "350"
    ],
    [
        "2015",
        "Nissan",
        "Skyline",
        "300"
    ]
]
var collection = carsData.map(car => )
let objectCar = car.map((car) => {
    let [year, maker, model, hp] = car
    return { year, maker, model, hp }

})
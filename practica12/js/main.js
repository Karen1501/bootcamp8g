/*
var mentors = [{
    name: "David",
    age: 23,
    skills: [{
        javascript: 10,
        css: 8.5,
        jquery: 9,
        node: 9
    }]
}, {
    name: "Charles",
    age: 24,
    skills: [{
        javascript: 10,
        css: 8,
        jquery: 9,
        node: 10
    }]
}, {
    name: "Michael",
    age: 22,
    skills: [{
        javascript: 10,
        css: 8.5,
        jquery: 10,
        node: 8.5
    }]
}, {
    name: "Israel",
    age: 30,
    skills: [{
        javascript: 9.5,
        css: 10,
        jquery: 9,
        node: 8
    }]
}]

function Mentor({ name, age, skills }) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.showAverage = function() {
        let { javascript, css, jquery, node } = this.skills[0];
        let average = (javascript + css + jquery + node) / 4;
        return average;
    }
    this.showAverage2 = function() {
        let skillsObject = this.skills[0];
        let total = 0;
        for (property in skillsObject) {
            total += skillsObject[property]
        }
        return total / (Object.keys(skillsObject).length)
    }
    this.showAverage3 = function() {
        let skillsObject = this.skills[0];
        let propertiesArray = Object.keys(skillsObject);
        let total = propertiesArray.reduce((accum, current) => {
            return accum + skillsObject[current]
        }, 0)
        return total / propertiesArray.length
    }
}
var mentorsCollection = mentors.map((mentor, index) => {
    return new Mentor(mentor)
})
mentorsCollection.forEach(mentor => {
    console.log(`Mi nombre es ${mentor.name} y mi promedio es ${mentor.showAverage()}`)
})
console.log(mentorsCollection)
*/
/*
var mentor1 = new Mentor("Israel", 30, [
    {
        javascript:9.5,
        css:10,
        jquery:9,
        node:8
    }
])*/
/*
crear una funcion constructura para la clase Mentor, que reciba nombre, edad, y notas del mentor;
crear un objeto de la clase Mentor por cada entrada del array "mentors";
a cada mentor agregarle un método que me permita saber el promedio de sus skills;
mentor.skillsAverage() => 8.5 */

var songsArray = [{
    name: "Thunderstruck",
    interpreter: "AC / DC",
    gender: "Rock"
}, {
    name: "Fear of the dark",
    interpreter: "Iron Maiden",
    gender: "Metal"
}, {
    name: "Whole lotta Rossie",
    interpreter: "AC / DC",
    gender: "Rock"
}, {
    name: "Electric Eye",
    interpreter: "Judas Priest",
    gender: "Metal"
}, {
    name: "The show must go on",
    interpreter: "Queen",
    gender: "Rock"
}, {
    name: "Sappy",
    interpreter: "Nirvana",
    gender: "Grounge"
}, {
    name: "Smeels like teen spirit",
    interpreter: "Nirvana",
    gender: "Grounge"
}, {
    name: "The memory remains",
    interpreter: "Metallica",
    gender: "Trash"
}, {
    name: "Stairway to heaven",
    interpreter: "Led Zeppelin",
    gender: "Rock"
}, {
    name: "Leave that thing alone",
    interpreter: "Rush",
    gender: "Progressive Rock"
}, {
    name: "Confortably numb",
    interpreter: "Pink Floyd",
    gender: "Progressive Rock"
}]

var newArray = songsArray.reduce((accum, song) => {
    let songGender = song.gender;
    console.log(songGender);
    !accum[songGender] ? (accum[songGender] = [], accum[songGender].push(song)) : accum[songGender].push(song);
    console.log(accum)
    return accum

}, [])
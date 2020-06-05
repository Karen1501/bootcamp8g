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

function Mentor(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    console.log(this.skills)
}


const mentorObject = mentors.map((mentors) => {
        let { name, age, skills } = mentors
        return new Mentor(name, age, skills)
    })
    //me falta esto
const averageSkills = mentorObject.reduce((sumaSkills, nodes, index) => {
    console.log(sumaSkills)
})
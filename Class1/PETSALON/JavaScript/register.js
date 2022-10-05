//object literal {}
let petSalon = {
    //attributes
    name:"The Fashion Pet",
    phone: "666-666-666",
    address:{
        country:"Mex",
        city:"Tijuana",
        street:"Universidad",
        number:"263-k",
        zip:"22253"
    },
}

let students =[
    {
        name:"Myles",
        age:98,
        grade:"A"
    }, 
    {
        name:"Tuong",
        age:99,
        grade:"A-"
    },
    {
        name:"Miguel",
        age:97,
        grade:"F"
    }
];//this is an array of students

//FOR LOOP: star point; stopping condition ; increment
//length return the number of elements in the array
for (let i = 0; i < students.length; i++) {
    console.log(students[i].age);
}
console.log("We have " + students.length + " students");
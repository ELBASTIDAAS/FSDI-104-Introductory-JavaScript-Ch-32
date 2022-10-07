//object literal {}
let petSalon = {
    //attributes
    name: "The Fashion Pet",
    phone: "666-666-666",
    address: {
        country: "Mex",
        city: "Tijuana",
        street: "Universidad",
        number: "263-k",
        zip: "22253"
    },
    pets: []
}

//<------- this are the arguments ---->
function Pet(name, age, gender, breed, service, owner, phone) {
    //the real attributes are the next
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
}

// create a new pet
let scooby = new Pet("Scooby", 59, "Male", "Dane", "Grooming", "Shaggy", "777-777-777");
let molly = new Pet("Molly", 45, "Female", "Dane", "Consult", "French", "666-555-777");
let chimo = new Pet("Chimo", 59, "Male", "Dane", "Vaccine", "Husky", "777-777-777");
// push the pet into the array
petSalon.pets.push(scooby);
petSalon.pets.push(molly);
petSalon.pets.push(chimo);
//register function
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
function register() {
    console.log(inputName.value);
    let thePet = new Pet(inputName, inputAge.value, inputGender.value);
    petSalon.pets.push(thePet);

}
function showRegister() {
    for (let i = 0; i < petSalon.pets.length; i++) {
        console.log(petSalon.pets[i].name)
    }
    alert(`we currently have ${petSalon.pets.length} registered.`)
}

function consoleshow() {
    for (let i = 0; i < petSalon.pets.length; i++) {
        console.log(petSalon.pets[i]);
    }
}

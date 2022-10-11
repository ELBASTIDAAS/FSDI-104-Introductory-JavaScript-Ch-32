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

//<-------  CONSTUCTOR ---->
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

//getting the vales from the inputs 
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let selectService = document.getElementById("selService");



//register function
function register() {
    //create the obj
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, selectService.value);
    //push the pet into the arrays
    petSalon.pets.push(thePet);
    //display the array
    displayPetCards();
    clearInputs();
    displayNumberOfPets();
}
//clear funcion 
function clearInputs() {
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    selectService.value = "";
}

function displayNumberOfPets() {
    document.getElementById("numberOfPets").innerHTML = `we have ${petSalon.pets.length} pets in the system.`;
}



function init() {
    //create a new pet 
    let scooby = new Pet("Scooby", 59, "Male", "Dane", "Grooming", "Shaggy", "777-777-777");
    let scrappy = new Pet("Scrappy", 49, "Male", "mixted", "vaccine", "Shaggy", "777-777-777");
    //push the pet into the array
    petSalon.pets.push(scooby, scrappy);
    displayNumberOfPets();
    displayPetCards();
}

window.onload = init;
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
let count = 0;
//<-------  CONSTUCTOR ---->
function Pet(name, age, gender, breed, service, owner, phone) {
    //the real attributes are the next
    this.id = count++;
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
let inputOwnerName = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function isValid(newPet) {
    let valid = true;
    if (newPet.service == "") {
        valid = false;
    }
    return valid;
}


//register function
function register() {
    //create the obj
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, selectService.value);
    //push the pet into the arrays

    if (isValid(thePet) == true) {
        petSalon.pets.push(thePet);
        //display the array
        displayPetCards();
        clearInputs();
        displayNumberOfPets();
        displayPetTable();
    } else {
        alert("Enter a service")
    }
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

function deletePet(petID) {
    let deleteIndex;
    for (let i = 0; i < petSalon.pets.length; i++) {
        const aPet = petSalon.pets[i];
        if (aPet.id == petID) {
            deleteIndex = i;
            console.log("The deleted pet is the position " + deleteIndex);
        }
    }
    petSalon.pets.splice(deleteIndex, 1);
    document.getElementById(petID).remove();
    displayNumberOfPets();
}

function init() {
    //create a new pet 
    let scooby = new Pet("Scooby", 59, "Male", "Dane", "Grooming", "Shaggy", "777-777-777");
    let scrappy = new Pet("Scrappy", 49, "Male", "mixted", "vaccine", "Miguel", "666-666-666");
    //push the pet into the array
    petSalon.pets.push(scooby, scrappy);
    displayNumberOfPets();
    displayPetCards();
    displayPetTable();
}

window.onload = init;
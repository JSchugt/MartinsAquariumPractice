export const fishCollection = [
    {
        saltwater: true,
        harvestLocation: "Pacific Ocean",
        diet: "algae",
        name: "Malcolm",
        species: "Blue Tang",
        inches: 13,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Bali",
        diet: "really small fish",
        name: "Bob",
        species: "Guppy",
        inches: 3,
        image: "pinkfish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "squid",
        name: "BigBoss",
        species: "Amber Jack",
        inches: 60,
        image: "greyfish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Pacific Ocean",
        diet: "shellfish",
        name: "Jerry",
        species: "swordfish",
        inches: 80,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Gulf of Mexico",
        diet: "tiny fish",
        name: "Predator",
        species: "catfish",
        inches: 20,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "Herring",
        name: "Sabre",
        species: "Swordfish",
        inches: 117.6,
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Amazon Basin",
        diet: "brine shrimp",
        name: "Myrti",
        image: "pinkfish.jpg",
        inches: 12,
        species: "angel fish"
    },
    {
        saltwater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "Plankton",
        fishName: "Nemo",
        species: "Clownfish",
        inches: 4,
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Mississippi River",
        diet: "Everything",
        name: "Vacuum",
        species: "Catfish",
        inches: 24,
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Bobbies Fish Emporium",
        diet: "minnows",
        name: "Ralph",
        species: "Smallmouth Bass",
        inches: 14,
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Cumberland River",
        diet: "anything",
        name: "Whiskers",
        species: "Ictalurus furcatus",
        inches: 39,
        image: "blueCatfish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "South Pacific",
        diet: "shrimp",
        inches: 64,
        species: "Tuna",
        name: "Bruno",
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Petsmart",
        diet: "algae",
        name: "Dorothy",
        species: "goldfish",
        inches: 3,
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Lake Tahoe",
        diet: "insects",
        name: "Trent",
        species: "Rainbow Trout",
        inches: 21,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Carribean Sea",
        diet: "shrimp",
        name: "Stephen",
        species: "Angler",
        inches: 23,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Barbados",
        diet: "anchoves",
        name: "Pizza",
        species: "Tuna",
        inches: 40,
        image: "tuna.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "TN River",
        diet: "Bacon",
        name: "Finn",
        species: "Bass",
        inches: 20,
        image: "bluefish.jpg",
    },
    {
        saltwater: true,
        diet: "mollusks",
        name: "Simba",
        species: "lionfish",
        harvestLocation: "Red Sea",
        inches: 10,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "New Zealand",
        diet: "Lost Sailors",
        name: "Tiki",
        species: "Parrot Fish",
        inches: 36,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Red Sea",
        diet: "algae",
        name: "Bobo",
        species: "Clown Fish",
        inches: 5,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Atlantic Sea",
        name: "flipper",
        inches: 12,
        image: "orangefish.jpg",
        diet: "worms",
        species: "garibaldi"
    },
    {
        saltwater: true,
        harvestLocation: "Bikini Bottom",
        diet: "Big Ole Fish",
        name: "Pearl",
        species: "Whale",
        inches: 1000,
        image: "bluefish.jpg"
    },
    {

        saltwater: false,
        harvestLocation: "Port Innsmouth",
        diet: "Primeval Shadows",
        name: "Cthulhu",
        species: "Old One",
        inches: 999,
        image: "pinkfish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Amazon River",
        diet: "smaller fish",
        name: "Bitey",
        species: "Pirhana",
        inches: 7.5,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "St.Croix",
        diet: "squid",
        name: "Crush",
        species: "blue ting",
        inches: 7,
        image: "bluefish.jpg"
    },
    {
        saltwater: false,
        harvestLocation: "Minnesota",
        diet: "Cherry Tomatoes",
        name: "Frank",
        species: "Piranha",
        inches: 7,
        image: "bluefish.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Atlantic, Pacific, and southern sea",
        diet: "smaller fish",
        name: "bluefin tuna",
        species: "Thunnus thynnus",
        inches: 84,
        image: "bluefin.jpg"
    },
    {
        saltwater: true,
        harvestLocation: "Baltic Sea",
        diet: "smaller fish",
        name: "Fil",
        species: "goldFish",
        inches: 40,
        image: "bluefish.jpg"
    }
];


export const getFish = () => {
    return fishCollection;
}




export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishCollection) {
        if(fish.inches % 3 === 0){
            holyFishArray.push(fish);
        }

    }

    return holyFishArray;
}

export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray =  [];
    for (const fish of fishCollection){
        if(fish.inches % 5 === 0 && fish.inches % 3 !== 0 ){
            soldiersArray.push(fish);
        }
    }
    return soldiersArray;
}

export const getUnworthy = () => {
    const unworthyArray = [];
    for ( const fish of fishCollection){
        if(!(fish.inches % 5 === 0 || fish.inches % 3 === 0)){
            unworthyArray.push(fish);
        }
    }
    return unworthyArray;
}
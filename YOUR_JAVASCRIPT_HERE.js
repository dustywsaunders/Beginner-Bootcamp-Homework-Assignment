// Write your JS here

// HERO OBJECT
// Declare a variable `hero` and assign it an object
// Hero object should have a name property that is a string
// Hero object should have a heroic property that is a boolean
// Hero object should have an inventory property that is an empty array
// Hero object should have an health property that is 10
// Hero object should have a weapon is an object with a type which is a string and damage which is 2

const hero = {
    name: 'Parzival',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'zanbato',
        damage: 2,
    }
};

// 

// GAME LOGIC FUNCTIONS
// Functions `rest, pickUpItem and equipWeapon` are all defined

function rest(object) {
    object.health = 10;
    return object;
};

// rest(hero);

function pickUpItem() {

};

function equipWeapon() {

};

// RESTING
// rest function takes an object as an argument
// AND (re)assigns the health property of the object the value 10
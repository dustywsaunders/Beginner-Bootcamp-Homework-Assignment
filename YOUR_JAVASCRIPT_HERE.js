// Write your JS here

// HERO OBJECT
// Declare a variable `hero` and assign it an object
// Hero object should have a name property that is a string
// Hero object should have a heroic property that is a boolean
// Hero object should have an inventory property that is an empty array
// Hero object should have an health property that is 10
// Hero object should have a weapon is an object with a type which is a string and damage which is 2

const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2,
    }
};


// WEAPON OBJECT

const weapon = {
    type: 'dagger',
    damage: 2,
};

// console.log(hero);
// console.log(weapon);

// GAME LOGIC FUNCTIONS
// Functions `rest, pickUpItem and equipWeapon` are all defined

// RESTING
// rest function takes an object as an argument
// AND (re)assigns the health property of the object the value 10
// UI for rest
    // There is a IMG element with the id `inn`
    // When clicked will reset the `health` property on the hero global variable to 10

function rest(tiredObject) {
    tiredObject.health = 10;
    return tiredObject;
};

// rest(hero);

// PICKING UP ITEMS
// pickUpItem function takes a hero-like object as the first argument and an object as the second argument
// Adds the weapon object as the last element of the inventory array of the hero-like object
// UI for loot
    // There is a IMG element with the id `dagger`
    // When the dagger is clicked it will add a weapon-like object to the inventory array with `type`: `dagger` and `damage`: 2

function pickUpItem(heroObject, lootObject) {
    heroObject.inventory.push(lootObject);
};

// pickUpItem(hero, weapon);

// EEQUIP WEAPON
// equipWeapon function takes a hero-like object as an argument
// and reassigns the `weapon` property to the first element of the inventory array
// UI for equipWeapon
    // There is a IMG element with the id `bag`
    // When the bag is clicked it will equip the hero with the first item in the inventory array

function equipWeapon(heroObject) {
    
    if (heroObject.inventory.length > 0) {
        heroObject.weapon = heroObject.inventory[0];
    };
};

// equipWeapon(hero);

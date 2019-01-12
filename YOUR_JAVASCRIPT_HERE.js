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

function rest(hero) {
    hero.health = 10;
    // displayStats(hero);
    return hero;
};

// rest(hero);

// PICKING UP ITEMS
// pickUpItem function takes a hero-like object as the first argument and an object as the second argument
// Adds the weapon object as the last element of the inventory array of the hero-like object
// UI for loot
    // There is a IMG element with the id `dagger`
    // When the dagger is clicked it will add a weapon-like object to the inventory array with `type`: `dagger` and `damage`: 2

function pickUpItem(hero, lootObject) {
    hero.inventory.push(lootObject);
};

// pickUpItem(hero, weapon);

// EEQUIP WEAPON
// equipWeapon function takes a hero-like object as an argument
// and reassigns the `weapon` property to the first element of the inventory array
// UI for equipWeapon
    // There is a IMG element with the id `bag`
    // When the bag is clicked it will equip the hero with the first item in the inventory array

function equipWeapon(hero) {
    
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0];
    };
};

// SHOW EQUIPMENT
function showInv(newImage) {

    let image = document.getElementById('dagger');

    if (hero.inventory.length > 0) {
        image.src = newImage;
    }
}

// equipWeapon(hero);

// ATTACK ENEMY
function attackEnemy(newImage) {

    let image = document.getElementById('enemy');

    if (hero.weapon === hero.inventory[0]) {
        image.src = newImage;
    }
}

// DISPLAY STATS FUNCTION
// function to write stats to page
// repost updated stats whenever something has changed

function displayStats (hero) {
    let name = hero.name;
    const health = hero.health;
    const weaponType = hero.weapon.type;
    const damage = hero.weapon.damage;
    const newName = document.getElementById("playerName").value;

    if (hero.inventory.length < 1) {
        document.getElementById("currentInv").innerText = "your satchel is empty"
    } else {
        document.getElementById("currentInv").innerText = "dagger added to satchel";
    }
    
    if (newName) {
        name = newName
    };

    if (!name) {
    document.getElementById("currentName").innerText = `please register your character`;
    document.getElementById("currentHealth").innerText = `${health} hp`;
    document.getElementById("currentWeaponType").innerText = weaponType;
    document.getElementById("currentDamage").innerText = damage;
    } else {;
    document.getElementById("currentName").innerText = `${name}, the Amazing!`;
    document.getElementById("currentHealth").innerText = `${health} hp`;
    document.getElementById("currentWeaponType").innerText = weaponType;
    document.getElementById("currentDamage").innerText = damage;
    }
};

// displayStats(hero);
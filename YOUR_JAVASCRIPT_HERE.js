
// HERO OBJECT

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

// RESTING

function rest(hero) {
    hero.health = 10;
    return hero;
};

// PICKING UP ITEMS

function pickUpItem(hero, lootObject) {
    hero.inventory.push(lootObject);
};

// EQUIP WEAPON

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

// ATTACK ENEMY

function attackEnemy(newImage) {

    let image = document.getElementById('enemy');

    if (hero.weapon === hero.inventory[0]) {
        image.src = newImage;
    }
}

// DISPLAY STATS FUNCTION

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
    document.getElementById("currentName").innerText = `please enter your name`;
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
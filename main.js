//Task #0

const scorpion = {
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['katana'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
}


const kitana = {
    name: 'kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['katana'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
}

const liukang = {
    name: 'liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['katana'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
}

const sonya = {
    name: 'sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['katana'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
}

const subzero = {
    name: 'subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['katana'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
}

//Task #1

const arenas = document.createElement('div');
arenas.classList.add('arenas');
document.body.prepend(arenas);

function createPlayer(classNamePlayer, nameChar, hp, imgChar) {

    const player = document.createElement('div');
    player.classList.add(classNamePlayer);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = `${hp}%`;

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = nameChar;

    const img = document.createElement('img');
    img.src = imgChar;

    arenas.append(player);

    player.append(progressbar);
    player.append(character);

    progressbar.append(life);
    progressbar.append(name);

    character.append(img);
}

createPlayer('player1', scorpion.name, 50, scorpion.img);
createPlayer('player1', subzero.name, 50, subzero.img);

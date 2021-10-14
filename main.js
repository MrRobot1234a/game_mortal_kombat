const scorpion = {
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['katana'],
    attack: function () {
        console.log(`${this.name} Fight...`);
    }
}

scorpion.attack();
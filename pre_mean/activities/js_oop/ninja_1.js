function Ninja (name) {

    this.name = name;
    var speed = 3;
    var strength = 3;
    this.health = 100;

    this.showStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
    }

    this.drinkSake = () => {
        this.health += 10;
    }
};

Ninja.prototype.sayName = function() {
    console.log("My ninja name is " + this.name);
    return this;
};

var ninja1 = new Ninja ("Rachel");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

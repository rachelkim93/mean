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

    this.punch = otherNinja => {
        if (otherNinja instanceof Object){
            otherNinja.health -= 5;
            console.log(`${otherNinja.name} was punched by ${this.name} and lost 5 health.`)
        } else {
            console.log("Not a ninja.")
        }
    }

    this.kick = otherNinja => {
        if (otherNinja instanceof Object) {
            var kickValue = strength*15;
            otherNinja.health -= kickValue;
            console.log(`${otherNinja.name} was kicked by ${this.name} and lost ${kickValue} health.`)
        } else {
            console.log("Not a ninja.")
        }
    }
    return this
};

Ninja.prototype.sayName = function() {
    console.log("My ninja name is " + this.name);
    return this;
};

var ninja1 = new Ninja ("Rachel");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();


var blueNinja = new Ninja('Goemon');
var redNinja = new Ninja('Bill Gates');

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
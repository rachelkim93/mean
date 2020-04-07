var tigger = {
    character: "Tigger",
    north: pooh,
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};


var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("I like honey.")
    },
    south: tigger,
    east: bees
};

tigger.north = pooh;
pooh.south = tigger;

var piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("I'm a pig.")
    },
    east: pooh
};      

piglet.east = tigger.north;         
tigger.north.west = piglet;

var bees = {
    character: "Bees",
    greet: function(){
        console.log("I make honey.")
    },
    west: pooh
};

bees.west = tigger.north;
tigger.north.east = bees;

var christopherRobin = {
    character: "Christopher Robin",
    greet: function(){
        console.log("I play with dolls.")
    }
};

var kanga = {
    character: "Kanga",
    greet: function(){
        console.log("I am a kangaroo.")
    }
};

var owl = {
    character:"Owl",
    greet: function(){
        console.log("I am wiiiiize.")
    }
};

var rabbit = {
    character: "Rabbit",
    greet: function(){
        console.log("I hippity hop.")
    }
};

christopherRobin.south = tigger.north;
christopherRobin.south = pooh;
christopherRobin.east = rabbit;
pooh.north = christopherRobin;
christopherRobin.north = kanga;
piglet.north = owl;
christopherRobin.west = piglet.north;
bees.north = rabbit;
christopherRobin.west = bees.north;

var gopher = {
    character: "Gopher",
    greet: function(){
        console.log("Groundhog day!")
    }

};

gopher.west = rabbit;
rabbit.east = bees.north.east;
rabbit.east = gopher;

var eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("I'm not sad, life just sucks.")
    }
};

var heffalumps = {
    character: "Heffalumps",
    greet: function(){
        console.log("What is a heffalump?")
    }
};

eeyore.south = christopherRobin.north;
kanga.north = eeyore;
eeyore.east = heffalumps;
heffalumps.west = kanga.north;


var player = {
    location : tigger,
    honey: false,
}

function pickUp(){
    if (player.location = bees){
        honey = true;
        console.log("You've gathered some honey!")
    }
    else {
        console.log("There is no honey here.")
    }
}

function mission(){
    var values = ['tigger', 'pooh', 'christopherRobin', 'piglet', 'owl', 'rabbit', 'gopher', 'kanga', 'eeyore', 'heffalumps', 'bees']
    var random = Math.floor(Math.random()*values.length)
    console.log(values[random])
    return (values[random])
    
}
var random = mission;
// console.log(`${random}` + " is looking for honey! Can you help?")

function drop(){
    if (player.honey = false || player.location != mission){
        console.log("You have no honey or you're at the wrong location.")
    } else {
        console.log("You've won!")
    }
}

function move(str){
    if (str == "north"){
        player.location = player.location.north;
        player.location.greet();
        return "You are now at " + player.location.character + "'s" + " house";
    } else if (str == "south"){
        player.location = player.location.south;
        player.location.greet();
        return "You are now at " + player.location.character + "'s" + " house";
    } else if (str == "east"){
        player.location = player.location.east;
        player.location.greet();
        return "You are now at " + player.location.character + "'s" + " house";
    } else if (str == "west"){
        player.location = player.location.west;
        player.location.greet();
        return "You are now at " + player.location.character + "'s" + " house";
    } else {
        return "You have fallen off the map and died."; 
    }
}

console.log(move("west"));


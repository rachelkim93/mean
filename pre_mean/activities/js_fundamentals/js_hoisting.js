//1
console.log(hello);                                   
var hello = 'world';   

var hello;
console.log(hello);
hello = "world";

//2

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

function test(){
	var needle = 'magnet';
	console.log(needle);
}
var needle 
needle = 'haystack';
test();


//3

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);


function print(){
	brendan = 'only okay';
	console.log(brendan);
}
var brendan 
brendan = 'super cool';
console.log(brendan);

//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
var food 
food = 'chicken';
console.log(food);
eat();

//5

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

var mean;
mean();
console.log(food);
mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
var genre;
console.log(genre);
genre = 'disco';
rewind();
console.log(genre);

//7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';
setTimeout( function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
);
console.log("Printing ninja value.");
console.log(ninja, "NOW");

function doSomething(possibleCallback) {
    if (typeof(possibleCallback) === 'function'){
      console.log('possibleCallback is a callback!');
      possibleCallback(); //we can invoke the callback!
    }
    else {
      console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
    }
  }
  doSomething(function myCallback(){ console.log('yes, I am a callback!') });
  doSomething('string');

  function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    console.log("Pasta is done!");
    return pasta + " Pasta! Voila!";
  }
  makePasta("Penne");
  makePasta("Farfalle");
  
  function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    // create a variable for sauce!
    var sauce = makeSauce();          // invoke makeSauce, our callback
    console.log("Mixing sauce");
    console.log("Pasta is done!");
    return pasta + " Pasta with " + sauce + " sauce! Voila!";
  }
  function makePesto() {
    console.log("Making Pesto");
    return "pesto";
  }
  function makeAlfredo() {
    console.log("Making Alfredo");
    return "alfredo";
  }
  // we pass the whole makePesto recipe to makePasta!
  console.log(makePasta("Penne", makePesto));
  // notice lack of parentheses after makePesto.
  // Remember: we want to pass the function, not execute it and pass a return value.
  console.log(makePasta("Farfalle", makeAlfredo));
  
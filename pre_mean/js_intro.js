$(document).ready(function() {
    var favoritepokemon; //This happens first
    $.get("https://pokeapi.co/api/v2/pokemon/1", function(data){ //Request is made 
        console.log(data);
        favoritepokemon = data.name; //Fourth thing that happens
    })
    console.log("My favorite: ", favoritepokemon); // Third thing that happens; if 7 is after 5, it would work
})

//Output: undefined

var first = "vanilla latte";
var second = "cookie";
console.log(swap([first, second]));
function swap(items){
    first = items[1]; //accesses the global variable first
    var second = items[0];//this variable second is trapped inside the function
    return [first, second];//second remains the same
}
console.log(first, second);

//Output: ['cookie', 'vanilla latte']; cookie, cookie

//var, let and const declarations
//var is function scoped

// if(true){
//     let x = "Hello"
// }
// console.log(x)
//x is not defined
//let is block scoped

//const is block scoped and cannot be changed after it is declared

//Arrow function is a way of defining anonymous functions
// var anonymous = function_______(){
//     console.log("idk");
// }

// var anonymous = (r)=>{
//     console.log("idk")
//     console.log(r)
// }

$(document).ready(function(){
    $('img').click(function() {
        console.log("fetching")
        $.get("https://pokeapi.co/api/v2/pokemon/17", function(data){
            favoritepokemon = data.name;
            $('p').html(favoritepokemon); //dom manipulation - ptag change contents
        })
    })
})

//What are class and object constructors used for?
// Creating new instances of objects with the same structure
// Object constructors are functions
// Classes in JS are just syntactic sugar around constructor functions

//What is 'this' refering to in a class?
// 'this' refers to the instance of the class being created

//ES6
class Car {
    constructor(model){
        this.model=model;
        this.damage=0;
    }

    bump(victim){
        if (victim instanceof Car){
            this.damage += 5;
            victim.damage += 5
        }
    }
}

var car1 = new Car("honda")
var car2 = new Car("acura")

car1.bump(car2)
console.log(car1.damage)

//ES5
function Car(model){
    this.model = Model;
    this.damage = 0;

    this.bump = function(victim){
        if (victim instanceof Car){
            theModel.damage += 5;
            victim.damage +=5;
        }
    }
}

var anotherCar = new Car("Honda")
var fooCar = new Car("Toyota")
foorCar.bump(anotherCar);
console.log(fooCar.damage)

//Predict the output



//What is a server? List the jobs a server must do.
// A computer designed to serve files that processes requests and sends responses, opens and reads files on it, pulls info from other sources(like db)

//What is node and what are some benefits? Disadvantages?
// Node.js is a powerful and flexible JavaScript interpreter(translates JS to machine code) that doesn't live on the browser but in the computer, capable of http request->response "out of hte box"
// Benefits: MODULAR(can swap stacks/parts easily therefore customizable), supports lots of connections because of event loops. "out of othe box" functionality
// Drawbacks
// Heavy computation is a killer in a Node server, primarily due to poor memory management. In addition, if logic is required before entering the event loop, Node’s performance will decline dramatically. Similarly, Node is often used with noSQL databases such as MongoDB, which we’ll be using in this course. Mongo also uses a V8 engine core, but it doesn’t have the same event-loop (it’s just a worker), so large numbers of inefficient queries can back up that worker. This could take up enough memory that it prevents the event-loop from resolving events, making Node much less awesome.
// Node also has a very 'batteries-not-included' unopinionated style, favoring configuration over convention. Out of the box, we won't be able to do all the amazing things a full featured framework like Ruby on Rails can do. We'll need to bring in middleware and do our own configuration to really get the most out of Node!
// Structure is not strictly defined - benefit and disadvantage

//What is NPM and what is it's purpose?
// Npm is a package manager and the default tool that comes with Node.js to manage your project dependencies.
// That means that npm is just a tool to fetch and prepare other chunks of code. In the MEAN stack, we call those chunks "modules".


//What is Express?
// Node backend framework, similar to Flask
// Flask: 
// @app.route('/')
// def index():
//     return render_template('index.html')

// Express:
// app.get('/', function(req, res){
//     res.render("index")
// })


//What are the benefits of using Express?
// Efficient


//What is the purpose of package.json?
// Is necessary for npm to intall modules in correct directory which creates node_modules in same directory as package.json


//When should we use session?
// Very rarely because lot of work for server(node)


// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));


// What is MVC? Use diagrams to explain how MVC frameworks are structured and how the data moves through them. Include which jobs each piece has to do.
// Modularization. Model-communicates with the database using an ORM. View- holds what the user sees (frontend)
// Controller-directs traffic, receives data from the model, passes logic to the view

// How would the following code be divided in an MVC framework? Which parts would be considered the M? V? C?

mongoose.connect('mongodb://localhost/quoting_dojo');
const quoteSchema = new mongoose.Schema({ //model
    name: String;
    quote: String;
})

const Quote = mongoose.model('quotes', quoteSchema);
app.get('/quotes', function(req, res){ //controller
    Quote.find({}, function(err, quotes){
        if (err) {console.log(err)}
        res.render('quotes', {quotes: quotes})//view    
    })
    console.log('Finding quotes')
})

//187-193 routes.js
//188-193 quotes.js



//Draw a basic diagram of the http request and response cycle and indicate where Angular would be located
//in the cycle. Also, what is Angular's main responsibility?
//server sends back data in json, not html. Angular, living in browser, parses the data to html.


//The code below is found within <script> tags in an html document and is using jQuery. Explain what it does.
//This is not a trick question, assume everything loads correctly.
$('button').click(function(){
    $.get('https://pokeapi.co/api/v2/pokemon/1/', function(data){
        console.log(data)
    }, 'json')
})

//From question 2, when the user clicks a button, would there be any change in the browser url?
//No because jQuery is making the request, not the browser

//From question 2, how would you display a piece of the incoming data to the user (not in the console,
//but as a part of the page being viewed)? Indicate where you would write your code with a start in the above snippet.
//,append in the .get function

//If we add Angular to one of our recent projects, which of the following node modules woudl we no longer need?
//ejs

//Angular
//Typescript is the preferred language.
//Broswer cannot understand ts. We need to use angular cli to create js and html from the ts.
//Our express server sends the angular app as a static file.
//When the client requests '/', express sends index.html with references to js files.


//What is an observable?
//Angular converts http responses to observables. The service receives data from the server as an observable
//It is an object that stores asynchronous code (ajax). They just be subscribed to

//Our class file (app.component.ts) has the following:
num: number = 7
// What are two ways to display the value of num on our template (app.component.html)?
<input type = "text" value = "{{num}}" //one-way binding
<input type = "text" [value]="num"> 
//curly brackets or brackets

//What are *ngIf and *ngFor?
*ngFor is to loop through an Array, which goes directly into the tag you wish to repeat
*ngIf is to hide or show a particular section of code depending on conditions i.e. show a
div when you get an http response

//Write a function in the class file in the space below that logs a message. 
//app.component.ts
sayHello(){
    console.log("Hello")
}

//Complete the code in the template so the function is invoked when the button is clicked.
//app.component.html

<button (click) = "myFunction()">Click me</button>


//What is two-way binding?
//[(ngModel)] -- Updates both ways and creates interactivity because we're not moving the browser toa  different page.

//What does it mean to nest components?
//Break into smaller components, which are self-contained sections of your angular app.
//Root component (app.component) is loaded every time

//Assume that you have a component that you have created by running ng generate component task.
//How would you nest this component within the root component?
//<app=task></app=task>
//Loads task component into root component. Task is just the name, interchangeable

//When nesting components, when would we use @Input()?

//Write the code that you would need in your service to make a post request to your server.
//For example, assume you have a post route to /task that expects a new task in the request body.
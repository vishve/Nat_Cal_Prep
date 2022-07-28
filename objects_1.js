// source: https://youtu.be/XskMWBXNbp0
// Protptyps basics
//DONT run the file - read and follow the comments only 
//to check the individual code part, 
//open browser and paste the funcitons in the developer tools > console. 



// creating an object and related funcitons
// let animal = {
//     name : 'leo',
//     energy : 10 , 
//     chase : function animalchase () { console.log (`${this.name} is grazing`)},
// };
// console.log (animal);
//console.log (animal.chase());


// or else define Object animal as below
// let animal = {};
// animal.name = "leo";
// animal.energy = 10;

// animal.eat = function (amount) {
//     console.log (`${ this.name} is eating`)
//     this.energy += amount
// }

// animal.sleep = function (length) {
//     console.log (`${ this.name} is sleeping`)
//     this.energy += length
// }
// animal.play = function (length) {
//     console.log (`${ this.name} is playing`)
//     this.energy += length
// }


// or else the object can be taken to a function : 
// function Animal (name, energy) {
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
    
//     animal.eat = function (amount) {
//         console.log (`${ this.name} is eating`)
//         this.energy += amount
//     }
    
//     animal.sleep = function (length) {
//         console.log (`${ this.name} is sleeping`)
//         this.energy += length
//     }
//     animal.play = function (length) {
//         console.log (`${ this.name} is playing`)
//         this.energy += length
//     }
    
//     return animal
// }


// const Animal ( 'leo', 7);
// const Animal ( 'snoop', 10);

// Untill here, we were producing objects and passing values, 
// but every time we do so, we were creating the funcitons in the memory,
// eating too much of the runtime. 
// So, we start creating a reference to the object instead of the memory and 
// create the objects once (need modification).

// const animalMethods = {
//     eat (amount) {
//         console.log (`${ this.name} is eating`)
//         this.energy += amount
//     },
    
    
//     sleep (length) {
//         console.log (`${ this.name} is sleeping`)
//         this.energy += length
//     },
//     play (length) {
//         console.log (`${ this.name} is playing`)
//         this.energy += length
// }
// }

// function Animal (name, energy) {
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
//     animal.eat = animalMethods.eat;
//     animal.sleep = animalMethods.sleep;
//     animal.play = animalMethods.play;
    
//     return animal
// }
// Now, every time you create a new method, 
// you have to add the respective reference in the Animal funciton,

// how about creating animalMethods Object, 
//such that they gets referenced automatically ?
// for this, we use Object.create, see below. 


// const animalMethods = {
//     eat (amount) {
//         console.log (`${ this.name} is eating`)
//         this.energy += amount
//     },
//     sleep (length) {
//         console.log (`${ this.name} is sleeping`)
//         this.energy += length
//     },
//     play (length) {
//         console.log (`${ this.name} is playing`)
//         this.energy += length
// }
// }

// function Animal (name, energy) {
//     let animal = Object.create(animalMethods)
//     animal.name = name;
//     animal.energy = energy;
    
//     return animal
// }
// const leo = Animal( 'Leo', 7)
// leo.play() // this will reference back the parent object animalMethods as mentioned during the animal declaration this will be imvoked
// const snoop = Animal( 'Snoop', 10)
// snoop.play() // this will reference back the parent object animalMethods as mentioned during the animal declaration

//Now let we use prototype : A prototype is just a property on a funciton that points to an object.  
// if you go to browser and type in developer tools - console window.. like this:
// > functioni imAfuncitoni() {}
// > imAfunction.prototype 
// it will return an OBJECT with a { constructior :f } property on it .. ( check yourself)
// this means, a protptype  is a property on a fuction that points to an object .

function Animal (name, energy) { // this now becomes a constructior function
    let animal = Object.create(Animal.prototype)
    animal.name = name;
    animal.energy = energy;
    
    return animal
}

// how about creating the objecs with new keywords? with the new keywords, 
// the code becomes a bit clean and you do not have to invoke let animal -- line and return animal line. 
//check the re-created funciton for new

function AnimalWithNew (name, energy) { // tthis now becomes a constructior function
    //let animal = Object.create(Animal.prototype)
    this.name = name;
    this.energy = energy;
    
   // return animal
} // now use new to create objects as below. 


Animal.prototype.eat = function (amount) {
    console.log (`${ this.name} is eating`)
    this.energy += amount   
}
Animal.prototype.sleep = function (length) {
    console.log (`${ this.name} is sleeping`)
    this.energy += length
}
Animal.prototype.play = function (length) {
    console.log (`${ this.name} is playing`)
    this.energy += length
}


const leo = Animal( 'Leo', 7)
leo.play() // this will reference back the parent object animalMethods as mentioned during the animal declaration this will be imvoked
const snoop = Animal( 'Snoop', 10)
snoop.play() // this will reference back the parent object animalMethods as mentioned during the animal declaration

// Using new with function AnimalWithNew to create new objects. 
const leoWithNew = new AnimalWithNew ('LeoNew', 7)
const snoopWithNew = new AnimalWithNew ('SnoopWithNew', 10)

// Now lets use ES6 Class . easy peesy -- same as old languages, no functions to confuse...
// create a new file from here.. 
class Animal {
    constructor (name, energy){
        this.name = name
        this.energy = energy
    }

eat (amount){
    console.log (`${ this.name} is eating`)
    this.energy += amount  
}
sleep (length){
    console.log (`${ this.name} is sleeping`)
    this.energy += length  
}
play (length){
    console.log (`${ this.name} is playing`)
    this.energy += length  
}
}
//and to declate the class objects, it is now easy :
const leoWithNewClassObj = new AnimalWithNew ('LeoNewCO', 7)
const snoopWithNewClassObj = new AnimalWithNew ('SnoopWithNewCO', 10)

//display logic
//document.write (animal); // dont work, weh have to use DOM: 
// document.getElementById ('my_animals').innerText = 
// `name : ${animal.name}  
// had got energy : ${animal.energy}
// and now ${animal.name} is eating`

//  animal.eat(5)

//  document.getElementById ('eater').innerText = 
//  ` ${animal.name} has now got energy : ${animal.energy}`
 //document.getElementById ('eater').textContent =` ${animal.name} has now got energy : ${animal.energy}`

// elements in the browser console (  inspect element (f12) ---> console ).

//  console.log ( ` ${animal.name}`);
//  console.log ( ` ${animal.energy}`);
//  console.log ( ` ${animal.eat(5)}`);
//  console.log ( ` ${animal.energy}`);
//console.log(animal.eat(10));

// or else use a stringify method
let my_string = JSON.stringify(animal);
document.getElementById('my_animals').innerText = my_string;

/*
Now as you see how protypes work, lets see the prototypes of array , you will be able to see all the methods. 
try typong in the Browser developer tools console : 
> const friends = [] // shortcut version of new Array () as below
> const frinedsWithoutSugar = new Array ()
> Array.prototypes  // this will show all the methods of array.
//now friend will be to live with all methods of the Array prototype
like : push pop unshift shift , slice, splice methods

Now, lets get the prototypes of LEO, 
> const protot = Object.getPrototypeof (leo)
> prototype  ( press enter and you get the list of the variables and methods finally attached to this instance)

leo.jasOwnProperty('name')  // true 
leo.jasOwnProperty('play')  // false ( beacuse it is prototype for the instance ) 
// Note that all the protptyes properties are enumernable for the object // by default ofcourse ..
// so, if we want to get the propertiesof the object itself, we can use a loop :
for (let ke in leo ){
  if (leo.hasOwnProperty (ke)){
     console.log (`Key in leo:  ${ke}  Value is ${leo[ke]} `)
    } 
}
how to check if an object is an specific instance of a class
function User () {}
leo instanceod Animal // True
leo instanceod User // false

Arrow functions do not have this key word hence, can not be constructor functions prove : 
const Animal= -> {}
const leo - new Animal // throws error Animal is not a constructor. 
//reason is: 
Animal.prototype
// will give undefined. 

*/



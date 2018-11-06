var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}
updateMessage();

// return multiple values out of a function

function getSize(width, height, depth)
{
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area,volume];
  return sizes;
}

//wow here operates the magic
//The areaOne variable holds the area of a box which is the first value in the sizes array.
var areaOne = getSize(3,2,3)[0];
//The volumeOne variable holds the volume of a box which is the second value in the sizes array.
var volumeOne = getSize(3,2,3)[1];

// iife
var area = ( function () {
  var width = 3;
  var height = 2;
  return width * height;
}());

// obejct creation with literal Notation
var hotel = {
  name: 'Ibis',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes:['twin', 'double', 'suite'],

  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};
// object creation with constructor notation

var  hotel = new Object(); // we create an empty object
// Next we add properties and Methods using dot notation
hotel.name = 'Tripadvisor';
hotel.rooms =  40;
hotel.booked = 25;
hotel.checkAvailability =  function () {
  return this.rooms - this.booked;
};

// create object then add, properties and Methods

// Litteral Notation

var hotel = {}

hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability =  function () {
  return this.rooms - this.booked;
};


// object acess method

// acces method 1 (use of dot notation)
var hotelName =  hotel.name;
var roomsFree =  hotel.checkAvailability();
// acces method 2 (use of bracket notation) only Available for property

var hotelName =  hotel['name'];

// the previous notation is used most commonly when
// A variable is being used in place of property name.

// Updating an object using dot syntax

hotel.name = 'Park';

// Updating an object using barcket syntax (only Available for property)

hotel['name'] = 'Park';

// to delete a property , we can use the delete keyword

delete hotel.name;

// to clear the value of a property, you could set it to blank string

hotel.name='';

// Creating Many objects (constructor Notation)

function Hotel (name, rooms, booked)
{
  this.name = name;
  this.rooms = rooms;
  this.booked =  booked;

  this.checkAvailability = function(){
    return this.rooms - this.booked;
  };
}

// note that here we use semicolon

// Now we can create instances of the object using the constructor function.

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

// A FUNCTION IN GLOBAL SCOPE

// The default object in the Global context is the window objects
// so when this is used inside a function in the global context it refers to the window object.

function windowSize()
{
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [height,width];
}

// GLOBAL VARIABLES

//All global variables also become properties of the
//window object. so when a function is in the global
//context, you can access global variables using the
//window object, as well as its other properties.

var width = 600;
var shape = {width:300};

var showWidth = function(){
  document.write(this.width);
};

showWidth();

// We have 3 Objet model :

// GLOBAL javascript object Model deal with things
// like Date times and maths

// Browser object Model represent The current browser
// Windows or Tab and deal with things like browser
// history and the device's screen

// document Obejct Model (you already what it's)

// the best way to generate a ramdon whole number
// between 1 and 10

// var ramdomNum = Math.floor((Math.random()*10)+1);

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
  return sizes
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

// create object then add, then add properties and Methods

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

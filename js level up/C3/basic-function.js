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

// obejct
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

// object acess method

// acces method 1 (use of dot notation)
var hotelName =  hotel.name;
var roomsFree =  hotel.checkAvailability();
// acces method 2 (use of bracket notation) only Available for property

var hotelName =  hotel['name'];

// the previous notation is used most commonly when
// A variable is being used in place of property name.

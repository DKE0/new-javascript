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

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoomsAvailable = document.getElementById('rooms');
elRoomsAvailable.textContent = hotel.checkAvailability();

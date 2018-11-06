(
  function(){
  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
  // Create a hotel object using object Literal syntax

  var hotel = {
    name : 'park',
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount)/100);
      return offerRate;
    }
  }

  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;  // Write hotel name
  roomRate.textContent = '$'+hotel.roomRate.toFixed(2); // Write room rate
  specialRate.textContent = '$'+ hotel.offerPrice();  // write offer price

  var expiryMsg;
  var today;
  var elEnds;

  function offerExpires(today)
  {
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime()+7*24*60*60*1000);
    dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    monthNames = ['January','February','March','April','May', 'June',
      'July','August','September','October', 'November','December'];
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer  expires next ';
    expiryMsg += day + '<br />('+ date +' '+month + ' '+ year + ')';
    return expiryMsg;
  }
  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);
}

());

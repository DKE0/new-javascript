/*var username;
var message;

username = 'Molly';
message = "See our upcoming range";

var elName = document.getElementById('name');
elName.textContent = username;

 var elNote = document.getElementById('note');
 elNote.textContent =  message;*/

 var colors;
 colors = ['black', 'white','others'];
 var el = document.getElementById('colors');
 el.textContent = colors[0];

 var colors = new Array('white', 'black', 'custom');

 var el = document.getElementById('colors');
 el.innerHTML = colors.item(0);

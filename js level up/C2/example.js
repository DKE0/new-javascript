var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your Order :';
var Welcome =  greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = Welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTitles = document.getElementById('tiles');
elTitles.textContent = '$' + subTotal;

var elSubTotal =  document.getElementById('shipping');
elSubTotal.textContent = '$'+shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$'+ grandTotal;

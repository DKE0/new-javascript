var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

// Check whether user passed  rounds, store result ion variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

var minPass = ((score1 >= pass1) || (score2 >= pass2))

// Create message
var msg = 'Both rounds passed: '+ passBoth;
var el = document.getElementById('answer');

    el.textContent = msg;

    msg = 'Resit required: ' + !(minPass);
    el = document.getElementById('answer2');
    el.textContent = msg;

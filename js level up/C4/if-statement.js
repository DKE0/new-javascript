var score = 75 ;
var msg = '';

if (score >= 50) {
  msg = ' Congratulations ! ';
  msg += 'Proceed to the next round.';
}

function Congratulate() {
  msg += 'Congratulations !';
}


var el = document.getElementById('answer');
el.textContent = msg;

msg ='';
if (score >= 50){
  Congratulate();
  msg += 'Proceed to the next round.';
}
el = document.getElementById('answer2');
el.textContent = msg;

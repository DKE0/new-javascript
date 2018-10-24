$(function()
  {
    var Largeur =  ($(window).width())-50;
    var Hauteur =  ($(window).height())-50;

    var p = $('#target').offset();
    p.top = 100;
    p.left = 100;

    $('#target').offset(p);

    $("#target").click( function()
    {
      x =  Math.floor(Math.random()*Largeur);
      y =  Math.floor(Math.random()*Hauteur);
      var p = $('#target').offset();
      p.top = y;
      p.left =  x;
      $('#target').offset(p);
    });

    $('div').scroll(function() {
      alert('Utilisation de la roulette dans la balise <div>');
    });
    $(window).scroll(function() {
      alert('Utilisation de la roulette dans le document');
    });
    $('#target').mousedown(function(e)
    {
      $('#rapport').html('Evenement :' + e.type + '. Bouton pressé :' + e.which);
    });
  });

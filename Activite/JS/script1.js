$(function()
  {
      $("<style type='text/css'> #bouton {width:100px; height:30px; margin:5px 10px 15px 20px; }</style>").appendTo("head");
      $("<style type='text/css'> #lblg {width:100px; height:30px; text-align:right; }</style>").appendTo("head");
      $("<style type='text/css'>.formDiv { margin : 5px 10px 15px 20px;}</style>").appendTo("head");

    $('#droite').append($("<hr id='vLine'>"));

    var $userVal;
    var controlType = 0, verify=0;
    var $btnclick = function($lblControl)
    {
      var $btnclick  = $("<div id='labelZone'>"+ $lblControl+
      "<input class='texte' type='text'> </input>"+
      "<button class='btnOk'  type='button'> OK </button>"+
      " </div>");
      $('#droite').append($btnclick);
    };

    $(document).on('click','.btnOk', function ()
    {
      var $control;
      switch (controlType) {

        case 0:
               $userVal = $(".texte").val();
               $control = $("<div class='formDiv'>"+
               "<span id='lblg'>" + $userVal + " :" + "</span>" + "</div>");
               $('#gauche').append($control);
               verify++;
          break;

        case 1:
               verify++;
               if ( !(verify%2))
               {
                 $control = $("<input type='text' id='edit'> </input>");
                 $('#gauche .formDiv span:last').after($control);
               }
               else console.log("vous devez d'abord utiliser un label");
          break;

        case 2:
               $userVal = $(".texte").val();
                 $control = $("<button id='bouton'>" + $userVal+" </button>");
                 $('#gauche').append($control);
          break;
        default:console.log('erreur');
      }
    });

      $("#btnLabelClick").click( function (){
      $("#labelZone").remove();
      $btnclick(("<label class='lbl' for='texte'> Texte du label </label>"));
      controlType = 0;
    });

      $("#btnEditZnClick").click( function (){
      controlType = 1;
      $("#labelZone").remove();
      $btnclick(("<label class='lbl' for='texte'> Id de la zone de texte </label>"));
    });

      $("#btnClick").click( function (){
      controlType = 2;
      $("#labelZone").remove();
      $btnclick(("<label class='lbl' for='texte'> Texte du boutton </label>"));
    });
  }
);

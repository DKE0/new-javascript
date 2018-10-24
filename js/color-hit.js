$(function(){
      var DIVISIONS = 5;
      var colordivrgbtab = [];

      var $colordiv = function($r, $g, $b)
      {
          var $colordiv = $("<div id='colordiv'  style ='"+
          " background-color : rgb(" +$r+ "," +$g+ "," +$b+ ")'>  AM the best  </div>");
          //$("<div> AM the best  </div>");
          $(".main-content").append($colordiv);
      }

      var wWidth = ($(window).width());
      var wheight = ($(window).height());
      var xblock =  Math.floor(wWidth / DIVISIONS);
      var yblock =  Math.floor(wheight / DIVISIONS);

      /*var $css = function ()
      {
        /*$("#colordiv").css('width',xblock+'px');
          console.log('width',+xblock+'px');
          $("#colordiv").css('height',+yblock+'px');*/
        //$("#colordiv").css({"width":xblock+"px","height":yblock+"px"});
      //};*/
      //$css();
      $("<style type='text/css'> #colordiv "+
        "{   width":xblock+"px"
      ,"height":yblock+"px } </style>").appendTo("head");

      for (var x = 0;x<DIVISIONS;x++)
      for (var y = 0;y<DIVISIONS;y++)
      {
           //$css();
           var r = Math.floor(Math.random()*255);
           var g = Math.floor(Math.random()*255);
           var b = Math.floor(Math.random()*255);
           var rgbclr = " r : "+r+" g : "+g+" b : "+b;
           colordivrgbtab.push(rgbclr);
           $colordiv(r,g,b);
           //$(".main-content").append(colordiv(r,g,b));
           //
           console.log("we are in ");
      }
});

$(function(){

          //$('.main-content').append("<div style ='color:blue'>hello</div>");

            /*$('<div/>', {
              id: 'some-id',
              class: 'some-class',
              title: 'now this div has a title!'
            }).appendTo('.main-content');*/

            var $colordiv = function()
            {
                var $colordiv = $("<div> AM the best </div>");
                 //$("<div style ='color:blue'background-color : rgb("+$r+","+$g+"x,"+$b+")>"
                //+"</div>");
                $(".main-content").append($colordiv);
            }

           //$(".main-content").append($colordiv);
           $colordiv();

});

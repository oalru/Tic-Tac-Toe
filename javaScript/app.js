$("document").ready(function() {
    const $boxes = $('.wh');
    
    const color1 = function(player1){
       
        $(this).css('background-color', 'green')
    }
    const color2 = function(player2){
       
        $(this).css('background-color', 'white')
        
    } 
    $boxes.click(color1);
    $boxes.click(color2);

  });
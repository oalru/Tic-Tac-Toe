$("document").ready(function() {
    
    // declaring icons to choose from
    const icons = [
{
    type:"X",
    image:"../images/x.png"
},
{
    type:"O",
    image:"../images/o.png"
},
{
    type:"Diamond",
    image:"../images/cut-diamond_39242.png"
},
{
    type:"Crown",
    image:"../images/queen-crown_38957.png"
},
{
    type:"Wolf",
    image:"../images/wolf-head_38725.png"
},
{
    type:"House",
    image:"../images/house_38533.png"
},
{
    type:"Ball",
    image:"../images/soccer-ball_39433.png"
},
{
    type:"Cat",
    image:"../images/white-cat_38735.png"
}
];

// declaring the board and the boxes

const $box = $('.wh');
    const s1 = $('.s1');
    const s2 = $('.s2');
    const s3 = $('.s3');
    const s4 = $('.s4');
    const s5 = $('.s5');
    const s6 = $('.s6');
    const s7 = $('.s7');
    const s8 = $('.s8');
    const s9 = $('.s9');

    // declaring the count  

    const count = 0;

    // declaring the winner

    winner = "";

    // showing which box has been choosen
    
    const onClickk = function(){
        let a = $(this).attr("class")
        console.log(this.id);
        
        const choose = function(shape){
            for (let i = 0; i < icons.length; i++) {
                if (icons[i].type === shape){
                    return icons[i].image
                }
                
            }
        }
        $(`#${this.id} > img`).attr("src", "../images/white-cat_38735.png")
    }
    $('.wh').click(onClickk);
    
    function checkForGame(){
        function startGame ()
           {
               if (s1 === s2 === s3 || s1 === s4 === s7 || s1 === s5 === s9 || s2 === s5 === s8 || s3 === s6 === s9 || s3 === s5 === s7 || s4 === s5 === s6 || s7 === s8 === s9){
                   alert('w');
               } else { 
                   alert('Q');
               }
           }
       
           if (icons.length === 2){
       } else { 
    
       } } 
       
    
    let s = choose('O');
    console.log(s);

// checking to see if the game has two players or not 
    


});
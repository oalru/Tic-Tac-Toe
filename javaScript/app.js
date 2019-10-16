// variables declaration
const iconsImage = document.querySelectorAll(".icons"); 
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
const s7 = document.querySelector(".s7");
const s8 = document.querySelector(".s8");
const s9 = document.querySelector(".s9");
const choose = document.querySelector(".choose");
const game = document.querySelector(".game");
const whoWon = document.querySelector(".whoWon");
const looser = document.querySelector(".looser");
const tie = document.querySelector(".tie");
let box = document.querySelectorAll(".wh"); 
let x_or_o = 0;
let piece;
let user1 = 0;
let user2 = 0;
let newUser = 0;
let me = document.querySelector(".user1");
let him = document.querySelector(".user2");
let playerTurn = true;

// Function declaration
const displayWinner = function(){
    if (x_or_o%2 === 1){
        game.style.display = "none";
        whoWon.style.display = "block";
        user1 += 1;
    }
    if (x_or_o%2 === 0){ 
        game.style.display = "none";
        looser.style.display = "block";
        user2 += 1;
    } 
   
}

const replay = function(){
    for (let i = 0; i < box.length; i++) {
        box[i].classList.remove("winning");
        box[i].innerHTML = "";
        for (let i = 0; i < box.length; i++) {
            box[i].addEventListener('click', logic)
            
        }
    }
    piece = "";
    choose.style.display = "block";
    game.style.display = "none";
    whoWon.style.display = "none";
    looser.style.display = "none";
    tie.style.display = "none";
    x_or_o = 0;
    playerTurn = true;
}

const finish = function(){
    for (let i = 0; i < box.length; i++) {
        box[i].removeEventListener('click', logic)  
    }
}

const winningRow = function(b1,b2,b3){
    b1.classList.add("winning");
    b2.classList.add("winning");
    b3.classList.add("winning");
}

const logic = function(){
    if(this.innerHTML !== '<img class="imge" src="' + piece +'">' && this.innerHTML !== '<img class="imge" src="../images/o.png">'){
        if(playerTurn){
            this.innerHTML = '<img class="imge" src="'+ piece +'">';
            x_or_o += 1;
            playerTurn = false
            winner();
        } else {
            this.innerHTML = '<img class="imge" src="../images/o.png">';
            x_or_o += 1;
            playerTurn = true
            winner();

        }
        
        
    }
}  

const winner = function(){
    if(s1.innerHTML !== "" && s1.innerHTML === s2.innerHTML && s1.innerHTML === s3.innerHTML){
        winningRow(s1, s2, s3);
        finish();
        setTimeout(displayWinner, 2000);
        return;
        }
    if(s4.innerHTML !== "" && s4.innerHTML === s5.innerHTML && s4.innerHTML === s6.innerHTML){
        winningRow(s4, s5, s6);
        finish();
        setTimeout(displayWinner, 2000);
        return;

        }
    if(s7.innerHTML !== "" && s7.innerHTML === s8.innerHTML && s7.innerHTML === s9.innerHTML){
        winningRow(s7, s8, s9);
        finish();
        setTimeout(displayWinner, 2000);
        }
    if(s1.innerHTML !== "" && s1.innerHTML === s4.innerHTML && s1.innerHTML === s7.innerHTML){
        winningRow(s1, s4, s7);
        finish();
        setTimeout(displayWinner, 2000);
        return;

        }
    if(s2.innerHTML !== "" && s2.innerHTML === s5.innerHTML && s2.innerHTML === s8.innerHTML){
        winningRow(s2, s5, s8);
        finish();
        setTimeout(displayWinner, 2000);
        return;

        }
    if(s3.innerHTML !== "" && s3.innerHTML === s6.innerHTML && s3.innerHTML === s9.innerHTML){
        winningRow(s3, s6, s9);
        finish();
        setTimeout(displayWinner, 2000);
        return;

        }
    if(s1.innerHTML !== "" && s1.innerHTML === s5.innerHTML && s1.innerHTML === s9.innerHTML){
        winningRow(s1, s5, s9);
        finish();
        setTimeout(displayWinner, 2000);
        return;

        }
    if(s3.innerHTML !== "" && s3.innerHTML === s5.innerHTML && s3.innerHTML === s7.innerHTML){
        winningRow(s3, s5, s7);
        finish();
        setTimeout(displayWinner, 2000);
        return;

        }
    if(x_or_o === 9){
            game.style.display = "none";
            tie.style.display = "block";
            newUser += 1;
        }
}

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', logic); 
}


const icons = function(){
    piece = "."+this.getAttribute('src');
    choose.style.display = "none";
    game.style.display= "flex";
}

for (let i = 0; i < iconsImage.length; i++) {
    iconsImage[i].addEventListener('click', icons); 
}
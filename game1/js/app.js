// prakash-js

var player = document.querySelector('.playerBlock');
var playerDefaultPosition = player.offsetTop;

var ground = document.querySelector('.groundBlock');
var groundObstacle = document.querySelector('.obstacleBlock'); 

console.log(groundObstacle.offsetTop, groundObstacle.offsetLeft);
console.log(player.offsetTop, player.offsetLeft)

// Y top < 244

var move=0;
var journeyFlag="R";
let obstacleMovement = ()=> {
    move--;
    if (move<=-300){
        move=300;
    }
       groundObstacle.style.transform = `translateX(${move}px)`;

       
}

var abc = setInterval(()=>{
    obstacleMovement();
    if (move==113 && player.style.marginBottom > '15px') {
     clearInterval();   
    }
},20);


let jumpCalc = ()=>{
    player.style.marginBottom = `100px`;
    player.currentTime;
    console.log(playerDefaultPosition);
}

function backToORiginal() {
    player.style.marginBottom = `15px`;
}



window.addEventListener('keydown', (e)=>{
   if (e.code=='ArrowUp') {
    jumpCalc();
   } 
});

player.addEventListener('transitionend', backToORiginal)


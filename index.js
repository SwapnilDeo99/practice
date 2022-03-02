var score1 = Math.floor((Math.random()*6) + 1);
var score2 = Math.floor(Math.random()*7);
if(score1 < score2){
    document.querySelector("h1").innerHTML="Player 2 is winner" ;
    document.querySelector("h1").style.fontSize="4rem" ;
}
else if(score1 === score2){
    document.querySelector("h1").innerHTML="DRAW" ;
    document.querySelector("h1").style.fontSize="4rem" ;
}
else{
    document.querySelector("h1").innerHTML="Player 1 is winner" ;
    document.querySelector("h1").style.fontSize="4rem" ;
}
if(score1 === 1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png")
}
if(score1 === 2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png")
}
if(score1 === 3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png")
}
if(score1 === 4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png")
}
if(score1 === 5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png")
}
if(score2 === 1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png")
}
if(score2 === 2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png")
}
if(score2 === 3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png")
}
if(score2 === 4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png")
}
if(score2 === 5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png")
}
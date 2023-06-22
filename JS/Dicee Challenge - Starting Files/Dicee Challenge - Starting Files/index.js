var randomNumber1=Math.floor(Math.random()*6)+1;

var randomNumberImg1="images/dice"+randomNumber1+".png"
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomNumberImg1)



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImg2="images/dice"+randomNumber2+".png"
var img2=document.querySelectorAll("img")[1]
img2.setAttribute("src",randomImg2)


var wonStatus=document.querySelector("h1")

if(randomNumber1>randomNumber2){
    wonStatus.innerHTML="Player 1 wins!"
}else if(randomNumber1<randomNumber2){
    wonStatus.innerHTML="Player 2 wins!"
}else{
    wonStatus.innerHTML="Tied"
}

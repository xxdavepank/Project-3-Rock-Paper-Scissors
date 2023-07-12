
var playerscore = 0;
var computerscore = 0;

function coms(player){



const computerchoice = Math.floor(Math.random()*3);  
//computer choices
if(computerchoice==0){
  document.getElementById("ch2").src = "pngwing.com (2).png";
}
else if(computerchoice==1){
  document.getElementById("ch2").src = "pngwing.com (4).png";
}
else if (computerchoice==2){
  document.getElementById("ch2").src = "pngwing.com (3).png";
}

//
if(player==0 && computerchoice==0 ){
  document.getElementById("rock").innerHTML = "It's a draw";
}
else if(player==0 && computerchoice==1 ){
  document.getElementById("rock").innerHTML = "YOU LOSE";
  computerscore+=1;
}
else if(player==0 && computerchoice==2 ){
  document.getElementById("rock").innerHTML = "YOU WIN";
  playerscore+=1;
}
else if(player==1 && computerchoice==0 ){
  document.getElementById("rock").innerHTML = "YOU WIN"
  playerscore+=1;
}
else if(player==1 && computerchoice==1 ){
  document.getElementById("rock").innerHTML = "It's a draw";
}
else if(player==1 && computerchoice==2 ){
  document.getElementById("rock").innerHTML = "YOU LOSE";
  computerscore+=1;
}
else if(player==2 && computerchoice==0 ){
  document.getElementById("rock").innerHTML = "YOU LOSE";
  computerscore+=1;
}
else if(player==2 && computerchoice==1 ){
  document.getElementById("rock").innerHTML = "YOU WIN"
  playerscore+=1;
}
else if(player==2 && computerchoice==2 ){
  document.getElementById("rock").innerHTML = "It's a draw";
}

document.getElementById("pscore").innerHTML = playerscore.toString();
document.getElementById("computerscore").innerHTML = computerscore.toString();


if(playerscore === 5 || computerscore === 5){
  document.getElementById("ch1").id = "awd";
  
   document.getElementById("rock").innerHTML = "CLICK HERE to RESTART";
   document.getElementById("rock").addEventListener("click", function() {
     document.getElementById("rock").innerHTML = "ROCK PAPER SCISSOR";
     document.getElementById("awd").id = "ch1";
     playerscore=0;
     computerscore=0;
     document.getElementById("pscore").innerHTML = playerscore.toString();
     document.getElementById("computerscore").innerHTML = computerscore.toString();
     
   });

   
 }
   

}




document.getElementById("im1").addEventListener("click", function() {
    document.getElementById("ch1").src = "pngwing.com (2).png";
    coms(0);    
  });

document.getElementById("im2").addEventListener("click", function() {
    document.getElementById("ch1").src = "pngwing.com (4).png";
    coms(1);    
  });

document.getElementById("im3").addEventListener("click", function() {
    document.getElementById("ch1").src = "pngwing.com (3).png";
    coms(2); 
  });








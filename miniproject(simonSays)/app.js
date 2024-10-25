let gameSeq=[];
let userSeq=[];
let btns = ["yellow" , "red" , "purple" , "blue"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(start == false){
    console.log("game start");
    start = true;
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    } , 250);
}
function levelUp(){
    userSeq = [] ;
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() *3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`); 
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level :" , level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp , 1000);
        }
    } else{
        h2.innerHTML = `Game Over!Your score was <b>${level}</b>. <br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        } , 150)
        reset();
    }
}

function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" , btnPress);
}

function reset(){
  start = false;
  gameSeq = []; 
  userSeq = [];
  level = 0;  
}
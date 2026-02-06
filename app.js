let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

// Selectors
let levelDisplay = document.querySelector('h3');
let btns = document.querySelectorAll('.box'); 

// Step 1: Press any key to start the game
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started!");
        started = true;
        gameOn();
    }
})

// Step 2 : Show its level 1 and start the btn flash
function gameOn(){
    level++;
    levelDisplay.innerHTML = `<u>Level ${level}</u>`;
    userSeq = []  // Each level userSeq should start clean

    //flash the random button for the user
    let btn = document.querySelector(`.${randomBtn()}`);
    flashBtn(btn);
    gameSeq.push(btn.classList[1]);
    console.log(gameSeq);
}

// Adding event listeners for all 4 buttons
for(btn of btns){
    btn.addEventListener("click", userBtnPress);
}

// When User Press the button
function userBtnPress(){
        flashBtn(this);
        userSeq.push(this.classList[1]);
        checkMatch(userSeq.length-1);  //IMP: current userSeq length will be the idx (if 1 -> verify 0th idx for both)
}

function checkMatch(idx){
    // each level indicates how many elements are there inside seq.
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            console.log("Match found(Level cleared)!, updating to next level...!");
            gameOn();
        }else{
            console.log("Matching seq still left!");
        }

    }else{
        levelDisplay.innerHTML = `<h3>GAME OVER! <u>Your Score is ${level-1}</u>, Press any key to start a new game.<h3>`;
        resetGame();
    }
}

//Helper: resetFunction:
function resetGame(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

//Helper: select the random button to flash
function randomBtn(){
    let randomNum = Math.floor(Math.random() * 4) + 1;
    return `bc${randomNum}`;
}

// Helper: to flash the button
function flashBtn(obj){
    obj.classList.add('flash');
    setTimeout(function() {
        obj.classList.remove('flash');
    }, 180);
}

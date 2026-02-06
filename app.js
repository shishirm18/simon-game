let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

// Step 1: Press any key to start the game
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started!");
        started = true;
        startGame();
    }
})

// Step 2 : Show its level 1 and start the btn flash
let levelDisplay = document.querySelector('h3');
let btns = document.querySelectorAll('.box'); 

for(btn of btns){
    btn.addEventListener("click", function(){
        flashBtn(this);
        userSeq.push(this.classList[1]);
    })
}

function gameOn(){
    level++;
    levelDisplay.innerText = `Level ${level}`;

    
    let allGood = true;
    userSeq = []

    //flash the random button for the user
    let btn = document.querySelector(`.${randomBtn()}`);
    flashBtn(btn);
    gameSeq.push(btn.classList[1]);

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

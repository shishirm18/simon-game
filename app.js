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
        // userSeq.append(this.classList[1]);
    })
}

function startGame(){
    level++;
    levelDisplay.innerText = `Level ${level}`;

    // while(true){
        //flash the random button for the user
        let btn = document.querySelector(`.${randomBtn()}`);
        flashBtn(btn);

        gameSeq.append(randomBtn());

        //Now its the user's turn to click on the same flashed btn
        console.log("Game: ", gameSeq);
        console.log("User: ", userSeq);
    // }
}

//Helper: select the random button to flash
function randomBtn(){
    let randomNum = Math.floor(Math.random() * 4) + 1;
    return `bc${randomNum}`;
}

// Helper function to flash the button
function flashBtn(obj){
    obj.classList.add('flash');
    setTimeout(function() {
        obj.classList.remove('flash');
    }, 180);
}

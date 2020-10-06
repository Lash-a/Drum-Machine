let melody = {
    q : {
        keycode : parseInt("81"),
        sounds : "sounds/bubbles.mp3",
        soundTwo : "sounds/gun-1.mp3",
        name: "Bubbles"
    },
    w : {
        keycode : parseInt("87"),
        sounds : "sounds/clay.mp3",
        soundTwo : "sounds/gun-2.mp3",
        name: "Clay"
    },
    e : {
        keycode : parseInt("69"),
        sounds : "sounds/corona.mp3",
        soundTwo : "sounds/gun-3.mp3",
        name: "Corona"
    },
    a : {
        keycode : parseInt("65"),
        sounds : "sounds/flash-1.mp3",
        soundTwo : "sounds/gun-4.mp3",
        name: "Flash-1"
    },
    s : {
        keycode : parseInt("83"),
        sounds: "sounds/dotted-spiral.mp3",
        soundTwo : "sounds/gun-5.mp3",
        name: "Dotted-Spiral"
    },
    d : {
        keycode : parseInt("68"),
        sounds : "sounds/moon.mp3",
        soundTwo : "sounds/gun-6.mp3",
        name: "Moon"
    },
    z : {
        keycode : parseInt("90"),
        sounds : "sounds/confetti.mp3",
        soundTwo : "sounds/gun-7.mp3",
        name: "Confetti"
    },
    x : {
        keycode : parseInt("88"),
        sounds : "sounds/pinwheel.mp3",
        soundTwo : "sounds/gun-8.mp3",
        name: "PinWheel"
    },
    c : {
        keycode : parseInt("67"),
        sounds : "sounds/prism-1.mp3",
        soundTwo : "sounds/gun-9.mp3",
        name: "Prism-1"
    }
};

let allBtns = document.querySelectorAll(".drum-pad");
let namesContainer = document.getElementById("melody-names-container");
let powerSwitcher = document.querySelector(".power-btn");
let switcher = document.querySelector(".switcher");
let bankSwitcherButton = document.querySelector(".bank-btn");
let bankSwitcher = document.querySelector(".bank-switcher");
let checkIfClicked = true;
let changeAudio = false;
let melodyContainer = "sounds";

function init(){
    clickedButtons();
    keyDownFunc();
    addClassFunc();
}

function timeCounter() {
    setTimeout(function(){ namesContainer.textContent = ""; }, 12000);
}

function playMelody(e){
    let audio = new Audio(e);
    if(checkIfClicked){
        audio.play();
    }
};

function clickedButtons(){
    for (const button of allBtns) {
        button.addEventListener('click', () => {
           let checkForKey = button.textContent.toLocaleLowerCase();
           if(checkForKey === "q" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.q.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.q.sounds);
                    namesContainer.textContent = melody.q.name;
                }
           }else if(checkForKey === "w" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.w.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.w.sounds);
                    namesContainer.textContent = melody.w.name;
                }
           }else if(checkForKey === "e" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.e.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.e.sounds); 
                    namesContainer.textContent = melody.e.name;  
                }   
           }else if(checkForKey === "a" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.a.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.a.sounds);
                    namesContainer.textContent = melody.a.name;
                }        
           }else if(checkForKey === "s" && checkIfClicked !== false) {
                if(changeAudio){
                    playMelody(melody.s.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.s.sounds);
                    namesContainer.textContent = melody.s.name;
                }
           }else if(checkForKey === "d" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.d.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.d.sounds);
                    namesContainer.textContent = melody.d.name;
                }
           }else if(checkForKey === "z" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.z.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.z.sounds);
                    namesContainer.textContent = melody.z.name;
                }
           }else if(checkForKey === "x" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.x.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.x.sounds);
                    namesContainer.textContent = melody.x.name;
                }
           }else if(checkForKey === "c" && checkIfClicked !== false){
                if(changeAudio){
                    playMelody(melody.c.soundTwo);
                    namesContainer.textContent = "Gun Sound";
                }else{
                    playMelody(melody.c.sounds);
                    namesContainer.textContent = melody.c.name;
                }
            } 
            timeCounter();  
        });
      }
};

function keyDownFunc(){
    document.addEventListener("keydown", function(event){
    if(checkIfClicked){
        if (event.isComposing || event.keyCode === melody.q.keycode) {

            if(changeAudio){
                let audio = new Audio(melody.q.soundTwo);
                console.log(melody.q.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.q.sounds);
                namesContainer.textContent = melody.q.name;
                audio.play();
            }

        }else if(event.isComposing || event.keyCode === melody.w.keycode){
           
            if(changeAudio){
                let audio = new Audio(melody.w.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.w.sounds);
                namesContainer.textContent = melody.w.name;
                audio.play();
            }

        }else if(event.isComposing || event.keyCode === melody.e.keycode) {

            if(changeAudio){
                let audio = new Audio(melody.e.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.e.sounds);
                namesContainer.textContent = melody.e.name;
                audio.play();
            }

        }else if (event.isComposing || event.keyCode === melody.a.keycode) {
           
            if(changeAudio){
                let audio = new Audio(melody.a.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.a.sounds);
                namesContainer.textContent = melody.a.name;
                audio.play();
            }

        }else if (event.isComposing || event.keyCode === melody.s.keycode) {
           
            if(changeAudio){
                let audio = new Audio(melody.s.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.s.sounds);
                namesContainer.textContent = melody.s.name;
                audio.play();
            }
            
        }else if (event.isComposing || event.keyCode === melody.d.keycode) {
          
            if(changeAudio){
                let audio = new Audio(melody.d.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.d.sounds);
                namesContainer.textContent = melody.d.name;
                audio.play();
            }
            
        }else if (event.isComposing || event.keyCode === melody.z.keycode) {
          
            if(changeAudio){
                let audio = new Audio(melody.z.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.z.sounds);
                namesContainer.textContent = melody.z.name;
                audio.play();
            }
            
        }else if (event.isComposing || event.keyCode === melody.x.keycode) {
           
            if(changeAudio){
                let audio = new Audio(melody.x.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.x.sounds);
                namesContainer.textContent = melody.x.name;
                audio.play();
            }
            
        }else if(event.isComposing || event.keyCode === melody.c.keycode) {
          
            if(changeAudio){
                let audio = new Audio(melody.c.soundTwo);
                namesContainer.textContent = "Gun Sound";
                audio.play();
            }else {
                let audio = new Audio(melody.c.sounds);
                namesContainer.textContent = melody.c.name;
                audio.play();
            }
            
        }
    }    
    timeCounter();
    });
    
};

function addClassFunc(){
    powerSwitcher.addEventListener('click', function () {
        switcher.classList.toggle("float-right");
        switcher.classList.toggle("float-left");
        switcher.classList.toggle("border-class");
        
        if(checkIfClicked == false){
            checkIfClicked = true;
        }else {
            checkIfClicked = false;
        }
    });

    bankSwitcherButton.addEventListener('click', function () {
        bankSwitcher.classList.toggle("float-right");
        bankSwitcher.classList.toggle("float-left");
        bankSwitcher.classList.toggle("border-class");
        if(changeAudio == false){
            changeAudio = true;
            console.log(changeAudio);
        }else {
            changeAudio = false;
            console.log(changeAudio);
        }
    });
};

init();

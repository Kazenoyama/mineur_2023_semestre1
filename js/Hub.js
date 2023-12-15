let canvas,ctx;
let b1,b2,b3,b4,b5,b6;
let player = [];
let animationid;
let keys,speed;
let levelSelected = 1;
let level;
let timer;
let nbDrop = [];
let lastDrop = [];

let interval1;
let interval2;
let interval3;

let music;
var volumeValue = 0.5;
var volume;

var nbSeeker = [];

window.onload = function() {
    initCanvas();
    loadHub();
    music = new Music();
    
        
}

////////////////////////////////////////////////////
// Reset and change parameter

function changeNumberPlayer(){
    var numberPlayer = document.getElementById("numberPlayer");
    var numberPlayerValue = numberPlayer.value;
    var numberPlayerText = document.getElementById("numberPlayerOutput");
    numberPlayerText.innerHTML = numberPlayerValue;
}

function adjustVolume(){
    var volume = document.getElementById("volumeBackground");
    var volumeValue = volume.value;
    music.background.volume = volumeValue;
}

function adjustVolumeSFX(){
    volume = document.getElementById("volumeEffect");
    volumeValue = volume.value;
    music.rainDeath.volume = volumeValue;
    level.sfxVolume = volumeValue;
    music.missile.volume = volumeValue;
}

//////////////////////////////////////////////////////
// Stop for animation and interval to keep the game running correctly

function stopAnimation(){
    if(animationid){

        window.cancelAnimationFrame(animationid);
        animationid = undefined;
    }
}

function stopIntervale(){
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
}

////////////////////////////////////////////////////
// Init

function loadHub(){
    var hubTextContainer = document.getElementById("hubTextContainer");
    hubTextContainer.innerHTML = "Welcome to the Game !";

    var hub = document.getElementById("hubGameText");
    var text = document.createElement("h2");
    text.innerHTML = "Choose your level to begin the game or press start.";
    hub.appendChild(text);

    var startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    startButton.id = "startButton";
    hub.appendChild(startButton);
    startButton.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 1";
        levelSelected = 1;
        hub.removeChild(text);
        hub.removeChild(startButton);

        initGame();
    });
    initButton();
}

function initButton(){
    var hubTextContainer = document.getElementById("hubTextContainer");
    b1 = document.getElementById("level1");
    b2 = document.getElementById("level2");
    b3 = document.getElementById("level3");
    b4 = document.getElementById("level4");
    b5 = document.getElementById("level5");
    b6 = document.getElementById("level6");
    b1.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 1";
        levelSelected = 1;
        initGame();
    });

    b2.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 2";
        levelSelected = 2;
        initGame();
    });

    b3.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 3";
        levelSelected = 3;
        initGame();
    });

    b4.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 4";
        levelSelected = 4;
        initGame();
    });

    b5.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 5";
        levelSelected = 5;
        initGame();
    });

    b6.addEventListener("click",function(){
        hubTextContainer.innerHTML = "Level 6";
        levelSelected = 6;
        initGame();
    });
}

function initCanvas(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 64*16;
    canvas.height = 64*9;
    canvas.style.backgroundColor = "white";
}

function initGame(){

    var hubGameText = document.getElementById("hubGameText");
    if(hubGameText.hasChildNodes()){
        while(hubGameText.firstChild){
            hubGameText.removeChild(hubGameText.firstChild);
        }
    }

    music.playMusic();

    var numberPlayer = document.getElementById("numberPlayer");
    var numberPlayerValue = numberPlayer.value;

    player = [];
    level = null;
    nbDrop = [];
    lastDrop = [];
    nbSeeker = [];
    keys = {
        q: {pressed : false},
        d: {pressed : false},
        h: {pressed : false},
        k: {pressed : false},
    }
    speed = {
        x : 5,
        y : 20,
    }
    for(var i = 0; i < numberPlayerValue; i++){
        if(i == 0){player[i] = new Player("Player 1","red",canvas);}
        if(i == 1){player[i] = new Player("Player 2","blue",canvas);}
        if(i == 2){player[i] = new Player("Player 3","green",canvas);}
        if(i == 3){player[i] = new Player("Player 4","yellow",canvas);}

        player[i].draw(ctx);
    }
    level = new Level(player);
    level.levelLoad(levelSelected);

    for(var i = 0; i < level.allRain.length; i++){
        nbDrop.push(0);
        lastDrop.push(3);
    }

    for(var i = 0; i < level.seeker.length; i++){
        nbSeeker.push(0);
    }

    runGame();
}

////////////////////////////////////////////////////
// Game

function checkPlayerDead(){
    var pDead = 0;
    for(var i = 0; i < player.length; i++){
        if(player[i].dead){
            pDead++;
        }
    }
    if(pDead == player.length){
        return true;
    }
    return false;
}

function movingPlayer(){
    if(keys.q.pressed){player[0].velocity.x = -speed.x;}
    if(keys.d.pressed){player[0].velocity.x = speed.x;}

    if(player.length >=2){
        if(keys.h.pressed){player[1].velocity.x = -speed.x;}
        if(keys.k.pressed){player[1].velocity.x = speed.x;}
    }
}

function updateRain(){
    for(var t = 0; t < level.timeStamp.length; t++){
        if(timer >= level.timeStamp[t]){
            if(nbDrop[t] < level.allRain[t].length){
                level.allRain[t][nbDrop[t]].draw(ctx);
                nbDrop[t]++;
            }
        }
    }

    for(var i = 0; i < level.allRain.length; i++){
        
        if(nbDrop[i] < level.allRain[i].length && nbDrop[i] >= 3){
            var fall = nbDrop[i] -3;

            level.allRain[i][fall].draw(ctx);
            level.allRain[i][fall].givespeed(level.direction[i][fall].up, level.direction[i][fall].down, level.direction[i][fall].left, level.direction[i][fall].right);
            level.allRain[i][fall].update();
        }

        if(nbDrop[i] == level.allRain[i].length && lastDrop[i] > 0){
            var fall = nbDrop[i] - lastDrop[i];

            level.allRain[i][fall].draw(ctx);
            level.allRain[i][fall].givespeed(level.direction[i][fall].up, level.direction[i][fall].down, level.direction[i][fall].left, level.direction[i][fall].right);
            level.allRain[i][fall].update();
            lastDrop[i]--;
        }
    }
}

function updateSeeker(){
    for(var i =0; i < level.seeker.length; i++){
        if(timer >= level.seekerTimeStamp[i]){
            nbSeeker[i] = level.seeker[i].length;
            for(var j = 0; j < level.seeker[i].length; j++){
                level.seeker[i][j].draw(ctx);
            }
        }
    }
}


function runGame(){

    /*
    var music = new Music();
    music.playMusic();*/

    stopIntervale();

    timer = 0;
    interval1 = setInterval(function(){
        timer++;
        if(timer == 20){
            var levelText = document.getElementById("hubGameText");
            var text = document.createElement("h2");
            text.innerHTML = "Level " + levelSelected + " cleared !";
            var nextButton = document.createElement("button");
            nextButton.innerHTML = "Next level";
            nextButton.id = "nextButton";
            levelText.appendChild(text);
            levelText.appendChild(nextButton);
            nextButton.addEventListener("click",function(){
                levelText.removeChild(text);
                levelText.removeChild(nextButton);
                levelSelected++;
                var hubTextContainer = document.getElementById("hubTextContainer");
                hubTextContainer.innerHTML = "Level " + levelSelected; 
                initGame();
            });
            }
        },1000);
    interval2 = setInterval(updateRain,250);

    interval3 = setInterval(updateSeeker,100);

    music.rainDeath.volume = volumeValue;
    level.sfxVolume = volumeValue;


    animationid = animatePlayer();

}

////////////////////////////////////////////////////
// Animation
function animatePlayer(){
    stopAnimation();
    music.rainDeath.volume = volumeValue;
    level.sfxVolume = volumeValue;
    music.missile.volume = volumeValue;

    ctx.save();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = '20px Arial';

    // Draw the timer text
    ctx.fillText(`Time: ${timer}s`, 10, 30);

    for(var i = 0; i < player.length; i++){
        player[i].draw(ctx);
        player[i].update();
    }

    movingPlayer();
    level.draw(ctx);
    level.collisionPlatforme();
    if(level.collisionPlayer() || checkPlayerDead()){
        stopIntervale();
        stopAnimation();
        animeteRain();
        console.log('Game over');
        gameOver();
    }

    else{
        animeteRain();
        animeteSeeker();

        ctx.restore();
        animationid = window.requestAnimationFrame(animatePlayer);
    }

   
}

function animeteRain(){ 
    for(var i = 0; i < level.allRain.length; i++){   
        for(var j = 0; j < nbDrop[i]; j++){
            level.allRain[i][j].draw(ctx);
            level.allRain[i][j].update();
        }
    }
}

function animeteSeeker(){
    
    for(var i =0; i < level.seeker.length; i++){
        if(nbSeeker[i] == level.seeker[i].length){
            for(var j = 0; j < level.seeker[i].length; j++){
                level.seeker[i][j].drawed = true;
                level.seeker[i][j].draw(ctx);
                level.seeker[i][j].update(player);
                if(level.seekerTimeStamp[i] + level.seeker[i][j].lifetime == timer){
                    level.seeker[i][j].dead = true; 
                    level.seeker[i][j].killZone(player);
                    music.playMissile();
                }
                if(level.seekerTimeStamp[i] + level.seeker[i][j].lifetime +1 == timer){
                    level.seeker[i][j].lifetime = -1;
                }
            }
        }
    }
}

function gameOver(){
    var hubGameText = document.getElementById("hubGameText");
    var text = document.createElement("h2");
    text.innerHTML = "Game Over";
    hubGameText.appendChild(text);

    var restartButton = document.createElement("button");
    restartButton.innerHTML = "Restart";
    restartButton.id = "restartButton";
    hubGameText.appendChild(restartButton);
    restartButton.addEventListener("click",function(){
        hubGameText.removeChild(text);
        hubGameText.removeChild(restartButton);
        initGame();
    });
}


////////////////////////////////////////////////////
window.addEventListener('keydown', function(event){
    //console.log(event.key);
    switch (event.key){
        case 'z':
            if(player[0].velocity.y == player[0].velocity.gravityY || player[0].velocity.y == 0){
                console.log('jump');
                player[0].velocity.y = -speed.y;
                break;
            }
            break;

        case 'q':
            player[0].verifStop = false;
            keys.q.pressed = true; 
            break;

        case 'd':
            player[0].verifStop = false; 
            keys.d.pressed = true;
            break;

        case 'h':
            player[1].verifStop = false;
            keys.h.pressed = true; 
            break;
        
        case 'k':
            player[1].verifStop = false; 
            keys.k.pressed = true;
            break;

            case 'u':
                if(player[1].velocity.y == player[1].velocity.gravityY || player[1].velocity.y == 0){
                    console.log('jump');
                    player[1].velocity.y = -speed.y;
                    break;
                }
                break;
    } 
});

window.addEventListener('keyup', function(event){
    switch (event.key){
        case 'q':
            //console.log('q')
            player[0].verifStop = true;
            keys.q.pressed = false;
            break;

        case 'd':
            //console.log('d')
            player[0].verifStop = true;
            keys.d.pressed = false;
            break;
        
        case 'h':
            player[1].verifStop = true;
            keys.h.pressed = false;
            break;
        
        case 'k':
            player[1].verifStop = true;
            keys.k.pressed = false;
            break;
            
    }
});



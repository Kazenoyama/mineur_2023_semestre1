class Music{

    constructor(){
        this.background = new Audio('/music/background1.mp3');
        this.rainDeath = new Audio('/music/rainDeath.mp3');
        this.missile = new Audio('/music/missile.mp3');
    }

    playMusic(){
        this.background.play();
    }

    stopMusic(){
        this.background.pause();
    }

    playRainDeath(){
        this.rainDeath.play();
    }

    playMissile(){
        this.missile.play();
    }
}
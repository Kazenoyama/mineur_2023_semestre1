class Level{

    constructor(player){
        this.player = player;
        this.platformes = [];
        this.allRain = [];
        this.direction = [];
        this.timeStamp = [];
        this.seeker = [];
        this.sfxVolume = 0.5;
        this.seekerTimeStamp = [];
    }

    /////////////////////////

    level1(){
        console.log("init du level 1")

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the platformes
        console.log('Init of the platformes');
        this.platformes.push(new Platforme(0, 64*4, 500, 20, 'black'));
        this.platformes.push(new Platforme(64*5, 64*6, 300, 20, 'orange'));
        console.log('Init of the platformes done\nNumber of plateform :',this.platformes.length);
        //End init of the platformes
        ////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the rain
        console.log('Init of the rain');
        this.makeItRain(20, {x:5,y:5},false, true, false, false,false);         
        this.makeItRain(3, {x:800,y:64*8},false, false, true, false,true);      
        this.makeItRain(5, {x:800,y:5},false, false, true, false,false);        
        this.makeItRain(6, {x:5,y:64*8},false, false, false, true,true);      

        this.makeItRain(20, {x:5,y:64*8},true, false, false, false,false);       
        console.log('Init of the rain done\nNumber of rain :',this.allRain.length);
        //End init of the rain
        ////////////////////////////////////////////////////////////////////////////////////////////

        this.timeStamp.push(2);
        this.timeStamp.push(10);
        this.timeStamp.push(10);
        this.timeStamp.push(12);
        this.timeStamp.push(12);
    }

    level2(){
        console.log("init du level 2")

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the platformes
        console.log('Init of the platformes');
        this.platformes.push(new Platforme(0, 64*5, 250, 20, 'black')); //platforme to spawn
        this.platformes.push(new Platforme(64*8, 64*5, 64*5, 20, 'black')); //platforme to go

        this.platformes.push(new Platforme(64*9, 64*2, 64*4, 20, 'orange'));

        console.log('Init of the platformes done\nNumber of plateform :',this.platformes.length);
        //End init of the platformes
        ////////////////////////////////////////////////////////////////////////////////////////////
        this.makeItRain(20, {x:5,y:5},false, true, false, false,false);
        this.makeItRain(8, {x:5,y:64*8},false, false, false, true,true);
        this.makeItRain(8, {x:900,y:5},false, false, true, false,false);

        this.makeItRain(8, {x:5,y:64*8},false, false, false, true,true);
        
        this.timeStamp.push(1);
        this.timeStamp.push(5);
        this.timeStamp.push(10);
        this.timeStamp.push(11);


    }

    level3(){
        console.log("init du level 3")

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the platformes
        console.log('Init of the platformes');
        this.platformes.push(new Platforme(64*5, 64*6, 300, 20, 'orange'));
        console.log('Init of the platformes done\nNumber of plateform :',this.platformes.length);
        //End init of the platformes
        ////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////
        // Init of the rain
        this.makeItRain(20, {x:900,y:5},false, true, false, false,true);
        this.makeItRain(6, {x:5,y:64*8},false, false, false, true,true);
        this.makeItRain(20, {x:5,y:5},false, true, false, false,false);

        //this.makeItRain(8, {x:5,y:64*8},false, false, false, true,true);
        
        this.timeStamp.push(1);
        this.timeStamp.push(8);
        this.timeStamp.push(10);

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the Seeker
        console.log('Init of the Seeker');
        this.makeSeeker(3,500, 500);
        this.makeSeeker(6,400, 400);
        this.makeSeeker(1,300, 300);
        this.makeSeeker(2,300, 300);

        this.seekerTimeStamp.push(2);
        this.seekerTimeStamp.push(8);
        this.seekerTimeStamp.push(14);
        this.seekerTimeStamp.push(15);
        console.log('Init of the Seeker done');

    }

    level4(){
        console.log("init du level 3")

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the platformes
        console.log('Init of the platformes');
        console.log('Init of the platformes done\nNumber of plateform :',this.platformes.length);
        //End init of the platformes
        ////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////
        // Init of the rain
        this.makeItRain(18, {x:5,y:5},false, true, false, false,false);
        this.makeItRain(18, {x:1000,y:5},false, true, false, false,true);

        this.makeItRain(3, {x:5,y:64*8},false, false, false, true,true);

        this.timeStamp.push(1);
        this.timeStamp.push(7);
        this.timeStamp.push(13);

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the Seeker
        console.log('Init of the Seeker');
        this.makeSeeker(20,5, 200);

        this.seekerTimeStamp.push(16);

        console.log('Init of the Seeker done');
    }

    level5(){
        console.log("init du level 1")

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the platformes
        console.log('Init of the platformes');
        this.platformes.push(new Platforme(0, 64*2, 500, 20, 'black'));
        this.platformes.push(new Platforme(500, 64*4, 600, 20, 'green'));
        this.platformes.push(new Platforme(0, 64*6, 500, 20, 'blue'));
        console.log('Init of the platformes done\nNumber of plateform :',this.platformes.length);
        //End init of the platformes
        ////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the rain
        console.log('Init of the rain'); 
        this.makeItRain(3, {x:5,y:5},false, false, false, true,false);
        this.makeItRain(3, {x:900,y:150},false, false, true, false,false);
        this.makeItRain(3, {x:5,y:300},false, false, false, true,false);

        this.makeItRain(5, {x:900,y:64*8},false, false, true, false,true);
        this.makeItRain(5, {x:5,y:64*8},false, false, false, true,true);
        this.makeItRain(20, {x:900,y:5},false, true, false, false,true);
        this.makeItRain(3, {x:5,y:300},false, false, false, true,false);
        this.makeItRain(20, {x:900,y:64*8},true, false, false, false,true);
        this.makeItRain(3, {x:5,y:5},false, false, false, true,false);
        this.makeItRain(3, {x:900,y:150},false, false, true, false,false);
        this.makeItRain(3, {x:5,y:300},false, false, false, true,false);


        console.log('Init of the rain done\nNumber of rain :',this.allRain.length);
        //End init of the rain
        ////////////////////////////////////////////////////////////////////////////////////////////

            ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the Seeker
        console.log('Init of the Seeker');
        this.makeSeeker(2,500, 300);
        this.makeSeeker(5,400, 64*8);


        this.seekerTimeStamp.push(4);
        this.seekerTimeStamp.push(8);

        console.log('Init of the Seeker done');

        this.timeStamp.push(1);
        this.timeStamp.push(1);
        this.timeStamp.push(1);
        this.timeStamp.push(3);
        this.timeStamp.push(5);
        this.timeStamp.push(8);
        this.timeStamp.push(9);  
        this.timeStamp.push(11); 
        this.timeStamp.push(14);
        this.timeStamp.push(14); 
        this.timeStamp.push(14);  

    }

    level6(){
        console.log("init du level 1")

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the platformes
        console.log('Init of the platformes');
        this.platformes.push(new Platforme(64*3, 64*4, 600, 20, 'green'));
        this.platformes.push(new Platforme(0, 64*6, 150, 20, 'blue'));
        this.platformes.push(new Platforme(64*5, 64*6, 150, 20, 'blue'));
        this.platformes.push(new Platforme(64*10, 64*6, 150, 20, 'blue'));
        this.platformes.push(new Platforme(64*14, 64*6, 150, 20, 'blue'));
        console.log('Init of the platformes done\nNumber of plateform :',this.platformes.length);
        //End init of the platformes
        ////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the rain
        console.log('Init of the rain'); 
        this.makeItRain(8, {x:900,y:64*6},false, false, true, false,true);
        this.makeItRain(20, {x:5,y:5},false, true, false, false,false);

        this.makeItRain(3, {x:5,y:64*7},false, false, false, true,false);
        this.makeItRain(8, {x:900,y:64*6},false, false, true, false,true);

        this.makeItRain(3, {x:900,y:64*7},false, false, true, false,false);
        this.makeItRain(3, {x:900,y:64*7},false, false, true, false,false);
        this.makeItRain(3, {x:900,y:64*7},false, false, true, false,false);
        this.makeItRain(3, {x:900,y:64*7},false, false, true, false,false);

        this.makeItRain(5, {x:900,y:64*6},false, false, true, false,true);
        this.makeItRain(6, {x:900,y:64*6},false, false, true, false,true);



        this.timeStamp.push(1);
        this.timeStamp.push(3);
        this.timeStamp.push(3);
        this.timeStamp.push(4);
        this.timeStamp.push(5);
        this.timeStamp.push(8);
        this.timeStamp.push(10);
        this.timeStamp.push(12);
        this.timeStamp.push(11);
        this.timeStamp.push(13);


        console.log('Init of the rain done\nNumber of rain :',this.allRain.length);
        //End init of the rain
        ////////////////////////////////////////////////////////////////////////////////////////////

            ////////////////////////////////////////////////////////////////////////////////////////////
        //Init of the Seeker
        console.log('Init of the Seeker');

        this.makeSeeker(2,500, 300);
        this.seekerTimeStamp.push(4);

        this.makeSeeker(20, 300,5);
        this.seekerTimeStamp.push(8);

        console.log('Init of the Seeker done');



    }

    /////////////////////////

    levelLoad(level){
        if(level == 1){
            this.level1();
        }
        if(level == 2){
            this.level2();
        }

        if(level == 3){
            this.level3();
        }

        if(level == 4){
            this.level4();
        }

        if(level == 5){
            this.level5();
        }

        if(level == 6){
            this.level6();
        }
    }

    /////////////////////////

    makeItRain(numberofDrop, positionFirst, up, down, left, right,goToLeft){
        var temporaryR = [];
        var spacing,height,width;
        var temporaryDirection = [];
        if(up || down){
            spacing = 50;
            height = 50;
            width = 25;
            
        }

        if(left || right){
            spacing = 50;
            height = 25;
            width = 50;
        }

        for(var i = 0; i < numberofDrop; i++){
            temporaryR.push(new Rain(positionFirst.x, positionFirst.y, width, height));
            if(goToLeft){
                if(up || down){positionFirst.x -= spacing;}
                if(left || right){positionFirst.y -= spacing;}
            }
            else{
                if(up || down){positionFirst.x += spacing;}
                if(left || right){positionFirst.y += spacing;}
            }
            
            temporaryDirection.push({up: up, down: down, left: left, right: right});
            
        }

        
        this.allRain.push(temporaryR);
        this.direction.push(temporaryDirection);
    }

    makeSeeker(nbSeeker, x, y){
        var temporarySeeker = [];
        var spacing = 50;
        for(var i =0; i < nbSeeker; i++){
            temporarySeeker.push(new Seeker(x,y));
            x += spacing;
        }
        this.seeker.push(temporarySeeker);
    }

    collisionPlatforme(){
        //Plateforme-player
        for(var playerNb = 0; playerNb < this.player.length; playerNb++){
            for(var i = 0; i < this.platformes.length; i++){
                if(this.platformes[i].collision(this.player[playerNb])){
                }
            }
        }

        //Plateforme-rain
        for(var r=0; r < this.allRain.length; r++){
            for(var drop=0; drop < this.allRain[r].length; drop++){
                this.allRain[r][drop].m.rainDeath.volume = this.sfxVolume;
                for(var p in this.platformes){
                    if(this.allRain[r][drop].checkAllCollision(this.platformes[p])){
                    }
                }
            }
        }
    }

    collisionPlayer(){
        for(var playerNb = 0; playerNb < this.player.length; playerNb++){
            for (var rain=0; rain < this.allRain.length; rain++){
                for(var drop=0; drop < this.allRain[rain].length; drop++){
                    if(this.allRain[rain][drop].checkCollisionPlayer(this.player[playerNb])){
                        this.player[playerNb].dead = true;
                        return true;

                    }
                }
            }
        }
    }

    draw(ctx){
        for(var i in this.platformes){
            this.platformes[i].draw(ctx);
        }
    }






}
class Seeker{

    constructor(x,y){
        this.width = 20;
        this.height = 20;
        this.position = {
            x : x,
            y : y,
        }
        this.speed = {
            x : 0,
            y : 0,
        }

        this.maxSpeed = 5;
        this.velocity = {
            x: 0.1,
            y: 0.1,
        };

        this.friction = 0.2;

        this.side = {
            top : this.y,
            bottom : this.y+this.height,
            left : this.x,
            right : this.x+this.width,
        }
        this.lifetime = 4;
        this.dead = false;
        this.drawed = false;
        this.killEffect = true;
    }

    collisionPlateforme(plateforme){

    }

    draw(ctx){
        if(!this.dead && this.drawed){
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        if(this.dead && this.lifetime != -1 ){
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(this.position.x+this.width/2, this.position.y+this.height/2, 75, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    seek(player){
        this.player = player;
        var midX = this.player.position.x + this.player.width/2 - this.width/2;
        var midY = this.player.position.y + this.player.height/2 - this.height/2;


        if(midX > this.position.x){
            if(this.speed.x < 0){this.speed.x += this.friction;}
            else{
                this.speed.x += this.velocity.x;
            }
            
        }
        else{
            if(this.speed.x > 0){this.speed.x -= this.friction;}
            else{this.speed.x -= this.velocity.x;}}

        if(midY >  this.position.y){
            if(this.speed.y < 0){this.speed.y += this.friction;}
            else{
            this.speed.y += this.velocity.y;}
        }
        else{
            if(this.speed.y > 0){this.speed.y -= this.friction;}
            else{
            this.speed.y -= this.velocity.y;}}

        if(this.speed.x > this.maxSpeed){this.speed.x = this.maxSpeed;}
        if(this.speed.y > this.maxSpeed){this.speed.y = this.maxSpeed;}
        if(this.speed.x < -this.maxSpeed){this.speed.x = -this.maxSpeed;}
        if(this.speed.y < -this.maxSpeed){this.speed.y = -this.maxSpeed;}
    }

    move(){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

    update(player){
        if(this.getAplayer(player) && !this.dead){
            this.seek(this.getAplayer(player));
            this.move();
            }
        
    }

    calculerDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    getAplayer(player){

        var r = 350;
        var dis1;
/*
        this.side = {                                       // Player sides to check collision later
            bottom: this.position.y + this.height,
            top: this.position.y,
            left: this.position.x,
            right: this.position.x + this.width
        }*/

        for(let i = 0; i < player.length; i++){
            dis1 = this.calculerDistance(this.position.x, this.position.y, player[i].position.x, player[i].position.y);

            if(dis1 < r){
                return player[i];
            }
        }

    }

    killZone(player){
            for(var p = 0; p < player.length; p++){
                if(this.calculerDistance(this.position.x, this.position.y, player[p].position.x, player[p].position.y) <= 75){
                    player[p].dead = true;
                }
            }
    }


}
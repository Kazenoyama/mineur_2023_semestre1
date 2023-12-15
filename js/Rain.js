class Rain{

    constructor(x, y, width, height){
        this.position = {
            x: x,
            y: y
        }
        this.width = width;
        this.height = height;
        this.speed = {x: 0, y: 0};
        this.sp = 2;
        this.side = {
            bottom: this.position.y + this.height,
            top: this.position.y,
            left: this.position.x,
            right: this.position.x + this.width
        };
        this.drawned = false;
        this.dead = false;
        this.m = new Music();
        this.m.rainDeath.volume = 0.5;
    }

    draw(ctx){
        if(!this.dead){
            ctx.fillStyle = 'orange';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    move(){
        this.position.y += this.speed.y;
        this.position.x += this.speed.x;
        this.drawned = true;
        this.sideupdate();
    }

    givespeed(up,down,left,right){
        if(up){
            this.speed.y = -this.sp;
        }
        if(down){
            this.speed.y = this.sp;
        }
        if(left){
            this.speed.x = -this.sp;
        }
        if(right){
            this.speed.x = this.sp;
        }
    }

    checkAllCollision(plateformes){
        
        this.checkCollisionBorder();
        this.checkCollisionPlatforme(plateformes);
    }

    checkCollisionPlayer(player){

        if(this.drawned && !this.dead){
            //Bottom
            if(
                this.side.bottom >= player.side.top &&
                this.side.bottom <= player.side.bottom &&
                this.side.left <= player.side.right &&
                this.side.right >= player.side.left
                ){
                    this.speed.y = 0;
                    this.speed.x = 0;
                    return true;
            }

            //Top
            if(
                this.side.top <= player.side.bottom &&
                this.side.top >= player.side.top &&
                this.side.left <= player.side.right &&
                this.side.right >= player.side.left
                ){
                    this.speed.y = 0;
                    this.speed.x = 0;
                    return true;
            }

            //side
            if(
                this.side.left <= player.side.right &&
                this.side.left >= player.side.left &&
                this.side.top <= player.side.bottom &&
                this.side.bottom >= player.side.top
                ){
                    this.speed.y = 0;
                    this.speed.x = 0;
                    return true;
            }
        }

        return false;


    }

    checkCollisionPlatforme(plateformes){
        
        if(this.drawned && !this.dead){
            //Bottom
            if(
            this.side.bottom >= plateformes.position.y &&
            this.side.bottom <= plateformes.position.y + plateformes.height &&
            this.side.left <= plateformes.position.x + plateformes.width &&
            this.side.right >= plateformes.position.x
            ){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();
                return true;
            }

            //Top
            if(
            this.side.top <= plateformes.position.y+plateformes.height &&
            this.side.top >= plateformes.position.y &&
            this.side.left <= plateformes.position.x + plateformes.width &&
            this.side.right >= plateformes.position.x
            ){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();
                return true;
            }

            //side
            if(
                this.side.left <= plateformes.position.x + plateformes.width &&
                this.side.left >= plateformes.position.x &&
                this.side.top <= plateformes.position.y + plateformes.height &&
                this.side.bottom >= plateformes.position.y
            ){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();
                return true;
            }
        }
        return false;
    }

    checkCollisionBorder(){
        if(this.drawned && !this.dead){
            var canvas = document.getElementById('canvas');
            var border = {width :canvas.width, height: canvas.height};
            
            if(this.side.bottom >= border.height){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();
                return true;
            }

            if(this.side.top <= 0){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();
                return true;
            }
            
            if(this.side.left <= 0){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();
                return true;
            }

            if(this.side.right >= border.width){
                this.speed.y = 0;
                this.speed.x = 0;
                this.dead = true;
                this.m.playRainDeath();   
                return true;
            }
        }
        return false;
        
    }

    sideupdate(){
        this.side = {
            bottom: this.position.y + this.height,
            top: this.position.y,
            left: this.position.x,
            right: this.position.x + this.width
        }
    }



    update(){
        this.move();
        this.checkCollisionBorder();
    }
    
}
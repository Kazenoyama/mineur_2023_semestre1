class Player{
    constructor(name, color,canvas){
        this.name = name;                                   // Player name
        this.color = color;                                 // Player color
        this.position = {x: 0, y: 0};                       // Player position
        this.width = 64;
        this.height = 64;
        this.side = {                                       // Player sides to check collision later
            bottom: this.position.y + this.height,
            top: this.position.y,
            left: this.position.x,
            right: this.position.x + this.width
        }
        this.velocity = {x: 0, y: 0,gravityY: 0.4 ,friction: 0.2};           // Player velocity to make gravity
        this.canvas = canvas;
        this.verifStop = false;                                // Wants to know when to call stopMoving() 
        this.dead = false;                      
    }

    //Draw the player
    draw(ctx){
        if(!this.dead){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    //Update the player sides
    sideUpdate(){
        this.side = {
            bottom: this.position.y + this.height,
            top: this.position.y,
            left: this.position.x,
            right: this.position.x + this.width
        }
    }


    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.sideUpdate();
    }

    fallUpdate(){

        //Make the Player fall
        if(this.side.bottom < this.canvas.height){
            this.velocity.y += this.velocity.gravityY;
  
        }

        //Make the player stop falling when it hits the ground
        if(this.side.bottom >= this.canvas.height){
            this.velocity.y = 0;
            this.position.y = this.canvas.height - this.height;
            
        }
        
        //Make the player fall when he is jumping
        if(this.velocity.y <  0){
            this.velocity.y += this.velocity.gravityY;
        }
    }

    stopMoving(){
        if(this.velocity.x > 0){
            this.velocity.x -= this.velocity.friction;
        }

        if(this.velocity.x < 0){
            this.velocity.x += this.velocity.friction;
        }

        if(this.velocity.x < 0.2 || this.velocity.x > -0.2){
            this.velocity.x = 0;
        }

        this.sideUpdate();
    }

    collisionUpdateSide(){
        //Right side collision
        if(this.side.right >= this.canvas.width){
            this.velocity.x = 0;
            this.position.x = this.canvas.width - this.width;
            this.sideUpdate();
            this.verifStop = true;
        }

        //Left side collision
        if(this.side.left <= 0){
            this.velocity.x = 0;
            this.position.x = 0;
            this.sideUpdate();
            this.verifStop = true;
        }

        //Top side collision
        if(this.side.top <= 0){
            this.position.y = 0;
            this.sideUpdate();
        }
    }

    update(){

        this.move();
        this.fallUpdate();
        this.collisionUpdateSide();
        if(this.verifStop){
            this.stopMoving();
        }

        this.sideUpdate();
    }

    
}




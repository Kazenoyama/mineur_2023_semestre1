class Platforme{

    constructor(x,y,width,height,color){
        this.position = {
            x: x,
            y: y
        }
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //Draw the platforme
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    collision(player){
        var plB = player.side.bottom;
        var plR = player.side.right;
        var plL = player.side.left;
        var plT = player.side.top;

        //Make possible to be on the platforme
        if(plB >= this.position.y && plL <= this.position.x + this.width && plR >= this.position.x && plT < this.position.y)
            {
                player.position.y = this.position.y - player.height;
                if(player.velocity.y > 0){
                    player.velocity.y = 0;
                }
                
                player.sideUpdate();
        }

        //Make Impossible to go through the platforme
        if(plB > this.position.y + this.height && plL <= this.position.x + this.width && plR >= this.position.x && plT < this.position.y +this.height )
            {
                player.position.y = this.position.y + this.height;
                if(player.velocity.y < 0){
                    player.velocity.y = 0;
                }
                
                player.sideUpdate();
        }
        
    }
}
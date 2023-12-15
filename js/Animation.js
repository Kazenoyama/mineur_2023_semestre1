class Animation{

    constructor(position){
        this.position = position;
    }

    draw(ctx){
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    rainDeath(ctx){
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
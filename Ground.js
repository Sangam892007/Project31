class Ground{
    constructor(x,y,height,width){
        var options = {
            restitution:0.4,
            friction:1,
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,height,width,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        fill("Brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.height,this.width);
            


       
    };
}
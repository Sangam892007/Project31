class Particle{
    constructor(x,y){
        var options = {
            restitution:0.8,
            isStatic:false
        };
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,10);
            


       
    };
}
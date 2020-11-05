class Plinko{
    constructor(x,y){
        var options = {
            restitution:0.8,
            isStatic:true
        };
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        fill("White");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,10);
            


       
    };
}
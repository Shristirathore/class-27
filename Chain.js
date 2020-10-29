class Chain{
constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.09,
        lenght:10
    }
    this.chain=Constraints.create(options);
World.add(world,this.chain);

}
display() {
var startPoint=this.chain.bodyA.position;
var endPoint=this.chain.bodyB.position;
line(startPoint.x,startPoint.y,endPoint.x,endPoint.y)
}



}
class Paper{

	constructor(x,y,width,height){

 var options={
 	isStatic:false,
 	restitution:0.3,
 	friction:0,
 	density:1.2}
 
 this.body = Bodies.rectangle(x,y,width,height,options)
 World.add(world,this.body)
 this.image=loadImage("paper.png")
}

display(){
push();
translate(this.body.position.x,this.body.position.y)
//rotate(this.body.angle)
//imageMode(CENTER)
//image(this.image,0,0)
rectMode(CENTER)
rect(0,0,50,100)
pop()

}

  
}
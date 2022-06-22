class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonbase=loadImage("assets/cannonBase.png")
  this.cannonImage=loadImage("assets/canon.png")
  }
  show(){
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    image(this.cannonImage,0,0,this.width,this.height)
    pop()
   image(this.cannonbase,70,25,200,200)
  }
}

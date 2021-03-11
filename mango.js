class Mango {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStactic:true
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = radius;
      this.height = radius;
      this.image = loadImage("mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var  angle = this.body.angle;
     push ();
     translate (pos.x,pos.y);
     rotate (angle);
      imageMode(CENTER);
      fill("blue");
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };
  
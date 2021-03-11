class Tree {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic : true
      }
      this.body = Bodies.rectangle(1050,580,450,680, options);
      this.width = 450;
      this.height = 680;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("green");
      image(pos.x, pos.y, this.width, this.height);
      
    }
  }
  
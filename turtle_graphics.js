<script src="https://koda.nu/simple.js">
  // Flower patterns using turtle graphics.
  
  // A tiny and invisible but unusually artistic turtle.
  class Turtle {
    constructor(x, y, v, c) {
      this.x = x;
      this.y = y;
      this.v = v;
      this.c = c;
      
      // Rotate v degrees.
      this.rotate = function(v) {
        this.v += v;
      }
      
      // Move forward d pixels, drawing a line along the path.
      this.move = function(d) {
        var vd = 2.0 * Math.PI * this.v / 360.0;
        
        var dx = d * Math.cos(vd);
        var dy = d * Math.sin(vd);
        
        line(this.x, this.y, this.x + dx, this.y + dy, 2, this.c);
        
        this.x += dx;
        this.y += dy;
      }
    }
  }
  
  // Our four main characters:
  var turtleA = new Turtle(530, 290, 0, "#555555"); // Don
  var turtleB = new Turtle(210, 130, 0, "#BB5555"); // Mikey
  var turtleC = new Turtle(290, 360, 0, "#33AAAA"); // Leo
  var turtleD = new Turtle(320, 398, 0, "#DDBB44"); // Raph
  
  // Start turtling with delay:
  var turtleADelay = 1.0;
  var turtleBDelay = 9.0;
  var turtleCDelay = 6.0;
  var turtleDDelay = 12.0;
  
  var i = 0;
  
  // Demo (play around with values to make trippy patterns):
  function update() {
    fill("#FFFFFF01"); // Fade old lines over time.
    
    if (i > turtleADelay * 2 * Math.PI) {
      turtleA.move(15 * (Math.cos(i)));
      turtleA.rotate(-10 * (0.5 + Math.cos(2 * i) + Math.sin(i)));
    }
    
    if (i > turtleBDelay * 2 * Math.PI) {
      turtleB.move(10 * Math.cos(i));
      turtleB.rotate(10 * (0.5 + Math.cos(2 * i) + Math.sin(i)));
      turtleB.move(10 * (Math.cos(i)));
      turtleB.rotate(10 * (0.5 + Math.cos(2 * i) + Math.sin(i)));
    }
    
    if (i > turtleCDelay * 2 * Math.PI) {
      turtleC.move(7 + 21 * Math.sin(2 * Math.cos(i)));
      turtleC.rotate(10 * (0.5 + Math.cos(2 * i) + Math.sin(i)));
    }
    
    if (i > turtleDDelay * 2 * Math.PI) {
      turtleD.move(2.5 * (2 + Math.cos(0.2 + Math.sin(i))));
      turtleD.rotate(5 * (1.5 + Math.cos(i)) + 2.5 * Math.sin(1 + Math.sin(i)) * Math.cos(2 * i));
    }
    
    i += 0.2;
  }

</script>
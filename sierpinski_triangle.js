<script src="https://koda.nu/simple.js">
  // Sierpinski triangle using random points.
  
  const X = 0;
  const Y = 1;
  
  var width = 500;
  var height = Math.sqrt(Math.pow(width, 2.0) - Math.pow(width / 2.0, 2.0));
  var dx = 100.0;
  var dy = 100.0;
  
  // Vertices of outer triangle:
  var vertices = [
    [dx, dy + height],
    [dx + width, dy + height],
    [dx + width / 2.0, dy]
  ];
  
  // Draw outer triengle:
  for (var i = 0; i < 3; i++)
    circle(vertices[i][X], vertices[i][Y], 2, "black");
  
  // Pick a random point A:
  var a = [dx + Math.random() * width, dy + Math.random() * height];
  
  function update() {
    // Pick a random vertex B from outer triangle:
    var b = vertices[Math.floor(Math.random() * 3)];
    
    // Find mid-point M between A and B:
    var m = [a[X] + (b[X] - a[X]) / 2.0, a[Y] + (b[Y] - a[Y]) / 2.0];
    
    // Draw M:
    circle(m[X], m[Y], 1, "red");
    
    // Save M to A:
    a = m;
  }

</script>
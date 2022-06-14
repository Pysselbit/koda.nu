// 10x10 coordinate system:
<script src="https://koda.nu/simple.js">

  // Move origin and scale:
  translate(200, 200);
  scale(1.5, -1.5);
 
  // Vertical lines:
  for (var x = -100; x <= 100; x += 10) {
    if (x == 0)
      line(x, 100, x, -100, 1);
    else
      line(x, 100, x, -100, 0.2);
  }
 
  // Horizontal lines:
  for (var y = -100; y <= 100; y += 10) {
    if (y == 0)
      line(100, y, -100, y, 1);
    else
      line(100, y, -100, y, 0.2);
  }
 
  // Begin here:
  circle(20, 50, 15, "red");
  
</script>
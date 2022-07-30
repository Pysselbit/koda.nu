<script src="https://koda.nu/simple.js">
  // Star pattern.
  
  var n = 10; // Dot count.
  var l = 300; // Size.
  var d = l / n; // Increment.
  
  // Colors:
  var bgColor = "white";
  var lineColor = "gray";
  var dotColor = "red";

  translate(350, 350);
  fill(bgColor);
  
  // Draw lines:
  for (var i = 0; i <= n; i++) {
    var x = d * i;
    var y = l - x;
    
    line(x, 0, 0, y, 1, lineColor);
    line(x, 0, 0, -y, 1, lineColor);
    line(-x, 0, 0, y, 1, lineColor);
    line(-x, 0, 0, -y, 1, lineColor);
  }
  
  // Draw dots:
  for (var i = 0; i <= n; i++) {
    var x = d * i;
    var y = l - x;
    
    circle(x, 0, 2, dotColor);
    circle(0, y, 2, dotColor);
    circle(-x, 0, 2, dotColor);
    circle(0, -y, 2, dotColor);
  }
  
</script>
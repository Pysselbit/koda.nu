<script src="https://koda.nu/simple.js">
  // Hitomezashi stitch pattern, inspired by https://youtu.be/JbfhzlMk2eY

  var threshold = 0.5;
  var n = 20;
  var sizeX = 400;
  var sizeY = Math.sqrt(Math.pow(sizeX, 2.0) - Math.pow(sizeX / 2.0, 2.0));
  
  var ax = 50.0, ay = 400.0;
  var bx = ax + sizeX, by = ay;
  var cx = ax + sizeX / 2.0, cy = ay - sizeY;
  
  line(ax, ay, bx, by);
  line(bx, by, cx, cy);
  line(cx, cy, ax, ay);
  
  var abDeltaX = (bx - ax) / n;
  var abDeltaY = (by - ay) / n;
  var bcDeltaX = (cx - bx) / n;
  var bcDeltaY = (cy - by) / n;
  var caDeltaX = (ax - cx) / n;
  var caDeltaY = (ay - cy) / n;
  
  for (var i = 1; i < n; i++) {
    var shiftAB = Math.random() > threshold ? 1 : 0;
    var shiftBC = Math.random() > threshold ? 1 : 0;
    var shiftCA = Math.random() > threshold ? 1 : 0;
    
    var abStartX = ax + -caDeltaX * i;
    var abStartY = ay + -caDeltaY * i;
    var bcStartX = bx + -abDeltaX * i;
    var bcStartY = by + -abDeltaY * i;
    var caStartX = cx + -bcDeltaX * i;
    var caStartY = cy + -bcDeltaY * i;
    
    for (var j = 0; j < n - i; j++) {
      if (j % 2 == shiftAB)
        line(abStartX + abDeltaX * j,
             abStartY + abDeltaY * j,
             abStartX + abDeltaX * (j + 1.0),
             abStartY + abDeltaY * (j + 1.0));
      if (j % 2 == shiftBC)
        line(bcStartX + bcDeltaX * j,
             bcStartY + bcDeltaY * j,
             bcStartX + bcDeltaX * (j + 1.0),
             bcStartY + bcDeltaY * (j + 1.0));
      if (j % 2 == shiftCA)
        line(caStartX + caDeltaX * j,
             caStartY + caDeltaY * j,
             caStartX + caDeltaX * (j + 1.0),
             caStartY + caDeltaY * (j + 1.0));
    }
  }
  
</script>
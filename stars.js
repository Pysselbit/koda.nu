<script src="https://koda.nu/simple.js">
  // Stars of increasing point count.
 
  const NX = 6; // Column count.
  const NY = 6; // Row count.
  const R = 35; // Star radius.
 
  const PADDING = 10;
 
  // Draw NX * NY stars.
  for (var i = 0; i < NY; i++) {
    var cy = PADDING + R + i * (PADDING + 2 * R);
   
    for (var j = 0; j < NX; j++) {
      var cx = PADDING + R + j * (PADDING + 2 * R);
     
      var n = 4 * i + j;
     
      star(n + 3, R, cx, cy); // Start at 3 points.
    }
  }
 
  // Draw a star.
  function star(n, r, cx ,cy) {
    var xs = [];
    var ys = [];
   
    for (var i = 0; i < n; i++) {
      var v = 2 * Math.PI * (3 / 4 + i / n);
   
      var x = cx + r * Math.cos(v);
      var y = cy + r * Math.sin(v);
   
      xs.push(x);
      ys.push(y);
    }
 
    // Draw points:
    for (i = 0; i < n; i++) {
      circle(xs[i], ys[i], 3, "red");
    }
 
    // Draw connecting lines:
    for (i = 0; i < n; i++) {
      var j = Math.floor(i + (n / 2)) % n;
   
      if (n % 2 == 0)
        j = (j + 1) % n;
   
      var x1 = xs[i];
      var y1 = ys[i];
   
      var x2 = xs[j];
      var y2 = ys[j];
   
      line(x1, y1, x2, y2, 1);
    }
  }
 
</script>
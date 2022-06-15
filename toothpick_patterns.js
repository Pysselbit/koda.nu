<script src="https://koda.nu/simple.js">
  // Terrific toothpick patterns, inspired by https://www.youtube.com/watch?v=_UtCli1SgjI
  
  // Orientations:
  const HORIZONTAL = true;
  const VERTICAL = false;
  
  // N recursion:
  const N = 128;
  
  // Space needed for N recursions:
  var width = N + (N + 1) % 2;
  var height = N - (N + 1) % 2;
  
  // Shifts coordinates from [-size / 2, size / 2] to [0, size];
  var dx = Math.floor(width / 2);
  var dy = Math.floor(height / 2);
  
  // Queued operations, and matrix for registering placements:
  var queue = [];
  var queued = [];
  for (var x = 0; x < width; x++) {
    queued.push([]);
    
    for (var y = 0; y < height; y++) {
      queued[x].push(0);
    }
  }
  
  // Colors to cycle through:
  var colors = ["red", "orange", "yellow", "green", "cyan", "magenta"];
  var colorIndex = 0;
  
  fill("#000000ff");
  
  function update() {
    // Fade pattern over time:
    fill("#00000008");
    
    if (queue.length == 0) {
      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          queued[x][y] = 0;
        }
      }
      
      // Queue first operation:
      enqueue(0, 0, HORIZONTAL, N);
    
      colorIndex = (colorIndex + 1) % colors.length;
    }
    
    var n = queue[0].n;
    
    // Draw all lines of this recursion:
    while (queue.length > 0 && queue[0].n == n) {
      var toothpick = queue.shift();
      
      // If 2 toothpicks meet at the same coordinates, discard coordinates:
      if (queued[toothpick.x + dx][toothpick.y + dy] > 1)
        continue;
      
      var x1, x2, y1, y2;
      
      x1 = x2 = toothpick.x;
      y1 = y2 = toothpick.y;
      
      // Create horizontal line:
      if (toothpick.orientation == HORIZONTAL) {
        x1++;
        x2--;
      }
      
      // Or create vertical line:
      if (toothpick.orientation == VERTICAL) {
        y1++;
        y2--;
      }
      
      drawLine(x1, y1, x2, y2);
      
      // Enqueue new lines and the ends of this line:
      if (toothpick.n - 1 > 0) {
        enqueue(x1, y1, !toothpick.orientation, toothpick.n - 1);
        enqueue(x2, y2, !toothpick.orientation, toothpick.n - 1);
      }
    }
  }
  
  // Put recursions in queue.
  function enqueue(x, y, orientation, n) {
    queue.push({
      x: x,
      y: y,
      orientation: orientation,
      n: n
    });
    
    // Register these coordinates as queued:
    queued[x + dx][y + dy]++;
  }
  
  // Draw line with applied translation and scale.
  function drawLine(x1, y1, x2, y2) {
    const CX = 300;
    const CY = 300;
    
    const SIZE = 4;
    const SCALE = 0.5;
    
    var dx = (x2 - x1) * (1.0 - SCALE) / 2.0;
    var dy = (y2 - y1) * (1.0 - SCALE) / 2.0;
    
    x1 = CX + SIZE * (x1 + dx);
    y1 = CY + SIZE * (y1 + dy);
    x2 = CX + SIZE * (x2 - dx);
    y2 = CY + SIZE * (y2 - dy);
    
    line(x1, y1, x2, y2, 1, colors[colorIndex]);
  }

</script>
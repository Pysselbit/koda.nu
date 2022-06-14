<script src="https://koda.nu/simple.js">
  // Hitomezashi stitch pattern, inspired by https://youtu.be/JbfhzlMk2eY
  
  var threshold = 0.5;
  var n = 50;
  var size = 500 / n;

  for (var i = 0; i < n; i++) {
    var shiftX = Math.random() > threshold ? 1.0 : 0.0;
    var shiftY = Math.random() > threshold ? 1.0 : 0.0;
    
    for (var j = 0; j < n / 2; j++) {
      line(size * (2.0 * j + shiftX), size * i, size * (2.0 * j + 1.0 + shiftX), size * i);
      line(size * i, size * (2.0 * j + shiftY), size * i, size * (2.0 * j + 1.0 + shiftY));
    }
  }

</script>
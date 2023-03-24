<script src="https://koda.nu/simple.js">
// Sunflower seed pattern using the golden ratio.

  const N = 4000; // Seed count.
  const G = 137.50776405; // Golden ratio (in degrees)
  
  for (var i = 0; i < N; i++) {
    var r = 3 * Math.sqrt(i);
    var v = 2 * Math.PI * G * i / 360;
    
    var x = r * Math.cos(v);
    var y = r * Math.sin(v);
    
    circle(200 + x, 200 + y, 2);
  }

</script>
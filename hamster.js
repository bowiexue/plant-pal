(function() {
  var canvas = document.getElementById('hamsterCanvas');
  var ctx = canvas.getContext('2d');
  
  var choreMinutes = 0;
  var idleTicks = 0; // Tracks seconds elapsed with zero user dashboard actions
  var wheelRotation = 0;
  var animationFrame = 0;

  // Listen for activity clicks to reset the idle countdown loops
  window.addEventListener('mousedown', function() { idleTicks = 0; });
  window.addEventListener('mousemove', function() { idleTicks = 0; });

  window.triggerChoreBoost = function() {
    idleTicks = 0;
    choreMinutes += 15;
    if (choreMinutes > 60) choreMinutes = 60;
    document.getElementById('chore-time').innerText = choreMinutes + " mins";
  };

  function drawPixelBlock(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * 8, y * 8, w * 8, h * 8);
  }

  function renderWidget() {
    ctx.clearRect(0, 0, 128, 128);
    animationFrame++;

    var status = "IDLE";
    if (choreMinutes >= 60) {
      status = "RUNNING";
    } else if (idleTicks > 15) {
      status = "SAD";
    }
    document.getElementById('hamster-status').innerText = "STATUS: " + status;

    // Draw the pixel background grass line
    drawPixelBlock(0, 15, 16, 1, "#e6ccb2");

    if (status === "RUNNING") {
      // 1. RUNNING FRAME STATE
      wheelRotation += 0.3;
      
      // Draw spinning metal wire wheel arcs manually using structural lines
      ctx.strokeStyle = "#9c89b8";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(64, 72, 32, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw spokes moving inside the wheel center
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(64, 72);
      ctx.lineTo(64 + Math.cos(wheelRotation) * 32, 72 + Math.sin(wheelRotation) * 32);
      ctx.moveTo(64, 72);
      ctx.lineTo(64 - Math.cos(wheelRotation) * 32, 72 - Math.sin(wheelRotation) * 32);
      ctx.stroke();

      // Render running hamster body offset bobbing
      var bob = (animationFrame % 2) * 1;
      drawPixelBlock(6, 8 + bob, 4, 3, "#dda15e"); // Body torso
      drawPixelBlock(9, 7 + bob, 2, 2, "#fefae0"); // Head snout
      drawPixelBlock(5, 10 + bob, 1, 1, "#bc6c25"); // Back leg
      drawPixelBlock(9, 10 + bob, 1, 1, "#bc6c25"); // Front leg
      drawPixelBlock(10, 8 + bob, 1, 1, "#000000"); // Beady eye

    } else if (status === "SAD") {
      // 2. IDLE NEGLIGENT TAB REJECTION STATE
      // Render sad blue grey rainy sky cloud hovering over the hamster's spot
      drawPixelBlock(5, 1, 6, 2, "#bde0fe");
      drawPixelBlock(4, 2, 8, 1, "#bde0fe");
      
      // Animating procedural pixel teardrop rain down streams
      if (animationFrame % 2 === 0) {
        drawPixelBlock(5, 4, 1, 1, "#a2d2ff");
        drawPixelBlock(8, 6, 1, 1, "#a2d2ff");
        drawPixelBlock(10, 5, 1, 1, "#a2d2ff");
      } else {
        drawPixelBlock(6, 5, 1, 1, "#a2d2ff");
        drawPixelBlock(7, 4, 1, 1, "#a2d2ff");
        drawPixelBlock(9, 7, 1, 1, "#a2d2ff");
      }

      // Draw standard stationary wheel background lines
      ctx.strokeStyle = "#b0c4de";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(64, 72, 32, 0, Math.PI * 2);
      ctx.stroke();

      // Render sad sitting down slumped hamster body lines
      drawPixelBlock(6, 10, 4, 4, "#cdb4db"); // Slumped body torso
      drawPixelBlock(7, 9, 3, 2, "#cdb4db");  // Drooped head snout
      drawPixelBlock(8, 10, 1, 1, "#222222"); // Crying eye look dot
      drawPixelBlock(5, 12, 1, 1, "#9b5de5"); // Tucked foot stub

    } else {
      // 3. BASELINE COZY DEFAULT IDLE STATE
      // Draw standard resting grey wheel bounds ring outline structure
      ctx.strokeStyle = "#ccd5ae";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(64, 72, 32, 0, Math.PI * 2);
      ctx.stroke();

      // Render standard sleeping curled body blocks
      var breathe = Math.sin(animationFrame * 0.1) * 0.4;
      drawPixelBlock(6, 11, 4, 3 + breathe, "#e9c46a"); // Resting body mass block
      drawPixelBlock(5, 10, 2, 2, "#f4a261"); // Rounded head ear block
    }
  }

  // Monitor status counters over ongoing minute timeline interval updates
  setInterval(function() {
    idleTicks++;
    if (idleTicks > 20 && choreMinutes > 0) {
      choreMinutes -= 1; // Slowly drains chore credits away over pure radio silence periods
      document.getElementById('chore-time').innerText = choreMinutes + " mins";
    }
    renderWidget();
  }, 1000);

  // High refresh-rate smooth drawing animation pipeline handler loops
  setInterval(renderWidget, 150);
})();

(function() {
  var canvas = document.getElementById('hamsterCanvas');
  var ctx = canvas.getContext('2d');
  
  var choreMinutes = 0;
  var idleTicks = 0;
  var wheelRotation = 0;
  var animationFrame = 0;

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

    // Bed ground soil shelf line
    drawPixelBlock(0, 15, 16, 1, "#ebd9cc");

    if (status === "RUNNING") {
      wheelRotation += 0.4;
      
      // Wire wheel rim circle outer loop track
      ctx.strokeStyle = "#b388ff";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(64, 72, 34, 0, Math.PI * 2);
      ctx.stroke();
      
      // Spinner wheel wire core beams
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(64, 72);
      ctx.lineTo(64 + Math.cos(wheelRotation) * 34, 72 + Math.sin(wheelRotation) * 34);
      ctx.moveTo(64, 72);
      ctx.lineTo(64 - Math.cos(wheelRotation) * 34, 72 - Math.sin(wheelRotation) * 34);
      ctx.stroke();

      // BOBBING HIGH-SPEED RUNNING DWARF HAMSTER MODEL
      var bob = (animationFrame % 2) * 1;
      var ox = 4; 
      var oy = 7 + bob;

      drawPixelBlock(ox+2, oy+2, 5, 4, "#d4a373"); // Golden coat fur
      drawPixelBlock(ox+3, oy+4, 4, 2, "#f4f1de"); // Creamy white belly fur
      drawPixelBlock(ox+7, oy+2, 2, 3, "#e9c46a"); // Plump head cheeks
      drawPixelBlock(ox+2, oy+1, 1, 1, "#ffb5a7"); // Pink ears
      drawPixelBlock(ox+5, oy+1, 1, 1, "#ffb5a7"); 
      drawPixelBlock(ox+8, oy+2, 1, 1, "#222222"); // Black beady eye
      drawPixelBlock(ox+9, oy+3, 1, 1, "#ffccd5"); // Cute button pink nose
      drawPixelBlock(ox+3, oy+6, 1, 1, "#e07a5f"); // Little running paws feet stubs
      drawPixelBlock(ox+6, oy+6, 1, 1, "#e07a5f");

    } else if (status === "SAD") {
      // HOVERING DARK GREY PIXEL STORM CLOUD
      drawPixelBlock(4, 1, 8, 2, "#90e0ef");
      drawPixelBlock(3, 2, 10, 1, "#00b4d8");
      
      // Dropping rain particle nodes
      if (animationFrame % 2 === 0) {
        drawPixelBlock(4, 4, 1, 1, "#0077b6");
        drawPixelBlock(7, 5, 1, 1, "#0077b6");
        drawPixelBlock(10, 4, 1, 1, "#0077b6");
      } else {
        drawPixelBlock(5, 5, 1, 1, "#0077b6");
        drawPixelBlock(8, 4, 1, 1, "#0077b6");
        drawPixelBlock(11, 5, 1, 1, "#0077b6");
      }

      // Dormant idle wheel frame
      ctx.strokeStyle = "#cfd8dc";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(64, 72, 34, 0, Math.PI * 2);
      ctx.stroke();

      // SLUMPED OVER CRYING SITTING HAMSTER MODEL
      var ox = 5;
      var oy = 9;
      drawPixelBlock(ox+2, oy+2, 5, 4, "#b0a99f"); // Grey coat sad fur tint
      drawPixelBlock(ox+3, oy+4, 3, 2, "#ffffff"); // Chubby tear-soaked cheeks
      drawPixelBlock(ox+1, oy+2, 1, 1, "#ffccd5"); // Floppy ears drooped down
      drawPixelBlock(ox+4, oy+2, 1, 1, "#ffccd5");
      drawPixelBlock(ox+5, oy+3, 1, 1, "#457b9d"); // Shimmering blue crying tear eye dot
      drawPixelBlock(ox+7, oy+4, 1, 1, "#ffccd5"); // Drooped button nose spot

    } else {
      // BASELINE STANDBY COZY COMFORT STATE
      ctx.strokeStyle = "#e2eafc";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(64, 72, 34, 0, Math.PI * 2);
      ctx.stroke();

      // COZY SLEEPING HAMSTER BALLED UP
      var breathe = Math.sin(animationFrame * 0.1) * 0.3;
      var ox = 5;
      var oy = 10;
      drawPixelBlock(ox+2, oy+1, 5, 4 + breathe, "#e9c46a"); // Healthy fluffy tan body
      drawPixelBlock(ox+4, oy+3, 3, 2, "#fff3b0"); // Soft cream belly strip
      drawPixelBlock(ox+6, oy+2, 1, 1, "#222222"); // Contented sleeping shut slit eye
      drawPixelBlock(ox+1, oy+1, 1, 1, "#ffb5a7"); // Twitching cute sleeping ears
      drawPixelBlock(ox+3, oy+0, 1, 1, "#ffb5a7");
    }
  }

  setInterval(function() {
    idleTicks++;
    if (idleTicks > 20 && choreMinutes > 0) {
      choreMinutes -= 1;
      document.getElementById('chore-time').innerText = choreMinutes + " mins";
    }
    renderWidget();
  }, 1000);

  setInterval(renderWidget, 150);
})();

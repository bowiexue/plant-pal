window.hamsterIsSad = false;

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
    var pickedDuration = parseInt(document.getElementById('chore-duration').value || "15");
    choreMinutes += pickedDuration;
    if (choreMinutes > 60) choreMinutes = 60;
    var el = document.getElementById('chore-time');
    if(el) el.innerText = choreMinutes + " mins";
  };

  function drawPixelBlock(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * 8, y * 8, w * 8, h * 8);
  }

  function renderWidget() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, 128, 128);
    animationFrame++;

    var status = "IDLE";
    if (choreMinutes >= 60) {
      status = "RUNNING";
      window.hamsterIsSad = false;
    } else if (idleTicks > 15) {
      status = "SAD";
      window.hamsterIsSad = true;
    } else {
      window.hamsterIsSad = false;
    }
    
    var statusEl = document.getElementById('hamster-status');
    if(statusEl) statusEl.innerText = "STATUS: " + status;

    drawPixelBlock(0, 15, 16, 1, "#ebd9cc");

    var centerX = 64;
    var centerY = 68;
    var radius = 34;

    if (status === "RUNNING") {
      wheelRotation += 0.4;
      
      ctx.strokeStyle = "#03045e";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(wheelRotation) * radius, centerY + Math.sin(wheelRotation) * radius);
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX - Math.cos(wheelRotation) * radius, centerY - Math.sin(wheelRotation) * radius);
      ctx.stroke();

      var bob = (animationFrame % 2) * 1;
      var ox = 4; 
      var oy = 7 + bob;
      drawPixelBlock(ox+2, oy+2, 5, 4, "#d4a373");
      drawPixelBlock(ox+3, oy+4, 4, 2, "#f4f1de");
      drawPixelBlock(ox+7, oy+2, 2, 3, "#e9c46a");
      drawPixelBlock(ox+2, oy+1, 1, 1, "#ffb5a7");
      drawPixelBlock(ox+5, oy+1, 1, 1, "#ffb5a7"); 
      drawPixelBlock(ox+8, oy+2, 1, 1, "#222222");
      drawPixelBlock(ox+9, oy+3, 1, 1, "#ffccd5");
      drawPixelBlock(ox+3, oy+6, 1, 1, "#e07a5f");
      drawPixelBlock(ox+6, oy+6, 1, 1, "#e07a5f");

    } else if (status === "SAD") {
      drawPixelBlock(4, 1, 8, 2, "#90e0ef");
      drawPixelBlock(3, 2, 10, 1, "#00b4d8");
      
      if (animationFrame % 2 === 0) {
        drawPixelBlock(4, 4, 1, 1, "#0077b6");
        drawPixelBlock(7, 5, 1, 1, "#0077b6");
        drawPixelBlock(10, 4, 1, 1, "#0077b6");
      } else {
        drawPixelBlock(5, 5, 1, 1, "#0077b6");
        drawPixelBlock(8, 4, 1, 1, "#0077b6");
        drawPixelBlock(11, 5, 1, 1, "#0077b6");
      }

      ctx.strokeStyle = "#03045e";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      var ox = 5;
      var oy = 8;
      drawPixelBlock(ox+2, oy+2, 5, 4, "#b0a99f");
      drawPixelBlock(ox+3, oy+4, 3, 2, "#ffffff");
      drawPixelBlock(ox+1, oy+2, 1, 1, "#ffccd5");
      drawPixelBlock(ox+4, oy+2, 1, 1, "#ffccd5");
      drawPixelBlock(ox+5, oy+3, 1, 1, "#457b9d");
      drawPixelBlock(ox+7, oy+4, 1, 1, "#ffccd5");

    } else {
      ctx.strokeStyle = "#03045e";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      var breathe = Math.sin(animationFrame * 0.1) * 0.3;
      var ox = 5;
      var oy = 9;
      drawPixelBlock(ox+2, oy+1, 5, 4 + breathe, "#e9c46a");
      drawPixelBlock(ox+4, oy+3, 3, 2, "#fff3b0");
      drawPixelBlock(ox+6, oy+2, 1, 1, "#222222");
      drawPixelBlock(ox+1, oy+1, 1, 1, "#ffb5a7");
      drawPixelBlock(ox+3, oy+0, 1, 1, "#ffb5a7");
    }
  }

  window.initHamster = function() {
    setInterval(function() {
      idleTicks++;
      if (idleTicks > 20 && choreMinutes > 0) {
        choreMinutes -= 1;
        var timeEl = document.getElementById('chore-time');
        if(timeEl) timeEl.innerText = choreMinutes + " mins";
      }
      renderWidget();
      if (typeof msg === 'function') msg();
    }, 1000);

    setInterval(renderWidget, 150);
  };
})();

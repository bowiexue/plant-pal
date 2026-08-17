window.hamsterIsSad = false;
(function() {
  var canvas = document.getElementById('hamsterCanvas'), ctx = canvas?canvas.getContext('2d'):null;
  var choreMinutes = 0, idleTicks = 0, wheelRotation = 0, animationFrame = 0;
  window.addEventListener('mousedown', function() { idleTicks = 0; });
  window.addEventListener('mousemove', function() { idleTicks = 0; });
  window.triggerChoreBoost = function() {
    idleTicks = 0; var d = parseInt(document.getElementById('chore-duration').value || "15");
    choreMinutes += d; if (choreMinutes > 60) choreMinutes = 60;
    var el = document.getElementById('chore-time'); if(el) el.innerText = choreMinutes + " mins";
  };
  function pxl(x, y, w, h, c) { ctx.fillStyle = c; ctx.fillRect(x * 8, y * 8, w * 8, h * 8); }
  function renderWidget() {
    if (!canvas || !ctx) return; ctx.clearRect(0, 0, 128, 128); animationFrame++;
    var status = "IDLE";
    if (choreMinutes >= 60) { status = "RUNNING"; window.hamsterIsSad = false; }
    else if (idleTicks > 15) { status = "SAD"; window.hamsterIsSad = true; }
    else { window.hamsterIsSad = false; }
    var sEl = document.getElementById('hamster-status'); if(sEl) sEl.innerText = "STATUS: " + status;
    pxl(0, 15, 16, 1, "#ebd9cc");
    var cx = 64, cy = 68, r = 34;
    ctx.strokeStyle = "#03045e"; ctx.lineWidth = status==="RUNNING"?4:3; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    if (status === "RUNNING") {
      wheelRotation += 0.4; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(wheelRotation)*r, cy + Math.sin(wheelRotation)*r); ctx.stroke();
      var b = (animationFrame % 2), ox = 4, oy = 7 + b;
      pxl(ox+2, oy+2, 5, 4, "#d4a373"); pxl(ox+3, oy+4, 4, 2, "#f4f1de"); pxl(ox+7, oy+2, 2, 3, "#e9c46a"); pxl(ox+8, oy+2, 1, 1, "#222");
    } else if (status === "SAD") {
      pxl(4, 1, 8, 2, "#90e0ef"); pxl(3, 2, 10, 1, "#00b4d8");
      var ox = 5, oy = 8; pxl(ox+2, oy+2, 5, 4, "#b0a99f"); pxl(ox+3, oy+4, 3, 2, "#fff"); pxl(ox+5, oy+3, 1, 1, "#457b9d");
    } else {
      var breathe = Math.sin(animationFrame * 0.1) * 0.3, ox = 5, oy = 9;
      pxl(ox+2, oy+1, 5, 4 + breathe, "#e9c46a"); pxl(ox+4, oy+3, 3, 2, "#fff3b0"); pxl(ox+6, oy+2, 1, 1, "#222");
    }
  }
  window.initHamster = function() {
    setInterval(function() {
      idleTicks++; if (idleTicks > 20 && choreMinutes > 0) { choreMinutes -= 1; var el = document.getElementById('chore-time'); if(el) el.innerText = choreMinutes + " mins"; }
      renderWidget(); if (typeof msg === 'function') { msg(); draw(); }
    }, 1000);
    setInterval(renderWidget, 150);
  };
})();

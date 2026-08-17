var hCanvas = document.getElementById('hamsterCanvas');
var hCtx = hCanvas ? hCanvas.getContext('2d') : null;
var choreMinutes = 0;
var currentHamsterFrame = 0;
var hamsterAnimationInterval = null;

// Sets runtime condition levels
function updateChoreTarget() {
  var selectBox = document.getElementById('hamster-run-threshold');
  var targetDisplay = document.getElementById('chore-target-display');
  if (selectBox && targetDisplay) {
    targetDisplay.innerText = selectBox.value + " mins";
  }
  checkHamsterRunStatus();
}

function triggerChoreBoost() {
  var durationSelect = document.getElementById('chore-duration');
  if (!durationSelect) return;
  var addedTime = parseInt(durationSelect.value);
  
  choreMinutes += addedTime;
  var timeDisplay = document.getElementById('chore-time');
  if (timeDisplay) timeDisplay.innerText = choreMinutes + " mins";
  
  if (typeof logHistory === 'function') {
    logHistory("Logged a " + addedTime + "m housework session to Hamster Hub!");
  }
  
  checkHamsterRunStatus();
}

function checkHamsterRunStatus() {
  var selectBox = document.getElementById('hamster-run-threshold');
  var threshold = selectBox ? parseInt(selectBox.value) : 15;
  var statusDisplay = document.getElementById('hamster-status');
  
  if (choreMinutes >= threshold) {
    if (statusDisplay) {
      statusDisplay.innerText = "STATUS: RUNNING!";
      statusDisplay.style.background = "#dcfce7";
      statusDisplay.style.color = "#15803d";
    }
    window.hamsterIsSad = false;
    startHamsterWheel();
  } else {
    if (statusDisplay) {
      statusDisplay.innerText = "STATUS: IDLE";
      statusDisplay.style.background = "#e0f2fe";
      statusDisplay.style.color = "#03045e";
    }
    stopHamsterWheel();
  }
}

function startHamsterWheel() {
  if (hamsterAnimationInterval) return;
  hamsterAnimationInterval = setInterval(function() {
    currentHamsterFrame = (currentHamsterFrame + 1) % 4;
    renderHamsterWheelFrame();
  }, 150);
}

function stopHamsterWheel() {
  clearInterval(hamsterAnimationInterval);
  hamsterAnimationInterval = null;
  renderHamsterWheelFrame();
}

function renderHamsterWheelFrame() {
  if (!hCtx) return;
  hCtx.clearRect(0, 0, 128, 128);
  
  // Render main framework layout circle ring
  hCtx.strokeStyle = "#334155";
  hCtx.lineWidth = 4;
  hCtx.beginPath();
  hCtx.arc(64, 64, 50, 0, Math.PI * 2);
  hCtx.stroke();
  
  // Renders simple spokes inside wheel
  hCtx.strokeStyle = "#cbd5e1";
  hCtx.lineWidth = 2;
  var spokesAngle = (currentHamsterFrame * 15) * Math.PI / 180;
  for (var i = 0; i < 4; i++) {
    var angle = spokesAngle + (i * Math.PI / 2);
    hCtx.beginPath();
    hCtx.moveTo(64, 64);
    hCtx.lineTo(64 + Math.cos(angle) * 48, 64 + Math.sin(angle) * 48);
    hCtx.stroke();
  }
  
  // Draw base dwarf hamster runner box profile shapes
  hCtx.fillStyle = "#f59e0b";
  var dynamicYJump = (currentHamsterFrame % 2 === 0) ? 0 : 2;
  hCtx.fillRect(48, 84 - dynamicYJump, 32, 20);
  
  // Draw ears and eye nodes
  hCtx.fillStyle = "#d97706";
  hCtx.fillRect(72, 80 - dynamicYJump, 6, 6);
  hCtx.fillStyle = "#000000";
  hCtx.fillRect(74, 86 - dynamicYJump, 2, 2);
}

function initHamster() {
  renderHamsterWheelFrame();
  updateChoreTarget();
}

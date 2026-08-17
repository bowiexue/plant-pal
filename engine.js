// Mini Engine Core
var tmLeft = 1500, tmInt = null, tmRunning = false, tmMode = 'focus', tmLen = 'long', curStage = 0, totalStages = 9;
var hamX = 64, hamDir = 1, hamRunning = false, choreLogged = 0, choreTarget = 15, AC = null, osc1 = null, osc2 = null, gainN = null, soundTuning = false;

window.onload = function() {
  chg(); genFonts(); setupHamster(); setupSandbox(); setupClock(); setupStickers(); ren(); draw(); logMilestone("System Ready.");
};

function setupClock() {
  setInterval(() => { document.getElementById('live-system-clock').innerText = new Date().toLocaleTimeString(); }, 1000);
}
function chg() {
  var p = document.getElementById('pt').value; document.getElementById('eco-desc').innerText = plantData[p].desc;
  var an = document.getElementById('an'); an.innerHTML = '';
  var pet = document.createElement('span'); pet.className = 'pet'; pet.id = 'pet-anim'; pet.innerText = plantPets[p];
  an.appendChild(pet); setupStickers();
}
function setupStickers() {
  var p = document.getElementById('pt').value; var box = document.getElementById('stk-box'); if(!box) return; box.innerHTML = '';
  plantData[p].kaomojis.forEach(k => {
    var btn = document.createElement('button'); btn.className = 'stk-btn'; btn.innerText = k;
    btn.onclick = () => { document.getElementById('cust-txt-in').value += " " + k; genFonts(); };
    box.appendChild(btn);
  });
}
function setTimerMode(m) { tmMode = m; updateTimerDefaults(); }
function setTimerLength(l) { tmLen = l; updateTimerDefaults(); }
function updateTimerDefaults() { tmLeft = tmMode === 'focus' ? (tmLen === 'long' ? 1500 : 600) : (tmLen === 'long' ? 300 : 120); fmt(); }
function fmt() { var m = Math.floor(tmLeft/60), s = tmLeft%60; document.getElementById('tm').innerText = (m<10?'0':'')+m+':'+(s<10?'0':'')+s; }
function run() {
  if(tmRunning) { clearInterval(tmInt); tmRunning = false; hamRunning = false; }
  else {
    tmRunning = true; hamRunning = true;
    tmInt = setInterval(() => { if(tmLeft > 0) { tmLeft--; fmt(); } else { clearInterval(tmInt); tmRunning = false; hamRunning = false; } }, 1000);
  }
}
function reset() { clearInterval(tmInt); tmRunning = false; hamRunning = false; updateTimerDefaults(); }
function add() {
  var val = document.getElementById('in').value.trim(); if(!val) return;
  var list = JSON.parse(localStorage.getItem('todos') || '[]'); list.push({text: val, done: false});
  localStorage.setItem('todos', JSON.stringify(list)); document.getElementById('in').value = ''; ren();
}
function ren() {
  var list = JSON.parse(localStorage.getItem('todos') || '[]'); var el = document.getElementById('el'); if(!el) return; el.innerHTML = '';
  list.forEach((item, idx) => {
    var li = document.createElement('li'); if(item.done) li.className = 'dn';
    var chk = document.createElement('input'); chk.type = 'checkbox'; chk.checked = item.done;
    chk.onchange = () => {
      list[idx].done = !list[idx].done; localStorage.setItem('todos', JSON.stringify(list));
      if(list[idx].done) { curStage = Math.min(totalStages, curStage+1); draw(); setTimeout(() => { list.splice(idx,1); localStorage.setItem('todos', JSON.stringify(list)); ren(); }, 2000); }
      ren();
    };
    var s = document.createElement('span'); s.innerText = " " + item.text;
    li.appendChild(chk); li.appendChild(s); el.appendChild(li);
  });
  document.getElementById('st').innerText = curStage + "/" + totalStages;
}
function draw() {
  var canvas = document.getElementById('cv'); var ctx = canvas.getContext('2d'); ctx.clearRect(0,0,144,144);
  ctx.fillStyle = "#2d6a4f"; ctx.fillRect(52, 130 - (curStage * 12), 40, curStage * 12);
}
function setupHamster() {
  var cv = document.getElementById('hamsterCanvas'); var ctx = cv.getContext('2d');
  setInterval(() => {
    ctx.clearRect(0,0,128,128); ctx.strokeStyle = "#222"; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(64,64,48,0,Math.PI*2); ctx.stroke();
    if(hamRunning) { hamX += hamDir * 4; if(hamX > 90 || hamX < 38) hamDir *= -1; }
    ctx.fillStyle = "#b58282"; ctx.fillRect(hamX, 85, 18, 12);
    document.getElementById('hamster-status').innerText = hamRunning ? "RUNNING" : "IDLE";
  }, 150);
}
function triggerChoreBoost() { choreLogged += 15; document.getElementById('chore-time').innerText = choreLogged + "m"; }
function setupSandbox() {
  var pz = document.getElementById('playzone');
  pz.onmousemove = (e) => {
    var s = document.createElement('span'); s.innerText = "✨"; s.style.position = 'absolute';
    s.style.left = (e.clientX - pz.getBoundingClientRect().left) + 'px'; s.style.top = (e.clientY - pz.getBoundingClientRect().top) + 'px';
    pz.appendChild(s); setTimeout(() => s.remove(), 300);
  };
}
function genFonts() {
  var val = document.getElementById('cust-txt-in').value; var box = document.getElementById('fnt-box'); if(!box) return; box.innerHTML = '';
  ['f1','f2'].forEach(fKey => {
    var str = val.split('').map(c => maps[fKey][c] || c).join('');
    var r = document.createElement('div'); r.className = 'fnt-row'; r.innerText = str;
    box.appendChild(r);
  });
}
function tune() {
  soundTuning = !soundTuning; var btn = document.getElementById('m');
  if(soundTuning) { btn.innerText = "⏸ Halt"; btn.style.background = "#e63946"; toggleAudio(true); }
  else { btn.innerText = "🔊 Audio"; btn.style.background = "#1d3557"; toggleAudio(false); }
}
function toggleAudio(on) {
  if(!on) { if(osc1) { osc1.stop(); osc2.stop(); osc1=null; osc2=null; } return; }
  if(!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  osc1 = AC.createOscillator(); osc2 = AC.createOscillator(); gainN = AC.createGain();
  osc1.frequency.setValueAtTime(120, AC.currentTime); osc2.frequency.setValueAtTime(124, AC.currentTime);
  gainN.gain.setValueAtTime(0.1, AC.currentTime); osc1.connect(gainN); osc2.connect(gainN); gainN.connect(AC.destination);
  osc1.start(); osc2.start();
}
function logMilestone(m) {
  var box = document.getElementById('workspace-history-box'); if(!box) return;
  var e = document.createElement('div'); e.className = "history-item"; e.innerText = m; box.appendChild(e);
}

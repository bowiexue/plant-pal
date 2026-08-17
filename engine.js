// ================= ENGINE CORE CODE: PART 1 =================
var cv = document.getElementById('cv'), cx = cv ? cv.getContext('2d') : null;
var pts = parseInt(localStorage.getItem('sprout_pts')) || 0, sleep = false, act = Date.now();
var time = 1500, mId = null, on = false;
var list = JSON.parse(localStorage.getItem('sprout_tasks')) || [];
var historyLog = JSON.parse(localStorage.getItem('sprout_history')) || [];
var kind = localStorage.getItem('sprout_kind') || "sprout", pets = [], lockGrowth = false;
var timerMode = "focus", timerLength = "long";

function getTargetSeconds() {
  if (timerMode === "focus") return (timerLength === "short") ? 900 : 1500;
  return (timerLength === "short") ? 300 : 900;
}
function setTimerMode(m) {
  if (on) return alert("Pause running timer first!"); timerMode = m;
  document.getElementById('mode-focus').className = (m === 'focus') ? 'tgl-btn active-focus' : 'tgl-btn';
  document.getElementById('mode-break').className = (m === 'break') ? 'tgl-btn active-break' : 'tgl-btn';
  time = getTargetSeconds(); show();
}
function setTimerLength(l) {
  if (on) return alert("Pause running timer first!"); timerLength = l;
  document.getElementById('len-short').className = (l === 'short') ? 'tgl-btn active-len' : 'tgl-btn';
  document.getElementById('len-long').className = (l === 'long') ? 'tgl-btn active-len' : 'tgl-btn';
  time = getTargetSeconds(); show();
}
function convertStr(str, type) {
  var out = '', m = maps[type]; if (!m) return str;
  for (var i = 0; i < str.length; i++) { out += m[str[i]] ? m[str[i]] : str[i]; } return out;
}
function copyText(val) { navigator.clipboard.writeText(val); alert("📋 Copied text to clipboard: " + val); }
function genFonts() {
  var tIn = document.getElementById('cust-txt-in'), fBox = document.getElementById('fnt-box'), pC = plantData[kind];
  if (!tIn || !fBox || !pC || !pC.fonts) return; var txt = tIn.value || 'Plant Pal', out = [];
  for (var j = 0; j < pC.fonts.length; j++) {
    var fT = pC.fonts[j].key, fN = pC.fonts[j].name, conv = convertStr(txt, fT);
    out.push('<div class="fnt-row" onclick="copyText(\''+conv+'\')"><span>'+conv+'</span><span style="color:#004d40; font-size:9px;">['+fN+'] copy</span></div>');
  } fBox.innerHTML = out.join('');
}
function updateStickers() {
  var pC = plantData[kind], sBox = document.getElementById('stk-box'); if (!pC || !sBox) return;
  var dEl = document.getElementById('eco-desc'); if (dEl) dEl.innerText = pC.desc; var out = [];
  for (var i = 0; i < pC.kaomojis.length; i++) { out.push('<button class="stk-btn" onclick="copyText(\''+pC.kaomojis[i]+'\')">'+pC.kaomojis[i]+'</button>'); }
  sBox.innerHTML = out.join(''); genFonts();
}
setInterval(function() { var cEl = document.getElementById('live-system-clock'); if (cEl) { var d = new Date(); cEl.innerText = d.toLocaleDateString() + " - " + d.toLocaleTimeString(); } }, 1000);
function tch() { act = Date.now(); sleep = false; msg(); }
// ================= ENGINE CORE CODE: PART 2 =================
function run() {
  tch(); var b = document.getElementById('go'); if (!b) return;
  if (on) { clearInterval(mId); on = false; b.innerText = "Start"; } else {
    on = true; b.innerText = "Pause";
    mId = setInterval(function() {
      if (time > 0) { time--; show(); } else {
        reset(); if (timerMode === "focus") { pts += 3; saveState(); logHistory("Completed focus session! (+3 Points)"); alert("🎉 Focus session complete!"); }
        else { logHistory("Completed rest break session!"); alert("☕ Break over!"); }
        tch(); draw(); checkWin();
      }
    }, 1000);
  }
}
function reset() { clearInterval(mId); on = false; time = getTargetSeconds(); var b = document.getElementById('go'); if (b) b.innerText = "Start"; show(); }
function show() { var m = Math.floor(time / 60), s = time % 60, el = document.getElementById('tm'); if (el) el.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }
function add() { var i = document.getElementById('in'); if (!i) return; var v = i.value.trim(); if (!v) return; list.push({ t: v, d: false }); i.value = ''; saveState(); ren(); tch(); }
window.hF = function(el) {
  if (lockGrowth) return; var x = parseInt(el.getAttribute('data-i')); list[x].d = !list[x].d;
  if (list[x].d) { pts++; logHistory("Task clear: \"" + list[x].t + "\""); } else { if (pts > 0) pts--; }
  saveState(); ren(); tch(); draw(); checkWin();
};
window.hR = function(el) { if (lockGrowth) return; var x = parseInt(el.getAttribute('data-i')); if (list[x].d && pts > 0) pts--; list.splice(x, 1); saveState(); ren(); tch(); draw(); };
function logHistory(msgText) {
  var ts = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); historyLog.unshift("[" + ts + "] " + msgText);
  if (historyLog.length > 30) historyLog.pop(); saveState(); renderHistoryView();
}
function renderHistoryView() {
  var hB = document.getElementById('workspace-history-box'); if (!hB) return;
  if (historyLog.length === 0) { hB.innerText = "No milestones logged for this session yet."; return; }
  var out = []; for (var i = 0; i < Math.min(6, historyLog.length); i++) { out.push('<div class="history-item">' + historyLog[i] + '</div>'); } hB.innerHTML = out.join('');
}
function saveState() { localStorage.setItem('sprout_pts', pts); localStorage.setItem('sprout_tasks', JSON.stringify(list)); localStorage.setItem('sprout_history', JSON.stringify(historyLog)); localStorage.setItem('sprout_kind', kind); }
function clearSavedData() { if(confirm("Clear everything?")) { localStorage.clear(); pts = 0; list = []; historyLog = []; kind = "sprout"; document.getElementById('pt').value = "sprout"; saveState(); ren(); tch(); draw(); updateStickers(); renderHistoryView(); } }
function ren() {
  var out = []; for (var i = 0; i < list.length; i++) { var item = list[i], cls = item.d ? ' class="dn"' : '', chk = item.d ? ' checked' : ''; out.push('<li' + cls + '><label><input type="checkbox"' + chk + ' data-i="' + i + '" onclick="window.hF(this)"><span>' + item.t + '</span></label><button class="dl" data-i="' + i + '" onclick="window.hR(this)">X</button></li>'); }
  var el = document.getElementById('el'); if (el) el.innerHTML = out.join(''); msg();
}
function chg() { if (lockGrowth) return; var el = document.getElementById('pt'); if (el) kind = el.value; saveState(); tch(); updateStickers(); draw(); }
function checkWin() {
  var activeAnimal = plantPets[kind] || "🐾";
  if (pts && pts % 9 === 0 && !lockGrowth) {
    lockGrowth = true; logHistory("🌟 UNLOCKED flora reward: " + activeAnimal);
    var e = document.createElement('div'); e.className = 'pet'; e.innerText = activeAnimal; e.style.left = Math.random() * 220 + 'px';
    var anEl = document.getElementById('an'); if (anEl) anEl.appendChild(e); pets.push({ dom: e, x: parseFloat(e.style.left), tx: parseFloat(e.style.left) });
    msg(); setTimeout(function() { alert("🎉 Full Ecosystem Level Reached! Attracted: " + activeAnimal); lockGrowth = false; pts = 0; saveState(); ren(); draw(); }, 7000);
  }
}
setInterval(function() { for (var i = 0; i < pets.length; i++) { var p = pets[i]; if (Math.random() < 0.2) p.tx = Math.random() * 220; if (Math.abs(p.x - p.tx) > 2) { p.x += p.tx > p.x ? 2 : -2; p.dom.style.bottom = (Math.sin(p.x * 0.1) * 3 + 2) + 'px'; } p.dom.style.left = p.x + 'px'; } }, 80);
function msg() {
  var n = Math.max(0, 9 - pts), t = "Needs " + n + " checked tasks to fully grow!", stEl = document.getElementById('st');
  if (lockGrowth) t = "✨ Growth unlocked! Clear in 7s..."; else if (pts >= 6) t = "Thick and flourishing!"; else if (pts >= 3) t = "Strong healthy sprout!";
  if (stEl) stEl.innerText = t;
}
function pxl(x, y, w, h, c) { if (cx) { cx.fillStyle = c; cx.fillRect(x * 9, y * 9, w * 9, h * 9); } }
function draw() {
  if (!cx) return; cx.clearRect(0, 0, 144, 144); pxl(4, 13, 8, 1, "#c2c5cc"); pxl(4, 14, 8, 1, "#8d99ae"); pxl(5, 12, 6, 1, '#4a3728'); pxl(7, 10, 2, 2, '#52b788');
  if (kind === "sprout") { if (pts >= 3) { pxl(5, 9, 2, 1, '#74c69d'); pxl(9, 9, 2, 1, '#74c69d'); } if (pts >= 6) { pxl(7, 5, 2, 5, '#2d6a4f'); pxl(4, 6, 3, 1, '#74c69d'); } }
  else if (kind === "cactus") { if (pts >= 3) { pxl(6, 8, 4, 2, '#2d6a4f'); pxl(5, 9, 1, 2, '#40916c'); } if (pts >= 6) { pxl(7, 4, 2, 4, '#1b4332'); pxl(9, 6, 1, 2, '#40916c'); } }
  else if (kind === "flower") { if (pts >= 3) { pxl(7, 8, 2, 2, '#2d6a4f'); pxl(5, 9, 2, 1, '#74c69d'); } if (pts >= 6) { pxl(5, 4, 6, 4, '#ffc300'); pxl(7, 5, 2, 2, '#ffb703'); } }
  else if (kind === "orchid") { if (pts >= 3) { pxl(6, 8, 4, 2, '#7209b7'); } if (pts >= 6) { pxl(4, 5, 8, 3, '#b5179e'); pxl(7, 4, 2, 1, '#f72585'); } }
  else if (kind === "rose") { if (pts >= 3) { pxl(6, 9, 4, 1, '#2d6a4f'); } if (pts >= 6) { pxl(6, 5, 4, 4, '#e63946'); pxl(7, 4, 2, 1, '#d62828'); } }
  else if (kind === "tulip") { if (pts >= 3) { pxl(7, 8, 2, 2, '#40916c'); } if (pts >= 6) { pxl(6, 5, 4, 3, '#ffb703'); pxl(7, 4, 2, 1, '#fb8500'); } }
  else if (kind === "bamboo") { if (pts >= 3) { pxl(7, 7, 2, 3, '#74c69d'); } if (pts >= 6) { pxl(7, 3, 2, 4, '#52b788'); pxl(9, 4, 2, 1, '#74c69d'); } }
  else if (kind === "bonsai") { if (pts >= 3) { pxl(5, 9, 6, 1, '#5c677d'); } if (pts >= 6) { pxl(4, 6, 8, 3, '#2d6a4f'); pxl(6, 7, 4, 3, '#74c69d'); } }
  else if (kind === "mushroom") { if (pts >= 3) { pxl(7, 9, 2, 1, '#f1faee'); } if (pts >= 6) { pxl(5, 6, 6, 3, '#e63946'); pxl(6, 7, 1, 1, '#fff'); pxl(9, 6, 1, 1, '#fff'); } }
  else if (kind === "clover") { if (pts >= 3) { pxl(6, 9, 4, 1, '#74c69d'); } if (pts >= 6) { pxl(5, 7, 3, 2, '#40916c'); pxl(8, 7, 3, 2, '#40916c'); } }
  else if (kind === "fern") { if (pts >= 3) { pxl(5, 9, 6, 1, '#40916c'); } if (pts >= 6) { pxl(3, 7, 10, 2, '#2d6a4f'); pxl(4, 5, 8, 2, '#74c69d'); } }
  else if (kind === "maple") { if (pts >= 3) { pxl(7, 8, 2, 2, '#b7094c'); } if (pts >= 6) { pxl(5, 4, 6, 4, '#a01a58'); pxl(6, 3, 4, 1, '#f72585'); } }
  else if (kind === "palm") { if (pts >= 3) { pxl(7, 6, 2, 4, '#8338ec'); } if (pts >= 6) { pxl(4, 4, 8, 2, '#3a86c8'); pxl(2, 5, 2, 1, '#3a86c8'); } }
  else if (kind === "venus") { if (pts >= 3) { pxl(6, 9, 4, 1, '#40916c'); } if (pts >= 6) { pxl(5, 6, 6, 3, '#38b000'); pxl(6, 7, 4, 1, '#ffccd5'); } }
  else if (kind === "berry") { if (pts >= 3) { pxl(6, 8, 4, 2, '#52b788'); } if (pts >= 6) { pxl(5, 5, 6, 3, '#2d6a4f'); pxl(6, 6, 1, 1, '#e63946'); pxl(9, 5, 1, 1, '#e63946'); } }
}
window.addEventListener('DOMContentLoaded', function() { if (typeof renderHistoryView === 'function') renderHistoryView(); });

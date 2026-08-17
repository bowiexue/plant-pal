// Master state storage variables
var cv = document.getElementById('cv');
var cx = cv ? cv.getContext('2d') : null;
var pts = 0;
var sleep = false;
var act = Date.now();
var time = 1500; // 25 minutes in seconds
var mId = null;
var on = false;
var list = [];
var historyLog = [];
var kind = "sprout";
var pets = [];
var lockGrowth = false;

// Converts normal text into different fonts using database mappings
function convertStr(str, type) {
  var out = '', m = maps[type];
  if (!m) return str;
  for (var i = 0; i < str.length; i++) {
    var c = str[i], mapped = m[c];
    if (mapped && typeof mapped === 'string' && mapped.indexOf('<') !== -1) {
      mapped = mapped.replace(/<[^>]*>/g, '');
    }
    out += mapped ? mapped : c;
  }
  return out;
}

// Universal copy-to-clipboard messenger helper
function copyText(val) {
  navigator.clipboard.writeText(val);
  alert("📋 Copied text to clipboard: " + val);
}

// Refreshes the customized typography variants inside the font panel box
function genFonts() {
  var tInput = document.getElementById('cust-txt-in');
  var fBox = document.getElementById('fnt-box');
  var pConfig = plantData[kind];
  var out = [];
  
  if (!tInput || !fBox || !pConfig || !pConfig.fonts) return;
  var txt = tInput.value || 'Plant Pal';
  
  for (var j = 0; j < pConfig.fonts.length; j++) {
    var fType = pConfig.fonts[j].key;
    var fName = pConfig.fonts[j].name;
    var converted = convertStr(txt, fType);
    out.push('<div class="fnt-row" onclick="copyText(\'' + converted + '\')"><span>' + converted + '</span><span style="color:#004d40; font-size:9px; font-weight:normal;">[' + fName + '] copy</span></div>');
  }
  fBox.innerHTML = out.join('');
}

// Updates the description text blocks and character stickers array
function updateStickers() {
  var pConfig = plantData[kind];
  var sBox = document.getElementById('stk-box');
  var out = [];
  
  if (!pConfig || !sBox) return;
  var descEl = document.getElementById('eco-desc');
  if (descEl) descEl.innerText = pConfig.desc;
  
  for (var i = 0; i < pConfig.kaomojis.length; i++) {
    out.push('<button class="stk-btn" onclick="copyText(\'' + pConfig.kaomojis[i] + '\')">' + pConfig.kaomojis[i] + '</button>');
  }
  sBox.innerHTML = out.join('');
  genFonts();
}

// Local system sleep timers tracking loops
setInterval(function() {
  if (!on && Date.now() - act > 600000) { // 10 minutes inactive
    sleep = true;
    msg();
    draw();
  }
}, 10000);

// Resets internal inactivity sleep timer counters on user click interactions
function tch() {
  act = Date.now();
  sleep = false;
  msg();
}

// Clock controls for running and pausing the workspace focus stopwatch
function run() {
  tch();
  var b = document.getElementById('go');
  if (!b) return;
  
  if (on) {
    clearInterval(mId);
    on = false;
    b.innerText = "Start";
  } else {
    on = true;
    b.innerText = "Pause";
    mId = setInterval(function() {
      if (time > 0) {
        time--;
        show();
      } else {
        reset();
        pts += 3; // Give points for complete focus sessions
        alert("🎉 Focus session complete! Your plant absorbed the focus energy!");
        tch();
        draw();
        checkWin();
      }
    }, 1000);
  }
}

// Resets stopwatch back to baseline 25 minute marks
function reset() {
  clearInterval(mId);
  on = false;
  time = 1500;
  var b = document.getElementById('go');
  if (b) b.innerText = "Start";
  show();
}

// Formats clock digital readouts
function show() {
  var m = Math.floor(time / 60);
  var s = time % 60;
  var el = document.getElementById('tm');
  if (el) el.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// Appends user strings onto active task checklists
function add() {
  var i = document.getElementById('in');
  if (!i) return;
  var v = i.value.trim();
  if (!v) return;
  list.push({ t: v, d: false });
  i.value = '';
  ren();
  tch();
}

// Toggles checkboxes and safely changes growth point counters without breaking
window.hF = function(el) {
  if (lockGrowth) return;
  var x = parseInt(el.getAttribute('data-i'));
  list[x].d = !list[x].d;
  if (list[x].d) {
    pts++;
  } else {
    if (pts > 0) pts--;
  }
  ren();
  tch();
  draw();
  checkWin();
};

// Removes task entries out of tracking memory lists completely
window.hR = function(el) {
  if (lockGrowth) return;
  var x = parseInt(el.getAttribute('data-i'));
  if (list[x].d && pts > 0) pts--;
  list.splice(x, 1);
  ren();
  tch();
  draw();
};

// Re-renders and updates lists cleanly into the layout container block
function ren() {
  var out = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var cls = item.d ? ' class="dn"' : '';
    var chk = item.d ? ' checked' : '';
    out.push('<li' + cls + '><label><input type="checkbox"' + chk + ' data-i="' + i + '" onclick="window.hF(this)"><span>' + item.t + '</span></label><button class="dl" data-i="' + i + '" onclick="window.hR(this)">X</button></li>');
  }
  var el = document.getElementById('el');
  if (el) el.innerHTML = out.join('');
  msg();
}

// Swaps out target plant types and triggers new pixel drawings
function chg() {
  if (lockGrowth) return;
  var el = document.getElementById('pt');
  if (el) kind = el.value;
  tch();
  updateStickers();
  draw();
}

// Checks growth levels to drop tiny animated wandering animals onto your screen
function checkWin() {
  var currentAnimal = plantPets[kind] || "🐾";
  if (pts && pts % 9 === 0 && !lockGrowth) {
    lockGrowth = true;
    var e = document.createElement('div');
    e.className = 'pet';
    e.innerText = currentAnimal;
    e.style.left = Math.random() * 220 + 'px';
    
    var anEl = document.getElementById('an');
    if (anEl) anEl.appendChild(e);
    
    pets.push({ dom: e, x: parseFloat(e.style.left), tx: parseFloat(e.style.left) });
    
    setTimeout(function() {
      alert("🎉 Full growth unlocked! A wild friendly " + currentAnimal + " has wandered into your workspace!");
      lockGrowth = false;
      ren();
      draw();
    }, 1000);
  }
}

// Wandering creature walking loop animations
setInterval(function() {
  for (var i = 0; i < pets.length; i++) {
    var p = pets[i];
    if (Math.random() < 0.2) p.tx = Math.random() * 220;
    if (Math.abs(p.x - p.tx) > 2) {
      p.x += p.tx > p.x ? 2 : -2;
      p.dom.style.bottom = (Math.sin(p.x * 0.1) * 3 + 2) + 'px';
    }
    p.dom.style.left = p.x + 'px';
  }
}, 80);

// Decides what text status update gets displayed based on checks count numbers
function msg() {
  var n = Math.max(0, 9 - pts);
  var t = "Needs " + n + " checked tasks to fully grow!";
  var stEl = document.getElementById('st');
  
  if (lockGrowth) t = "✨ Growth unlocked!";
  else if (sleep || window.hamsterIsSad) t = "Zzz... Your Pal fell asleep!";
  else if (pts >= 6) t = "Thick and flourishing!";
  else if (pts >= 3) t = "Strong healthy sprout!";
  
  if (stEl) stEl.innerText = t;
}

// Fast pixel rendering math drawing helper
function pxl(x, y, w, h, c) {
  if (!cx) return;
  cx.fillStyle = c;
  cx.fillRect(x * 9, y * 9, w * 9, h * 9);
}

// Renders the standalone micro 8-bit retro art graphics onto the canvas 
function draw() {
  if (!cx) return;
  cx.clearRect(0, 0, 144, 144);
  
  // Base dirt and clay flower pot bricks layer
  pxl(4, 13, 8, 1, "#c2c5cc");
  pxl(4, 14, 8, 1, "#8d99ae");
  pxl(5, 12, 6, 1, '#4a3728');
  
  // Sleep graphic override state layers
  if (sleep || window.hamsterIsSad) {
    pxl(7, 10, 2, 2, '#52b788');
    pxl(9, 2, 4, 1, "#90e0ef");
    pxl(8, 3, 6, 1, "#00b4d8");
    return;
  }
  
  // Branch paths according to active selected option dropdown hooks
  pxl(7, 10, 2, 2, '#52b788'); // Stage 1 Stem
  
  if (kind === "sprout") {
    if (pts >= 3) { pxl(5, 9, 2, 1, '#74c69d'); pxl(9, 9, 2, 1, '#74c69d'); }
    if (pts >= 6) { pxl(7, 5, 2, 5, '#2d6a4f'); pxl(4, 6, 3, 1, '#74c69d'); }
  } else if (kind === "cactus") {
    if (pts >= 3) { pxl(6, 8, 4, 2, '#2d6a4f'); pxl(5, 9, 1, 2, '#40916c'); }
    if (pts >= 6) { pxl(7, 4, 2, 4, '#1b4332'); pxl(9, 6, 1, 2, '#40916c'); }
  } else if (kind === "flower") {
    if (pts >= 3) { pxl(7, 8, 2, 2, '#2d6a4f'); pxl(5, 9, 2, 1, '#74c69d'); }
    if (pts >= 6) { pxl(5, 4, 6, 4, '#ffc300'); pxl(7, 5, 2, 2, '#ffb703'); }
  } else if (kind === "orchid") {
    if (pts >= 3) { pxl(6, 8, 4, 2, '#7209b7'); }
    if (pts >= 6) { pxl(4, 5, 8, 3, '#b5179e'); pxl(7, 4, 2, 1, '#f72585'); }
  }
}

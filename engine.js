// Master state storage variables
var cv = document.getElementById('cv');
var cx = cv ? cv.getContext('2d') : null;
var pts = 0;
var sleep = false;
var act = Date.now();
var time = 1500; 
var mId = null;
var on = false;
var list = [];
var historyLog = []; // Stores your completed milestones
var kind = "sprout";
var pets = [];
var lockGrowth = false;

// Theme-matching unique reward items linked to each plant profile
var plantRewards = {
  sprout: "🐛 Little Caterpillar",
  cactus: "🦎 Desert Gecko",
  flower: "🦋 Monarch Butterfly",
  orchid: "Hummingbird",
  rose: "🐞 Red Ladybug",
  tulip: "🐝 Honey Bee",
  bamboo: "🐼 Baby Panda",
  bonsai: "🧘 Tiny Zen Stone",
  mushroom: "🧚 Woodland Fairy",
  clover: "🌈 Mini Leprechaun Hat",
  fern: "🐸 Tree Frog",
  maple: "🐿️ Red Squirrel",
  palm: "🦩 Pink Flamingo",
  venus: "🪰 Golden Fly",
  berry: "🦔 Woodland Hedgehog"
};

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

function copyText(val) {
  navigator.clipboard.writeText(val);
  alert("📋 Copied text to clipboard: " + val);
}

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

setInterval(function() {
  if (!on && Date.now() - act > 600000) {
    sleep = true;
    msg();
    draw();
  }
}, 10000);

function tch() {
  act = Date.now();
  sleep = false;
  msg();
}

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
        pts += 3;
        logHistory("Completed a 25-minute Deep Focus Session!");
        alert("🎉 Focus session complete! Your plant absorbed the focus energy!");
        tch();
        draw();
        checkWin();
      }
    }, 1000);
  }
}

function reset() {
  clearInterval(mId);
  on = false;
  time = 1500;
  var b = document.getElementById('go');
  if (b) b.innerText = "Start";
  show();
}

function show() {
  var m = Math.floor(time / 60);
  var s = time % 60;
  var el = document.getElementById('tm');
  if (el) el.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

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

// Fixed checklist node: Triggers real-time growth state point updates
window.hF = function(el) {
  if (lockGrowth) return;
  var x = parseInt(el.getAttribute('data-i'));
  list[x].d = !list[x].d;
  
  if (list[x].d) {
    pts++;
    logHistory("Checked off task: " + list[x].t);
  } else {
    if (pts > 0) pts--;
  }
  ren();
  tch();
  draw();
  checkWin();
};

window.hR = function(el) {
  if (lockGrowth) return;
  var x = parseInt(el.getAttribute('data-i'));
  if (list[x].d && pts > 0) pts--;
  list.splice(x, 1);
  ren();
  tch();
  draw();
};

// Formats your completed logs down into the dashboard notebook view
function logHistory(message) {
  var timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  historyLog.unshift("[" + timestamp + "] " + message);
  
  var hContainer = document.getElementById('an');
  if (hContainer) {
    var out = [];
    for (var i = 0; i < Math.min(3, historyLog.length); i++) {
      out.push('<div style="font-size:10px; color:#555; padding:1px 0;">' + historyLog[i] + '</div>');
    }
    // Keeps the scrolling logs neat inside the container box frame
    hContainer.innerHTML = '<div style="padding:2px; line-height:1.2;">' + out.join('') + '</div>';
  }
}

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

function chg() {
  if (lockGrowth) return;
  var el = document.getElementById('pt');
  if (el) kind = el.value;
  tch();
  updateStickers();
  draw();
}

// Drops unique custom biological ecosystem rewards onto the dashboard
function checkWin() {
  var specializedReward = plantRewards[kind] || "🎁 Special Item";
  if (pts && pts % 9 === 0 && !lockGrowth) {
    lockGrowth = true;
    logHistory("🌟 UNLOCKED REWARD: " + specializedReward);
    
    setTimeout(function() {
      alert("🎉 Full Growth Unlocked!\n\nYour hard work grew a perfect specimen and attracted a unique reward: " + specializedReward + "!");
      lockGrowth = false;
      ren();
      draw();
    }, 400);
  }
}

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

function pxl(x, y, w, h, c) {
  if (!cx) return;
  cx.fillStyle = c;
  cx.fillRect(x * 9, y * 9, w * 9, h * 9);
}

function draw() {
  if (!cx) return;
  cx.clearRect(0, 0, 144, 144);
  pxl(4, 13, 8, 1, "#c2c5cc");
  pxl(4, 14, 8, 1, "#8d99ae");
  pxl(5, 12, 6, 1, '#4a3728');
  if (sleep || window.hamsterIsSad) {
    pxl(7, 10, 2, 2, '#52b788');
    pxl(9, 2, 4, 1, "#90e0ef");
    pxl(8, 3, 6, 1, "#00b4d8");
    return;
  }
  pxl(7, 10, 2, 2, '#52b788');
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
  } else if (kind === "rose") {
    if (pts >= 3) { pxl(6, 9, 4, 1, '#2d6a4f'); }
    if (pts >= 6) { pxl(6, 5, 4, 4, '#e63946'); pxl(7, 4, 2, 1, '#d62828'); }
  } else if (kind === "tulip") {
    if (pts >= 3) { pxl(7, 8, 2, 2, '#40916c'); }
    if (pts >= 6) { pxl(6, 5, 4, 3, '#ffb703'); pxl(7, 4, 2, 1, '#fb8500'); }
  } else if (kind === "bamboo") {
    if (pts >= 3) { pxl(7, 7, 2, 3, '#74c69d'); }
    if (pts >= 6) { pxl(7, 3, 2, 4, '#52b788'); pxl(9, 4, 2, 1, '#74c69d'); }
  } else if (kind === "bonsai") {
    if (pts >= 3) { pxl(5, 9, 6, 1, '#5c677d'); }
    if (pts >= 6) { pxl(4, 6, 8, 3, '#2d6a4f'); pxl(6, 7, 4, 3, '#74c69d'); }
  } else if (kind === "mushroom") {
    if (pts >= 3) { pxl(7, 9, 2, 1, '#f1faee'); }
    if (pts >= 6) { pxl(5, 6, 6, 3, '#e63946'); pxl(6, 7, 1, 1, '#fff'); pxl(9, 6, 1, 1, '#fff'); }
  } else if (kind === "clover") {
    if (pts >= 3) { pxl(6, 9, 4, 1, '#74c69d'); }
    if (pts >= 6) { pxl(5, 7, 3, 2, '#40916c'); pxl(8, 7, 3, 2, '#40916c'); }
  } else if (kind === "fern") {
    if (pts >= 3) { pxl(5, 9, 6, 1, '#40916c'); }
    if (pts >= 6) { pxl(3, 7, 10, 2, '#2d6a4f'); pxl(4, 5, 8, 2, '#74c69d'); }
  } else if (kind === "maple") {
    if (pts >= 3) { pxl(7, 8, 2, 2, '#b7094c'); }
    if (pts >= 6) { pxl(5, 4, 6, 4, '#a01a58'); pxl(6, 3, 4, 1, '#f72585'); }
  } else if (kind === "palm") {
    if (pts >= 3) { pxl(7, 6, 2, 4, '#8338ec'); }
    if (pts >= 6) { pxl(4, 4, 8, 2, '#3a86c8'); pxl(2, 5, 2, 1, '#3a86c8'); }
  } else if (kind === "venus") {
    if (pts >= 3) { pxl(6, 9, 4, 1, '#40916c'); }
    if (pts >= 6) { pxl(5, 6, 6, 3, '#38b000'); pxl(6, 7, 4, 1, '#ffccd5'); }
  } else if (kind === "berry") {
    if (pts >= 3) { pxl(6, 8, 4, 2, '#52b788'); }
    if (pts >= 6) { pxl(5, 5, 6, 3, '#2d6a4f'); pxl(6, 6, 1, 1, '#e63946'); pxl(9, 5, 1, 1, '#e63946'); }
  }
}

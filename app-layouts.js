// Holds the smart HTML grids for your unified dashboard views
var homeLayout = `
  <div id="page-home" style="display:flex; flex-direction:column; gap:8px; width:100%;">
    <div id="wdg" class="sl" style="background:#e8f1f5; border-color:#b0c4de;">
      <div class="sl-row" style="font-weight:bold;"><span>Palo Alto, CA 📍</span><span id="wdg-temp">73°F</span></div>
      <div class="sl-row"><span id="wdg-time">12:00:00 PM</span><span>☁️ Mostly Cloudy</span></div>
    </div>
    <div style="font-weight:bold; color:#2d6a4f; margin-top:10px; font-size:12px;">📱 App Grid Dashboard:</div>
    <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:15px; margin-top:15px;">
      <div class="app-icon" onclick="loadPage('plant')" style="border-color:#52b788;"><span style="font-size:24px;">🌿</span><span class="app-label">Plant & Tasks</span></div>
      <div class="app-icon" onclick="loadPage('hamster')" style="border-color:#03045e;"><span style="font-size:24px;">🐹</span><span class="app-label">Hamster Wheel</span></div>
      <div class="app-icon" onclick="loadPage('audio')" style="border-color:#457b9d;"><span style="font-size:24px;">🎵</span><span class="app-label">Ambient Synth</span></div>
      <div class="app-icon" onclick="loadPage('fonts')" style="border-color:#004d40;"><span style="font-size:24px;">🔤</span><span class="app-label">Font Styler</span></div>
    </div>
  </div>
`;

var plantLayout = `
  <div class="app-page" style="display:flex;">
    <div class="sl" style="text-align:center; padding:4px;"><div id="st" class="st" style="font-size:11px;">Loading...</div></div>
    <div style="display:flex; justify-content:center; margin:2px 0;"><div class="cv-wrap"><canvas id="cv" width="144" height="144"></canvas></div></div>
    <div class="side-ctrls">
      <div id="tmbx" class="tm-box mode-focus"><div id="tm" class="tm">25:00</div></div>
      <div class="bt"><button id="go" onclick="run()">Start</button><button onclick="reset()">Reset</button></div>
    </div>
    <div class="sl">
      <div class="sl-row"><span>Plant:</span><select id="pt" onchange="chg()"><option value="sprout">Thick Sprout</option><option value="cactus">Big Cactus</option></select></div>
    </div>
    <div class="td" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
      <div style="font-weight:bold; color:#2d6a4f;">📝 Connected Tasks:</div>
      <div class="rw"><input type="text" id="in" placeholder="Task..."><button onclick="add()">Add</button></div>
      <ul id="el" style="flex:1; max-height:110px;"></ul>
    </div>
    <div class="an-box" style="height:40px;">🐾 Visitor:<div id="an" class="pt-c"></div></div>
  </div>
`;

var hamsterLayout = `
  <div class="app-page" style="display:flex; height:100%;">
    <div class="fat-widget" style="flex:1; display:flex; flex-direction:column; justify-content:space-between; padding:15px;">
      <div class="fat-header"><span style="font-weight:bold; color:#03045e;">🐹 Hamster Workspace</span><span id="hamster-status">STATUS: IDLE</span></div>
      <canvas id="hamsterCanvas" width="128" height="128" style="width:160px; height:160px; margin:0 auto;"></canvas>
      <div style="text-align:center;">
        <div>Chores Active: <span id="chore-time">0 mins</span></div>
        <select id="chore-duration" style="margin:5px 0;"><option value="15">15 mins</option><option value="30">30 mins</option></select>
        <button onclick="triggerChoreBoost()" style="background:#03045e; width:100%;">🧹 Log Chore Session</button>
      </div>
    </div>
  </div>
`;

var audioLayout = `
  <div class="app-page" style="display:flex; padding:20px;">
    <div class="mu-box" style="flex:1; justify-content:center; display:flex; flex-direction:column; gap:20px;">
      <div style="color:#fff; text-align:center;">🎵 Ambient Mixer</div>
      <select id="mtype"><option value="chill">Vinyl Pad</option></select>
      <button id="m" class="mu" onclick="tune()">🔊 Initialize Sound</button>
    </div>
  </div>
`;

var fontsLayout = `
  <div class="app-page" style="display:flex; height:100%;">
    <div class="sl" style="background:#fff3e0;"><div class="stk-row" id="stk-box"></div></div>
    <div class="sl" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
      <input type="text" id="cust-txt-in" value="Plant Pal" oninput="genFonts()">
      <div class="fnt-col" id="fnt-box" style="flex:1; overflow-y:auto;"></div>
    </div>
  </div>
`;

function loadPage(page) {
  var target = document.getElementById('app-view-target');
  var view = document.getElementById('screen-viewport');
  if (page === 'home') { target.innerHTML = homeLayout; view.style.background = '#f4f9f4'; }
  if (page === 'plant') { target.innerHTML = plantLayout; view.style.background = '#f4f9f4'; chg(); ren(); }
  if (page === 'hamster') { target.innerHTML = hamsterLayout; view.style.background = '#f0f4f8'; if(typeof initHamster==='function') initHamster(); }
  if (page === 'audio') { target.innerHTML = audioLayout; view.style.background = '#1d3557'; }
  if (page === 'fonts') { target.innerHTML = fontsLayout; view.style.background = '#f4f9f4'; updateStickers(); }
  document.querySelector('.phone-home-bar').style.background = view.style.background;
}

function returnToHome() { loadPage('home'); }
setInterval(function() {
  var d = new Date(), clock = document.getElementById('os-clock');
  if(clock) clock.innerText = d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}, 1000);

window.addEventListener('load', function() { loadPage('home'); });

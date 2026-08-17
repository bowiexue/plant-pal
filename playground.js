var pz = document.getElementById('playzone');
if (pz) {
  pz.addEventListener('mousemove', function(e) {
    var b = pz.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
    var s = document.createElement('div'); s.innerText = "✨"; s.style.position = "absolute";
    s.style.left = x + "px"; s.style.top = y + "px"; s.style.fontSize = "10px"; s.style.pointerEvents = "none";
    s.style.transition = "transform 0.5s, opacity 0.5s"; pz.appendChild(s);
    setTimeout(function() { s.style.transform = "translateY(-15px) scale(0.5)"; s.style.opacity = "0"; }, 50);
    setTimeout(function() { s.remove(); }, 500);
  });

  pz.addEventListener('mousedown', function(e) {
    var b = pz.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
    var c = ["🐣", "🐱", "🐰", "🦊", "🐻", "🐼", "🐨"], r = c[Math.floor(Math.random() * c.length)];
    var p = document.createElement('div'); p.innerText = r; p.style.position = "absolute";
    p.style.left = (x - 8) + "px"; p.style.top = (y - 8) + "px"; p.style.fontSize = "14px"; p.style.pointerEvents = "none";
    pz.appendChild(p); if(typeof logHistory === 'function') logHistory("Hatched a custom " + r + " in Sandbox zone!");
  });
}

(function() {
  var pz = document.getElementById('playzone');
  if (!pz) return;

  var trailGlitters = ["✨", "▫️", "▪️", "⭐", "▪️"];
  var burstElements = ["🌸", "🐰", "⭐", "🍃", "✨", "🐼", "🦊", "🐸", "🦋", "🐿️"];

  function spawnNode(x, y, char, type) {
    var n = document.createElement('span');
    n.className = 'ptc-node';
    n.innerText = char;
    n.style.left = x + 'px';
    n.style.top = y + 'px';
    
    var mx = (Math.random() - 0.5) * (type === 'click' ? 120 : 30);
    var my = (Math.random() - 0.5) * (type === 'click' ? 120 : 30) - (type === 'click' ? 40 : 15);
    
    n.style.setProperty('--mx', mx + 'px');
    n.style.setProperty('--my', my + 'px');
    
    pz.appendChild(n);
    setTimeout(function() { n.remove(); }, 800);
  }

  pz.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.15) return;
    var rect = pz.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var randomGlitter = trailGlitters[Math.floor(Math.random() * trailGlitters.length)];
    spawnNode(x, y, randomGlitter, 'move');
  });

  pz.addEventListener('mousedown', function(e) {
    var rect = pz.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    for (var i = 0; i < 8; i++) {
      var randomBurst = burstElements[Math.floor(Math.random() * burstElements.length)];
      spawnNode(x, y, randomBurst, 'click');
    }
  });
})();

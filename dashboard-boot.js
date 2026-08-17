// Dynamic boot scripts mapping layer links
function scriptLoader(src, callback) {
  var s = document.createElement('script');
  s.src = src;
  s.onload = callback;
  document.body.appendChild(s);
}

// Sequence load tracking pipelines to ensure zero load crashes
window.addEventListener('load', function() {
  scriptLoader("database.js", function() {
    scriptLoader("audio.js", function() {
      scriptLoader("engine.js", function() {
        scriptLoader("playground.js", function() {
          scriptLoader("hamster.js", function() {
            // Initializing layout setups safely after assets unlock
            setTimeout(function() {
              if(typeof ren==='function') ren();
              if(typeof show==='function') show();
              if(typeof updateStickers==='function') updateStickers();
              if(typeof draw==='function') draw();
              if(typeof msg==='function') msg();
              if(typeof initHamster==='function') initHamster();
            }, 50);
          });
        });
      });
    });
  });
});

var aCtx = null, synthId = null, play = false, beat = 0;

function tune() {
  var b = document.getElementById('m'), mt = document.getElementById('mtype').value;
  try {
    if (!aCtx) aCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (play) { clearInterval(synthId); play = false; b.innerText = "🎵 Synthesize Music"; }
    else {
      play = true; b.innerText = "⏸️ Stop Beats";
      synthId = setInterval(function() {
        var nw = aCtx.currentTime;
        if (mt == "chill") {
          var f = 130.81 + ((beat) % 4) * 20, o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.015, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 1.8); o.start(nw); o.stop(nw + 1.8);
        } else if (mt == "jazz") {
          var chords = [146.83, 164.81, 196.00, 220.00], f = chords[beat % chords.length]; var o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.02, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 2.5); o.start(nw); o.stop(nw + 2.5);
        } else if (mt == "rain") {
          var o = aCtx.createOscillator(), g = aCtx.createGain(); o.frequency.setValueAtTime(55 + Math.random() * 10, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.01, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 0.12); o.start(nw); o.stop(nw + 0.12);
        } else if (mt == "cosmic") {
          var f = 73.42 + Math.sin(beat * 0.2) * 5, o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.025, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 3); o.start(nw); o.stop(nw + 3);
        } else if (mt == "retro") {
          var notes = [261.63, 329.63, 392.00, 523.25], f = notes[beat % notes.length]; var o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'square'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.008, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 0.4); o.start(nw); o.stop(nw + 0.4);
        } else if (mt == "lofi") {
          var f = 110.00 + (beat % 3) * 15; var o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.02, nw); g.gain.linearRampToValueAtTime(0.001, nw + 1.2); o.start(nw); o.stop(nw + 1.2);
        } else if (mt == "synth") {
          var notes = [196.00, 220.00, 261.63, 293.66], f = notes[beat % notes.length]; var o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.005, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 0.6); o.start(nw); o.stop(nw + 0.6);
        } else if (mt == "classic") {
          var chords = [261.63, 311.13, 392.00, 466.16], f = chords[beat % chords.length]; var o = aCtx.createOscillator(), g = aCtx.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(f, nw); o.connect(g); g.connect(aCtx.destination); g.gain.setValueAtTime(0.03, nw); g.gain.exponentialRampToValueAtTime(0.001, nw + 2.0); o.start(nw); o.stop(nw + 2.0);
        } beat++;
      }, mt == "rain" ? 120 : mt == "retro" ? 250 : mt == "synth" ? 300 : 900);
    }
  } catch (e) { b.innerText = "⚠️ Audio Lock"; }
}

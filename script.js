/* VÉRION — opening timeline orchestration.
   The visual work is done in CSS (GPU-composited, smooth to screen-record).
   JS only hands control from the cinematic overlay to the hero and
   handles replay. No audio, no video element, no skip control. */

(function () {
  "use strict";

  var body = document.body;
  var OPENING_MS = 13000;      // full timeline length (matches CSS)
  var HANDOFF_MS = 12000;      // reveal hero text just as the dial fills
  var timers = [];

  document.getElementById("yr").textContent = new Date().getFullYear();

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function finishInstant() {
    clearTimers();
    body.classList.remove("cinematic-active");
    body.classList.add("opening-done", "opening-removed");
  }

  function runOpening() {
    clearTimers();
    body.classList.remove("opening-done", "opening-removed");
    body.classList.add("cinematic-active");

    // restart the CSS animations by forcing a reflow on the overlay
    var cine = document.getElementById("cinematic");
    var clone = cine.cloneNode(true);
    cine.parentNode.replaceChild(clone, cine);

    // dial fills the frame -> reveal hero underneath (seamless, same dark texture)
    timers.push(setTimeout(function () {
      body.classList.add("opening-done");
    }, HANDOFF_MS));

    // let the overlay fade fully, then release scroll
    timers.push(setTimeout(function () {
      body.classList.remove("cinematic-active");
      body.classList.add("opening-removed");
    }, OPENING_MS + 900));
  }

  if (reduce) {
    finishInstant();
  } else {
    var started = false;
    var start = function () {
      if (started) return;
      started = true;
      runOpening();
    };
    // wait for the image so the first frame is never blank
    var img = new Image();
    img.onload = img.onerror = start;
    img.src = "assets/verion-watch.webp";
    // safety: never leave the site locked behind the overlay
    setTimeout(start, 600);
  }

  // Replay control (restart the opening on demand — useful for recording)
  var replay = document.querySelector(".replay");
  if (replay) {
    replay.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "auto" });
      runOpening();
    });
  }
})();

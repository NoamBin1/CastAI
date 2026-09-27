/* VÉRION — opening orchestration + luxury interactions.
   Visuals are GPU-composited CSS (smooth to screen-record).
   JS hands the opening off to the hero, runs scroll reveals,
   and drives the nav state. No audio, no video, no skip. */

(function () {
  "use strict";

  var body = document.body;
  var OPENING_MS = 13000;   // full timeline (matches CSS)
  var HANDOFF_MS = 11900;   // reveal hero just as the dial fills the frame
  var timers = [];

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function clearTimers(){ timers.forEach(clearTimeout); timers = []; }

  function finishInstant(){
    clearTimers();
    body.classList.remove("cinematic-active");
    body.classList.add("opening-done", "opening-removed");
  }

  function runOpening(){
    clearTimers();
    body.classList.remove("opening-done", "opening-removed");
    body.classList.add("cinematic-active");

    // restart the CSS timeline by re-inserting a fresh overlay clone
    var cine = document.getElementById("cinematic");
    var clone = cine.cloneNode(true);
    cine.parentNode.replaceChild(clone, cine);

    // dial fills the frame -> reveal hero underneath (same dark texture,
    // hero keeps drifting -> the camera never appears to stop)
    timers.push(setTimeout(function(){ body.classList.add("opening-done"); }, HANDOFF_MS));

    // release scroll once the overlay has fully cross-faded
    timers.push(setTimeout(function(){
      body.classList.remove("cinematic-active");
      body.classList.add("opening-removed");
    }, OPENING_MS + 1400));
  }

  if (reduce){
    finishInstant();
  } else {
    var started = false;
    var start = function(){ if (started) return; started = true; runOpening(); };
    var img = new Image();
    img.onload = img.onerror = start;
    img.src = "assets/verion-watch.webp";
    setTimeout(start, 600); // safety: never stay locked behind the overlay
  }

  // Replay control (restart the opening — handy for recording takes)
  var replay = document.querySelector(".replay");
  if (replay){
    replay.addEventListener("click", function(){
      window.scrollTo({ top: 0, behavior: "auto" });
      runOpening();
    });
  }

  // Nav: solidify on scroll
  var nav = document.getElementById("nav");
  if (nav){
    var onScroll = function(){
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Scroll reveals
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add("in"); });
  }
})();

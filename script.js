/* VÉRION — opening orchestration + luxury interactions.
   Visuals are GPU-composited CSS (smooth to screen-record).
   JS hands the opening off to the hero, runs scroll reveals,
   and drives the nav state. No audio, no video, no skip. */

(function () {
  "use strict";

  var body = document.body;
  var HARD_FALLBACK_MS = 12000;  // time for a desktop user to tap the cue
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

  var cine = document.getElementById("cinematic");
  var video = cine ? cine.querySelector(".introvid") : null;
  var ended = false;

  // Hand the film off to the hero: grow the dark dial texture, then reveal.
  function endIntro(){
    if (ended) return;
    ended = true;
    clearTimers();
    if (cine) cine.classList.add("ending");
    // reveal hero underneath as the dark texture takes over (seamless)
    timers.push(setTimeout(function(){ body.classList.add("opening-done"); }, 750));
    // release scroll once the overlay has fully faded
    timers.push(setTimeout(function(){
      body.classList.remove("cinematic-active");
      body.classList.add("opening-removed");
    }, 2200));
  }

  function runOpening(){
    clearTimers();
    ended = false;
    body.classList.remove("opening-done", "opening-removed");
    body.classList.add("cinematic-active");
    if (cine) cine.classList.remove("ending", "needtap");

    if (!video){ endIntro(); return; }

    var started = false;
    try { video.currentTime = 0; } catch(e){}

    var attempt = function(){ var q = video.play(); if (q && q.catch) q.catch(function(){}); };

    video.onplaying = function(){ started = true; if (cine) cine.classList.remove("needtap"); };
    video.onended   = endIntro;
    video.ontimeupdate = function(){
      if (video.duration && video.currentTime >= video.duration - 0.9) endIntro();
    };
    video.onerror = function(){ timers.push(setTimeout(endIntro, 300)); };

    attempt();

    // If muted autoplay is blocked (common on desktop), reveal a tap-to-play cue.
    timers.push(setTimeout(function(){
      if (!started && (video.paused || video.readyState < 2) && cine) cine.classList.add("needtap");
    }, 1200));

    // A tap anywhere on the film (or the cue) starts it.
    if (cine){
      cine.addEventListener("pointerdown", function(){
        cine.classList.remove("needtap");
        attempt();
      });
    }

    // Safety: if playback never happens (autoplay blocked and ignored),
    // don't strand the viewer on the poster forever.
    timers.push(setTimeout(function(){ if (!started) endIntro(); }, HARD_FALLBACK_MS));
    // If it did play but stalls, still hand off eventually.
    timers.push(setTimeout(endIntro, 16000));
  }

  if (reduce){
    finishInstant();
  } else {
    runOpening();
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

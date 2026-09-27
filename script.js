/* VÉRION — opening orchestration + luxury interactions.
   Visuals are GPU-composited CSS (smooth to screen-record).
   JS hands the opening off to the hero, runs scroll reveals,
   and drives the nav state. No audio, no video, no skip. */

(function () {
  "use strict";

  var body = document.body;
  var HARD_FALLBACK_MS = 7000;   // never stay locked behind the overlay
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
    if (cine) cine.classList.remove("ending");

    if (!video){ endIntro(); return; }

    try { video.currentTime = 0; } catch(e){}
    var p = video.play();
    if (p && p.catch) p.catch(function(){ /* autoplay blocked -> timers cover it */ });

    // start the hand-off just before the clip ends (overlap the last motion)
    video.onended = endIntro;
    video.ontimeupdate = function(){
      if (video.duration && video.currentTime >= video.duration - 0.9) endIntro();
    };
    video.onerror = function(){ timers.push(setTimeout(endIntro, 300)); };

    // hard fallback so the site always appears
    timers.push(setTimeout(endIntro, HARD_FALLBACK_MS));
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

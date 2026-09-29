"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // 0-100 percent
  const dragging = useRef(false);

  const getPercent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const onMove = useCallback(
    (clientX: number) => {
      if (!dragging.current) return;
      setPosition(getPercent(clientX));
    },
    [getPercent]
  );

  useEffect(() => {
    const mousemove = (e: MouseEvent) => onMove(e.clientX);
    const touchmove = (e: TouchEvent) => onMove(e.touches[0].clientX);
    const end = () => { dragging.current = false; };

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("touchmove", touchmove, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("touchmove", touchmove);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, [onMove]);

  const startDrag = (clientX: number) => {
    dragging.current = true;
    setPosition(getPercent(clientX));
  };

  return (
    <section className="bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
            The difference is obvious.
          </h2>
          <p className="text-white/60">
            Drag the handle to compare before and after.
          </p>
        </div>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl aspect-[16/9] rounded overflow-hidden select-none cursor-ew-resize"
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          role="img"
          aria-label="Before and after window cleaning comparison"
        >
          {/* Before — full width, navy placeholder */}
          <div className="absolute inset-0 bg-navy-800 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/20 text-sm font-medium">BEFORE</p>
              <p className="text-white/10 text-xs mt-1">
                Add before photo to /public/images/before.jpg
              </p>
            </div>
          </div>

          {/* After — clipped */}
          <div
            className="absolute inset-0 bg-navy-700 flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="text-center">
              <p className="text-white/40 text-sm font-medium">AFTER</p>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute inset-y-0 w-px bg-white/80 pointer-events-none"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-navy-950 flex items-center justify-center pointer-events-none"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-5 h-5 text-navy-950"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l-4 4 4 4M13 8l4 4-4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from '../data';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideCount = slides.length;

  const next = useCallback(() => {
    if (slideCount < 2) return;
    setPrev(current);
    setCurrent((c) => (c + 1) % slideCount);
  }, [current, slideCount]);

  const goTo = (i: number) => {
    if (i === current || slideCount === 0) return;
    setPrev(current);
    setCurrent((i + slideCount) % slideCount);
    resetTimer();
  };

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slideCount < 2) return;
    timerRef.current = setInterval(() => next(), 4000);
  }, [next, slideCount]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  if (slideCount === 0) return null;

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-ink-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isLeaving = i === prev && i !== current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 ${
              isActive
                ? 'opacity-100 z-20'
                : isLeaving
                ? 'opacity-0 z-10'
                : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1.1s cubic-bezier(0.65, 0, 0.35, 1)' }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable="false"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500" />
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />

            {/* Left text */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <div className="container-x w-full">
                <div className="max-w-2xl">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                    The battery supplier<br />who understands drones the most
                  </p>
                  <p className="mt-4 text-lg md:text-xl text-white/80 font-medium">
                    Expert in drone power batteries
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dot navigation */}
      {slideCount > 1 && (
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`跳转到第 ${i + 1} 张`}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-white/10 z-30">
        <div
          className={`h-full bg-brand-500 ${paused ? '' : 'animate-progress'}`}
          style={{ animationDuration: '4000ms' }}
          key={current}
        />
      </div>
    </section>
  );
}

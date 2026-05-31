import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from '../data';
export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(-1);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);
    const slideCount = slides.length;
    const next = useCallback(() => {
        if (slideCount < 2)
            return;
        setPrev(current);
        setCurrent((c) => (c + 1) % slideCount);
    }, [current, slideCount]);
    const goTo = (i) => {
        if (i === current || slideCount === 0)
            return;
        setPrev(current);
        setCurrent((i + slideCount) % slideCount);
        resetTimer();
    };
    const resetTimer = useCallback(() => {
        if (timerRef.current)
            clearInterval(timerRef.current);
        if (slideCount < 2)
            return;
        timerRef.current = setInterval(() => next(), 4000);
    }, [next, slideCount]);
    useEffect(() => {
        resetTimer();
        return () => { if (timerRef.current)
            clearInterval(timerRef.current); };
    }, [resetTimer]);
    if (slideCount === 0)
        return null;
    return (_jsxs("section", { className: "relative w-full h-screen overflow-hidden bg-ink-950", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: [slides.map((slide, i) => {
                const isActive = i === current;
                const isLeaving = i === prev && i !== current;
                return (_jsxs("div", { className: `absolute inset-0 ${isActive
                        ? 'opacity-100 z-20'
                        : isLeaving
                            ? 'opacity-0 z-10'
                            : 'opacity-0 z-0 pointer-events-none'}`, style: { transition: 'opacity 1.1s cubic-bezier(0.65, 0, 0.35, 1)' }, children: [_jsx("div", { className: "absolute inset-0 overflow-hidden", children: slide.image ? (_jsx("img", { src: slide.image, alt: "", className: "absolute inset-0 w-full h-full object-cover", draggable: "false" })) : (_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500" })) }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" }), _jsx("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: _jsx("div", { className: "container-x w-full", children: _jsxs("div", { className: "max-w-2xl", children: [_jsxs("p", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg", children: ["The battery supplier", _jsx("br", {}), "who understands drones the most"] }), _jsx("p", { className: "mt-4 text-lg md:text-xl text-white/80 font-medium", children: "Expert in drone power batteries" })] }) }) })] }, slide.id));
            }), slideCount > 1 && (_jsx("div", { className: "absolute bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30", children: slides.map((_, i) => (_jsx("button", { "aria-label": `跳转到第 ${i + 1} 张`, onClick: () => goTo(i), className: `w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}` }, i))) })), _jsx("div", { className: "absolute bottom-0 inset-x-0 h-[3px] bg-white/10 z-30", children: _jsx("div", { className: `h-full bg-brand-500 ${paused ? '' : 'animate-progress'}`, style: { animationDuration: '4000ms' } }, current) })] }));
}

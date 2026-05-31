import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
const certs = [
    { src: '/images/cases/iso.jpeg', alt: 'ISO' },
    { src: '/images/cases/ce.jpeg', alt: 'CE' },
    { src: '/images/cases/sgs.jpeg', alt: 'SGS' },
    { src: '/images/cases/rohs.jpeg', alt: 'RoHS' },
];
export default function AboutIntro() {
    const { t } = useTranslation();
    const values = t('home.about.values', { returnObjects: true });
    return (_jsx("section", { className: "py-16 md:py-20", children: _jsx("div", { className: "container-x", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsx("div", { className: "aspect-[4/3] rounded-xl overflow-hidden bg-ink-100", children: _jsx("img", { src: "/images/factory/workshop-scene.jpg", alt: "FENGCHI factory workshop", className: "w-full h-full object-cover" }) }), _jsxs("div", { children: [_jsx("p", { className: "section-eyebrow mb-3", children: t('home.about.eyebrow') }), _jsx("h2", { className: "section-title", children: t('home.about.title') }), _jsx("p", { className: "mt-6 text-ink-700 leading-relaxed", children: t('home.about.desc') }), _jsx("div", { className: "mt-8 space-y-4", children: values.map((v, i) => (_jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center flex-shrink-0 font-bold text-sm", children: "\u2713" }), _jsx("div", { children: _jsx("h3", { className: "font-semibold text-ink-900", children: v }) })] }, i))) }), _jsx("div", { className: "mt-8 flex gap-4 items-center", children: certs.map((c, i) => (_jsx("img", { src: c.src, alt: c.alt, className: "w-20 h-auto object-contain" }, i))) })] })] }) }) }));
}

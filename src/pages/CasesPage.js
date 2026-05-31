import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
const topImages = [
    '/images/cases/case-01.jpg',
    '/images/cases/case-02.jpg',
    '/images/cases/case-03.jpg',
];
const images = [
    '/images/cases/drone1.jpeg',
    '/images/cases/drone2.jpeg',
    '/images/cases/drone3.jpeg',
    '/images/cases/drone4.jpeg',
    '/images/cases/use1.jpeg',
    '/images/cases/use2.jpeg',
    '/images/cases/use3.jpeg',
    '/images/cases/use4.jpeg',
    '/images/cases/use5.jpeg',
    '/images/cases/use6.jpeg',
    '/images/cases/use7.jpeg',
    '/images/cases/use8.jpeg',
];
export default function CasesPage() {
    const { t } = useTranslation();
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white py-16", children: _jsxs("div", { className: "container-x", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: t('cases.title') }), _jsx("p", { className: "mt-3 text-brand-100 max-w-2xl", children: t('cases.subtitle') })] }) }), _jsx("section", { className: "container-x py-12", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [topImages.map((src, i) => (_jsx("div", { className: "card overflow-hidden", children: _jsx("div", { className: "aspect-[16/10] overflow-hidden bg-ink-100", children: _jsx("img", { src: src, alt: `${t('cases.alt')} ${i + 1}`, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500" }) }) }, `top-${i}`))), images.map((src, i) => (_jsx("div", { className: "card overflow-hidden", children: _jsx("div", { className: "aspect-[16/10] overflow-hidden bg-ink-100", children: _jsx("img", { src: src, alt: `${t('cases.alt')} ${i + 1 + topImages.length}`, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500" }) }) }, i)))] }) })] }));
}

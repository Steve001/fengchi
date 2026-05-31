import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const langs = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'ar', label: 'العربية' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'no', label: 'Norsk' },
    { code: 'ko', label: '한국어' },
    { code: 'pt', label: 'Português' },
    { code: 'ru', label: 'Русский' },
    { code: 'uk', label: 'Українська' },
];
export default function Header() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navLinks = [
        { key: 'home', to: '/' },
        { key: 'products', to: '/products' },
        { key: 'about', to: '/about' },
        { key: 'cases', to: '/cases' },
        { key: 'contact', to: '/contact' },
    ];
    const isActive = (to) => {
        if (to === '/')
            return location.pathname === '/';
        return location.pathname.startsWith(to);
    };
    const switchLang = (code) => {
        i18n.changeLanguage(code);
        localStorage.setItem('lang', code);
    };
    return (_jsxs("header", { className: "sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-ink-100", children: [_jsxs("div", { className: "container-x flex items-center justify-between h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-2.5", "aria-label": "FENGCHI", children: [_jsx("img", { src: "/images/fengchi-logo.png", alt: "FENGCHI", className: "h-7 sm:h-8 w-auto" }), _jsx("div", { className: "leading-tight hidden md:block border-l border-ink-300 pl-2.5", children: _jsx("div", { className: "text-[11px] text-ink-500", children: t('site.tagline') }) })] }), _jsx("nav", { className: "hidden lg:flex items-center gap-7", children: navLinks.map((link) => (_jsx(Link, { to: link.to, className: `text-sm font-medium transition-colors ${isActive(link.to) ? 'text-brand-700' : 'text-ink-700 hover:text-brand-600'}`, children: t(`nav.${link.key}`) }, link.key))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("select", { className: "hidden md:block text-sm border border-ink-200 rounded-md px-2 py-1.5 text-ink-700 bg-white focus:outline-none focus:border-brand-500 cursor-pointer", value: i18n.language, onChange: (e) => switchLang(e.target.value), children: langs.map((lang) => (_jsx("option", { value: lang.code, children: lang.label }, lang.code))) }), _jsx(Link, { to: "/contact", className: "hidden md:inline-flex btn-primary text-sm !py-2 !px-4", children: t('cta.button') }), _jsx("button", { className: "lg:hidden p-2 text-ink-700", onClick: () => setMenuOpen(!menuOpen), "aria-label": "\u83DC\u5355", children: menuOpen ? (_jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M6 6l12 12M6 18L18 6", strokeLinecap: "round" }) })) : (_jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 6h16M4 12h16M4 18h16", strokeLinecap: "round" }) })) })] })] }), menuOpen && (_jsx("div", { className: "lg:hidden border-t border-ink-100 bg-white", children: _jsxs("div", { className: "container-x py-3 flex flex-col gap-1", children: [navLinks.map((link) => (_jsx(Link, { to: link.to, className: `py-2.5 text-sm font-medium transition-colors ${isActive(link.to) ? 'text-brand-700' : 'text-ink-700 hover:text-brand-600'}`, onClick: () => setMenuOpen(false), children: t(`nav.${link.key}`) }, link.key))), _jsx("div", { className: "pt-2 border-t border-ink-100 mt-2", children: _jsx("select", { className: "text-sm border border-ink-200 rounded-md px-2 py-1.5 text-ink-700 bg-white focus:outline-none focus:border-brand-500 cursor-pointer w-full", value: i18n.language, onChange: (e) => switchLang(e.target.value), children: langs.map((lang) => (_jsx("option", { value: lang.code, children: lang.label }, lang.code))) }) })] }) }))] }));
}

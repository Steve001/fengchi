import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data';
const featured = products.slice(0, 3);
export default function Products() {
    const { t } = useTranslation();
    return (_jsx("section", { className: "py-16 md:py-20", children: _jsxs("div", { className: "container-x", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsx("p", { className: "section-eyebrow mb-3", children: t('home.products.eyebrow') }), _jsx("h2", { className: "section-title", children: t('home.products.title') })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10", children: featured.map((p) => (_jsxs(Link, { to: `/products/${p.slug}`, className: "card overflow-hidden group", children: [_jsx("div", { className: "aspect-[4/3] overflow-hidden bg-ink-100", children: _jsx("img", { src: p.image, alt: p.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }), _jsxs("div", { className: "p-5", children: [_jsx("p", { className: "text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1", children: p.category }), _jsx("h3", { className: "font-semibold text-ink-900 mb-2", children: p.name }), _jsx("p", { className: "text-sm text-ink-500 line-clamp-2", children: p.description }), _jsx("p", { className: "mt-4 text-brand-700 text-sm font-semibold group-hover:underline", children: t('home.products.detail') })] })] }, p.slug))) }), _jsx("div", { className: "text-center", children: _jsx(Link, { to: "/products", className: "btn-outline", children: t('home.products.viewAll') }) })] }) }));
}

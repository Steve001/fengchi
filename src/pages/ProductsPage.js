import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data';
export default function ProductsPage() {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('category') || 'all';
    const categories = useMemo(() => {
        const seen = new Map();
        products.forEach((p) => {
            if (!seen.has(p.categorySlug))
                seen.set(p.categorySlug, p.category);
        });
        return ['all', ...Array.from(seen.keys())];
    }, []);
    const categoryNames = useMemo(() => {
        const names = { all: t('products.all') };
        products.forEach((p) => {
            if (!names[p.categorySlug])
                names[p.categorySlug] = p.category;
        });
        return names;
    }, [t]);
    const filteredProducts = useMemo(() => {
        if (activeCategory === 'all')
            return products;
        return products.filter((p) => p.categorySlug === activeCategory);
    }, [activeCategory]);
    const setCategory = (cat) => {
        if (cat === 'all') {
            setSearchParams({});
        }
        else {
            setSearchParams({ category: cat });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white py-16", children: _jsxs("div", { className: "container-x", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: t('products.title') }), _jsx("p", { className: "mt-3 text-brand-100 max-w-2xl", children: t('products.subtitle') })] }) }), _jsxs("section", { className: "container-x py-12", children: [_jsx("div", { className: "flex flex-wrap gap-2 mb-8", children: categories.map((cat) => (_jsx("button", { type: "button", className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                                ? 'bg-brand-600 text-white'
                                : 'bg-ink-100 text-ink-700 hover:bg-ink-300/40'}`, onClick: () => setCategory(cat), children: categoryNames[cat] || cat }, cat))) }), filteredProducts.length === 0 ? (_jsx("p", { className: "text-center text-ink-500 py-20", children: t('products.noResult') })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProducts.map((p) => (_jsxs(Link, { to: `/products/${p.slug}`, className: "card overflow-hidden group", children: [_jsx("div", { className: "aspect-[4/3] overflow-hidden bg-ink-100", children: _jsx("img", { src: p.image, alt: p.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }), _jsxs("div", { className: "p-5 flex-1 flex flex-col", children: [_jsx("p", { className: "text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1", children: p.category }), _jsx("h3", { className: "font-semibold text-ink-900", children: p.name }), _jsx("p", { className: "mt-2 text-sm text-ink-500 line-clamp-2 flex-1", children: p.description }), _jsx("p", { className: "mt-4 text-brand-700 text-sm font-semibold group-hover:underline", children: t('products.detail') })] })] }, p.slug))) }))] })] }));
}

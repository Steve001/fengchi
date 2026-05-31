import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
export default function Stats() {
    const { t } = useTranslation();
    const stats = t('stats', { returnObjects: true });
    return (_jsx("section", { className: "py-16 bg-ink-100", children: _jsxs("div", { className: "container-x", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("p", { className: "section-eyebrow mb-3", children: t('home.stats.eyebrow') }), _jsx("h2", { className: "section-title", children: t('home.stats.title') })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((stat, i) => (_jsxs("div", { className: "text-center p-6", children: [_jsx("div", { className: "text-4xl md:text-5xl font-bold text-brand-600 mb-2", children: stat.number }), _jsx("div", { className: "text-sm text-ink-500", children: stat.label })] }, i))) })] }) }));
}

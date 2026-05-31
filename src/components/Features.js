import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
export default function Features() {
    const { t } = useTranslation();
    const areas = t('home.apps.items', { returnObjects: true });
    return (_jsx("section", { className: "py-16 md:py-20", children: _jsxs("div", { className: "container-x", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsx("p", { className: "section-eyebrow mb-3", children: t('home.apps.eyebrow') }), _jsx("h2", { className: "section-title", children: t('home.apps.title') })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: areas.map((area, i) => (_jsxs("div", { className: "card p-6", children: [_jsx("h3", { className: "text-lg font-bold text-ink-900 mb-2", children: area.title }), _jsx("p", { className: "text-sm text-ink-500 leading-relaxed", children: area.desc })] }, i))) })] }) }));
}

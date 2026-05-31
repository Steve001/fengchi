import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function NotFoundPage() {
    const { t } = useTranslation();
    return (_jsxs("section", { className: "container-x py-32 text-center", children: [_jsx("div", { className: "text-7xl font-bold text-brand-700", children: "404" }), _jsx("h1", { className: "mt-4 text-2xl font-bold text-ink-900", children: t('notFound.title') }), _jsx("p", { className: "mt-3 text-ink-500", children: t('notFound.desc') }), _jsx("div", { className: "mt-8", children: _jsx(Link, { to: "/", className: "btn-primary", children: t('notFound.back') }) })] }));
}

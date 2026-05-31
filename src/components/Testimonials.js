import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
const reviews = [
    {
        id: 4,
        content: {
            zh: '在高海拔山区进行电力巡检，锋驰电池的能量密度优势非常明显，单次飞行覆盖线路长度比之前多了30%。',
            en: 'For high-altitude power line inspection, FENGCHI batteries show significant energy density advantages, covering 30% more line length per flight than before.',
        },
        author: 'Yongkang Li',
        country: { zh: '云南 · 电力巡检公司', en: 'Yunnan · Power Inspection' },
    },
    {
        id: 5,
        content: {
            zh: '作为无人机培训学校，电池的循环寿命直接影响运营成本。锋驰电池1000+次的循环寿命帮我们节省了大量开支。',
            en: 'As a drone training school, battery cycle life directly impacts operating costs. FENGCHI\'s 1000+ cycle life has saved us significant expenses.',
        },
        author: 'Minghui Liu',
        country: { zh: '北京 · 无人机培训学校', en: 'Beijing · Drone Training School' },
    },
    {
        id: 6,
        content: {
            zh: '锋驰的ODM服务非常专业，根据我们的特殊需求定制了电池尺寸和接口，全程配合紧密，交付准时。',
            en: 'FENGCHI\'s ODM service is very professional. They customized battery dimensions and connectors to our specs, with tight coordination and on-time delivery.',
        },
        author: 'Gao Qiaojianyi',
        country: { zh: '日本 · 工业无人机制造商', en: 'Japan · Industrial UAV Manufacturer' },
    },
];
export default function Testimonials() {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language === 'zh' ? 'zh' : 'en');
    return (_jsx("section", { className: "py-16 md:py-20", children: _jsxs("div", { className: "container-x", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsx("p", { className: "section-eyebrow mb-3", children: t('home.testimonials.eyebrow') }), _jsx("h2", { className: "section-title", children: t('home.testimonials.title') })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: reviews.map((r) => (_jsxs("div", { className: "card p-6", children: [_jsx("div", { className: "text-3xl text-brand-300 leading-none mb-2", children: "\u201C" }), _jsx("p", { className: "text-ink-700 leading-relaxed", children: r.content[lang] || r.content.zh }), _jsxs("div", { className: "mt-4 pt-4 border-t border-ink-100", children: [_jsx("p", { className: "font-semibold text-ink-900", children: r.author }), _jsx("p", { className: "text-sm text-ink-500", children: r.country[lang] || r.country.zh })] })] }, r.id))) })] }) }));
}

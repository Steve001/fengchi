import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();
  const areas = t('home.apps.items', { returnObjects: true }) as unknown as { title: string; desc: string }[];

  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">{t('home.apps.eyebrow')}</p>
          <h2 className="section-title">{t('home.apps.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="card p-6">
              <h3 className="text-lg font-bold text-ink-900 mb-2">{area.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

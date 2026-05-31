import { useTranslation } from 'react-i18next';

export default function Stats() {
  const { t } = useTranslation();
  const stats = t('stats', { returnObjects: true }) as unknown as { number: string; label: string }[];

  return (
    <section className="py-16 bg-ink-100">
      <div className="container-x">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">{t('home.stats.eyebrow')}</p>
          <h2 className="section-title">{t('home.stats.title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-ink-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

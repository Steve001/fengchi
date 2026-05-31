import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  const stats = t('stats', { returnObjects: true }) as unknown as { number: string; label: string }[];
  const values = t('about.values', { returnObjects: true }) as unknown as { title: string; desc: string }[];

  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white py-16">
        <div className="container-x">
          <h1 className="text-3xl md:text-4xl font-bold">{t('about.title')}</h1>
          <p className="mt-3 text-brand-100 max-w-2xl">{t('about.subtitle')}</p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-ink-100">
            <img src="/images/factory/workshop-scene.jpg" alt="FENGCHI factory" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="section-eyebrow mb-3">{t('about.eyebrow')}</p>
            <h2 className="section-title">{t('about.companyName')}</h2>
            <p className="mt-6 text-ink-700 leading-relaxed whitespace-pre-line">{t('about.intro')}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink-100 py-16">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">{t('about.missionTitle')}</h2>
            <p className="text-ink-700 leading-relaxed whitespace-pre-line">{t('about.mission')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink-900 mb-6">{t('about.valuesTitle')}</h2>
            <div className="space-y-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center flex-shrink-0 font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{v.title}</h3>
                    <p className="text-sm text-ink-500 mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="text-2xl font-bold text-ink-900 text-center mb-10">{t('about.statsTitle')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600">{s.number}</div>
              <div className="mt-1 text-sm text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-700 to-brand-600 text-white">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{t('about.cta.title')}</h2>
            <p className="mt-2 text-brand-100">{t('about.cta.desc')}</p>
          </div>
          <a href="/contact" className="btn-primary !bg-white !text-brand-700 hover:!bg-brand-50">{t('about.cta.button')}</a>
        </div>
      </section>
    </>
  );
}

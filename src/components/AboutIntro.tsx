import { useTranslation } from 'react-i18next';

const certs = [
  { src: '/images/cases/iso.jpeg', alt: 'ISO' },
  { src: '/images/cases/ce.jpeg', alt: 'CE' },
  { src: '/images/cases/sgs.jpeg', alt: 'SGS' },
  { src: '/images/cases/rohs.jpeg', alt: 'RoHS' },
];

export default function AboutIntro() {
  const { t } = useTranslation();
  const values = t('home.about.values', { returnObjects: true }) as unknown as string[];

  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-ink-100">
            <img
              src="/images/factory/workshop-scene.jpg"
              alt="FENGCHI factory workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="section-eyebrow mb-3">{t('home.about.eyebrow')}</p>
            <h2 className="section-title">{t('home.about.title')}</h2>
            <p className="mt-6 text-ink-700 leading-relaxed">
              {t('home.about.desc')}
            </p>
            <div className="mt-8 space-y-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center flex-shrink-0 font-bold text-sm">
                    &#10003;
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{v}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4 items-center">
              {certs.map((c, i) => (
                <img key={i} src={c.src} alt={c.alt} className="w-20 h-auto object-contain" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

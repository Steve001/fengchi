import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { caseStudies } from '../data';

const previewCases = caseStudies.slice(0, 3);

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <>
      {/* Cases preview */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">{t('home.cases.eyebrow')}</p>
            <h2 className="section-title">{t('home.cases.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {previewCases.map((c) => (
              <Link key={c.slug} to="/cases" className="card overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden bg-ink-100">
                  <img
                    src={c.cover}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2">
                    {c.industry}
                  </p>
                  <h3 className="font-semibold text-ink-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-ink-500 line-clamp-2">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/cases" className="btn-outline">
              {t('home.cases.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-700 to-brand-600 text-white">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{t('home.cta.title')}</h2>
            <p className="mt-2 text-brand-100">{t('home.cta.desc')}</p>
          </div>
          <Link to="/contact" className="btn-primary !bg-white !text-brand-700 hover:!bg-brand-50">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}

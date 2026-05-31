import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { siteInfo, products } from '../data';

export default function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="container-x py-32 text-center">
        <div className="text-5xl mb-4">&#10003;</div>
        <h1 className="text-2xl font-bold text-ink-900">{t('contact.successTitle')}</h1>
        <p className="mt-3 text-ink-500">{t('contact.successDesc')}</p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white py-16">
        <div className="container-x">
          <h1 className="text-3xl md:text-4xl font-bold">{t('contact.title')}</h1>
          <p className="mt-3 text-brand-100 max-w-2xl">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="container-x py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-5">
          <div className="card p-5">
            <p className="text-sm text-ink-500">{t('contact.email')}</p>
            <p className="text-base text-ink-900 mt-1">{siteInfo.email}</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-ink-500">{t('contact.phone')}</p>
            <p className="text-base text-ink-900 mt-1">{siteInfo.phone}</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-ink-500">{t('contact.address')}</p>
            <p className="text-base text-ink-900 mt-1">{siteInfo.address}</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">{t('contact.formTitle')}</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.name')} *</label>
                <input type="text" required className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.company')}</label>
                <input type="text" className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.emailLabel')} *</label>
                <input type="email" required className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.phoneLabel')}</label>
                <input type="tel" className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600" placeholder="+86" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.country')}</label>
                <select className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 bg-white">
                  <option value="">{t('contact.selectCountry')}</option>
                  <option value="CN">中国</option>
                  <option value="US">United States</option>
                  <option value="JP">日本</option>
                  <option value="KR">한국</option>
                  <option value="DE">Deutschland</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.product')}</label>
                <select className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 bg-white">
                  <option value="">{t('contact.selectProduct')}</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('contact.message')} *</label>
              <textarea required rows={5} className="w-full border border-ink-300 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 resize-none" placeholder={t('contact.messagePlaceholder')} />
            </div>
            <button type="submit" className="btn-primary">{t('contact.submit')}</button>
          </form>
        </div>
      </section>
    </>
  );
}

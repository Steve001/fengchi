import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="container-x py-32 text-center">
      <div className="text-7xl font-bold text-brand-700">404</div>
      <h1 className="mt-4 text-2xl font-bold text-ink-900">{t('notFound.title')}</h1>
      <p className="mt-3 text-ink-500">{t('notFound.desc')}</p>
      <div className="mt-8">
        <Link to="/" className="btn-primary">{t('notFound.back')}</Link>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data';

const featured = products.slice(0, 3);

export default function Products() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">{t('home.products.eyebrow')}</p>
          <h2 className="section-title">{t('home.products.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="card overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
                  {p.category}
                </p>
                <h3 className="font-semibold text-ink-900 mb-2">{p.name}</h3>
                <p className="text-sm text-ink-500 line-clamp-2">{p.description}</p>
                <p className="mt-4 text-brand-700 text-sm font-semibold group-hover:underline">
                  {t('home.products.detail')}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="btn-outline">
            {t('home.products.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}

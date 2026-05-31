import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data';

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container-x py-20 text-center text-ink-500">
        <p className="text-2xl font-bold text-ink-900 mb-3">{t('products.notFound.title')}</p>
        <p>{t('products.notFound.desc')}</p>
        <Link to="/products" className="btn-primary mt-6">{t('products.notFound.back')}</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="bg-ink-100 py-4">
        <div className="container-x text-sm text-ink-500">
          <Link to="/" className="hover:text-brand-600 transition-colors">{t('products.breadcrumb.home')}</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-brand-600 transition-colors">{t('products.breadcrumb.products')}</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-900">{product.name}</span>
        </div>
      </div>

      <section className="container-x py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square rounded-xl overflow-hidden bg-ink-100 border border-ink-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm text-brand-600 font-semibold uppercase tracking-wider">{product.category}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-ink-900">{product.name}</h1>
            <p className="mt-4 text-ink-700 leading-relaxed">{product.description}</p>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-ink-900 mb-4">{t('products.specs')}</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-ink-500">{spec.label}</span>
                    <span className="font-semibold text-ink-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">{t('products.getQuote')}</Link>
              <button className="btn-outline" onClick={() => window.history.back()}>{t('products.back')}</button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-xl font-bold text-ink-900 mb-4">{t('products.features')}</h3>
          <ul className="space-y-3">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-ink-700">
                <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-ink-100 py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-ink-900 mb-8">{t('products.related')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="card overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-ink-900">{p.name}</h3>
                    <p className="mt-2 text-sm text-ink-500 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

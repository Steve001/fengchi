import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data';

export default function ProductsPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const categories = useMemo(() => {
    const seen = new Map<string, string>();
    products.forEach((p) => {
      if (!seen.has(p.categorySlug)) seen.set(p.categorySlug, p.category);
    });
    return ['all', ...Array.from(seen.keys())];
  }, []);

  const categoryNames: Record<string, string> = useMemo(() => {
    const names: Record<string, string> = { all: t('products.all') };
    products.forEach((p) => {
      if (!names[p.categorySlug]) names[p.categorySlug] = p.category;
    });
    return names;
  }, [t]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.categorySlug === activeCategory);
  }, [activeCategory]);

  const setCategory = (cat: string) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white py-16">
        <div className="container-x">
          <h1 className="text-3xl md:text-4xl font-bold">{t('products.title')}</h1>
          <p className="mt-3 text-brand-100 max-w-2xl">{t('products.subtitle')}</p>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white'
                  : 'bg-ink-100 text-ink-700 hover:bg-ink-300/40'
              }`}
              onClick={() => setCategory(cat)}
            >
              {categoryNames[cat] || cat}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-ink-500 py-20">{t('products.noResult')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">{p.category}</p>
                  <h3 className="font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 line-clamp-2 flex-1">{p.description}</p>
                  <p className="mt-4 text-brand-700 text-sm font-semibold group-hover:underline">{t('products.detail')}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

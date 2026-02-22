import { notFound } from 'next/navigation'
import { PRODUCTS, getProduct } from '@/lib/products'
import { ProductDetail } from './product-detail'
import { ProductCard } from '@/components/product-card'

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="flex flex-col">
      <ProductDetail product={product} />

      {/* Related Products */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-center gap-3 pb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">
              You May Also Like
            </span>
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              Related Pieces
            </h2>
            <div className="mt-2 h-px w-12 bg-primary/40" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

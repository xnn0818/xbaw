'use client'

import { useState } from 'react'
import { Package, Gift, CreditCard } from 'lucide-react'
import { PRODUCTS, CATEGORIES, CATEGORY_LABELS, type Category } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { cn } from '@/lib/utils'

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  all: <Package className="size-4" />,
  '2026春節福箱': <Gift className="size-4" />,
  '月卡': <CreditCard className="size-4" />,
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      {/* Category Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
              activeCategory === cat
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
            )}
          >
            {CATEGORY_ICONS[cat]}
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 3}
          />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Package className="size-12 text-muted-foreground/40" />
          <p className="mt-4 text-sm text-muted-foreground">
            {'此分類目前沒有商品'}
          </p>
        </div>
      )}
    </div>
  )
}

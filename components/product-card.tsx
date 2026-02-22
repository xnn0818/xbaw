'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { type Product, formatPrice } from '@/lib/products'

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product
  priority?: boolean
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-card transition-all duration-300 hover:ring-2 hover:ring-primary/40"
    >
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold ${
            product.badgeType === 'recommend'
              ? 'bg-badge-red text-foreground'
              : 'bg-badge-orange text-primary-foreground'
          }`}
        >
          {product.badgeType === 'special' && <Star className="size-3" />}
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-bold leading-snug text-card-foreground">
          {product.name}
        </h3>
        <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-auto pt-2 text-lg font-bold text-primary">
          {formatPrice(product.priceInCents)}
        </p>
      </div>
    </Link>
  )
}

'use client'

import Image from 'next/image'
import { ShoppingBag, Check } from 'lucide-react'
import { useState } from 'react'
import { type Product, formatPrice } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            {product.category}
          </span>
          <h1 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl text-foreground">
            {formatPrice(product.priceInCents)}
          </p>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-border/50" />

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Details list */}
          <ul className="mt-8 flex flex-col gap-3" role="list">
            {product.details.map((detail) => (
              <li
                key={detail}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="flex size-1 rounded-full bg-primary" />
                {detail}
              </li>
            ))}
          </ul>

          {/* Add to cart button */}
          <button
            onClick={handleAdd}
            className="mt-10 flex items-center justify-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            {added ? (
              <>
                <Check className="size-4" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="size-4" />
                Add to Cart
              </>
            )}
          </button>

          {/* Shipping note */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Complimentary shipping on all orders. Delivered in signature packaging.
          </p>
        </div>
      </div>
    </div>
  )
}

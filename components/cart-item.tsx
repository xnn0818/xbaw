'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, X } from 'lucide-react'
import { type CartItem as CartItemType } from '@/lib/cart-context'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'

export function CartItemRow({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex gap-5 border-b border-border/50 py-6">
      {/* Image */}
      <Link
        href={`/products/${item.product.id}`}
        className="relative aspect-[3/4] w-24 flex-shrink-0 overflow-hidden bg-secondary"
      >
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {item.product.category}
            </span>
            <Link
              href={`/products/${item.product.id}`}
              className="font-serif text-sm text-foreground transition-colors hover:text-primary"
            >
              {item.product.name}
            </Link>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Remove ${item.product.name} from cart`}
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity controls */}
          <div className="flex items-center gap-3 border border-border/50 px-2 py-1">
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.quantity - 1)
              }
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Decrease quantity"
            >
              <Minus className="size-3" />
            </button>
            <span className="min-w-[1.5rem] text-center text-xs text-foreground">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.quantity + 1)
              }
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Increase quantity"
            >
              <Plus className="size-3" />
            </button>
          </div>

          {/* Price */}
          <span className="text-sm text-foreground">
            {formatPrice(item.product.priceInCents * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}

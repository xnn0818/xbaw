'use client'

import Link from 'next/link'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'
import { CartItemRow } from '@/components/cart-item'

export default function CartPage() {
  const { items, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
        <ShoppingBag className="size-12 text-muted-foreground/40" />
        <h1 className="mt-6 font-serif text-2xl text-foreground">
          Your Cart is Empty
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Discover our collection and find something extraordinary.
        </p>
        <Link
          href="/products"
          className="group mt-8 flex items-center gap-3 border border-primary/50 bg-primary/5 px-8 py-3 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Browse Collection
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 pb-12">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">
          Review Order
        </span>
        <h1 className="font-serif text-3xl text-foreground md:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-2 h-px w-12 bg-primary/40" />
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Cart Items */}
        <div className="flex-1">
          {items.map((item) => (
            <CartItemRow key={item.product.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="sticky top-24 flex flex-col gap-6 border border-border/50 bg-secondary/20 p-8">
            <h2 className="font-serif text-lg text-foreground">
              Order Summary
            </h2>
            <div className="h-px bg-border/50" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-sm text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Shipping</span>
              <span className="text-sm text-primary">Complimentary</span>
            </div>
            <div className="h-px bg-border/50" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Total</span>
              <span className="font-serif text-lg text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="mt-2 flex items-center justify-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Proceed to Checkout
              <ArrowRight className="size-4" />
            </Link>

            <p className="text-center text-[10px] text-muted-foreground">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

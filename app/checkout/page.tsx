'use client'

import Link from 'next/link'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'

const Checkout = dynamic(() => import('@/components/checkout'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-16">
      <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  ),
})

export default function CheckoutPage() {
  const { items, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
        <ShoppingBag className="size-12 text-muted-foreground/40" />
        <h1 className="mt-6 font-serif text-2xl text-foreground">
          Nothing to Checkout
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Add items to your cart before proceeding to checkout.
        </p>
        <Link
          href="/products"
          className="group mt-8 flex items-center gap-3 border border-primary/50 bg-primary/5 px-8 py-3 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Browse Collection
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 pb-12">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">
          Secure Payment
        </span>
        <h1 className="font-serif text-3xl text-foreground md:text-4xl">
          Checkout
        </h1>
        <div className="mt-2 h-px w-12 bg-primary/40" />
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Stripe Checkout */}
        <div className="flex-1">
          <Checkout />
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-80">
          <div className="sticky top-24 flex flex-col gap-6 border border-border/50 bg-secondary/20 p-8">
            <h2 className="font-serif text-lg text-foreground">
              Order Summary
            </h2>
            <div className="h-px bg-border/50" />

            {/* Items */}
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-foreground">
                      {item.product.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {'Qty: '}{item.quantity}
                    </span>
                  </div>
                  <span className="text-sm text-foreground">
                    {formatPrice(item.product.priceInCents * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-px bg-border/50" />

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
          </div>

          <Link
            href="/cart"
            className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3" />
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

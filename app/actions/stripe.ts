'use server'

import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

interface CartLineItem {
  productId: string
  quantity: number
}

export async function startCheckoutSession(cartItems: CartLineItem[]) {
  if (!cartItems.length) {
    throw new Error('Cart is empty')
  }

  const lineItems = cartItems.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId)
    if (!product) {
      throw new Error(`Product with id "${item.productId}" not found`)
    }
    return {
      price_data: {
        currency: 'twd',
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: product.priceInCents,
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items: lineItems,
    mode: 'payment',
  })

  return session.client_secret
}

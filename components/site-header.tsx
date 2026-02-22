'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X, LogIn } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

const navigation = [
  { name: '首頁', href: '/' },
  { name: '官網商城', href: '/products' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              {'FatBear'}
              <span className="text-primary">{'胖海熊'}</span>
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm transition-colors duration-200',
                  pathname === item.href
                    ? 'bg-primary/15 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-secondary/50 hover:text-foreground"
            aria-label={`購物車 ${totalItems} 件商品`}
          >
            <ShoppingCart className="size-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Login button */}
          <button
            className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-secondary/50 hover:text-foreground lg:flex"
            aria-label="登入"
          >
            <LogIn className="size-4" />
            <span>{'登入'}</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="開關選單"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm transition-colors duration-200',
                  pathname === item.href
                    ? 'bg-primary/15 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground">
              <LogIn className="size-4" />
              <span>{'登入'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

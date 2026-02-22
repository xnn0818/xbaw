import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary">
              <span className="text-xs font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-base font-bold text-foreground">
              {'FatBear'}
              <span className="text-primary">{'溫暖小鎮'}</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              href="/products"
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {'官網商城'}
            </Link>
            <Link
              href="/cart"
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {'購物車'}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            {'2026 溫暖小鎮. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

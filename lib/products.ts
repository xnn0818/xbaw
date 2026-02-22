export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  image: string
  category: string
  badge?: string
  badgeType?: 'recommend' | 'special'
  details: string[]
}

export const CATEGORIES = ['all', '2026春節福箱', '月卡'] as const
export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_LABELS: Record<Category, string> = {
  all: '全部商品',
  '2026春節福箱': '2026春節福箱',
  '月卡': '月卡',
}

export const PRODUCTS: Product[] = [
  {
    id: 'gamepass-premium',
    name: '熊寶貝認證卡【進階版】(30天)',
    description:
      '購買即送： 購買瞬間，立刻贈送 6,000 點數金！每日領取： 每天上線領取 600 點券……',
    priceInCents: 99000,
    image: '/images/gamepass-premium.jpg',
    category: '月卡',
    badge: '推薦',
    badgeType: 'recommend',
    details: [
      '購買即送 6,000 點數金',
      '每日領取 600 點券',
      '有效期限 30 天',
      '專屬進階版邊框',
      '自動續訂可隨時取消',
    ],
  },
  {
    id: 'gamepass-standard',
    name: '熊寶貝認證卡【標準版】(30天)',
    description:
      '購買即送： 購買瞬間，立刻贈送 3,000 點數金！每日領取： 每天上線領取 300 點券……',
    priceInCents: 49000,
    image: '/images/gamepass-standard.jpg',
    category: '月卡',
    badge: '推薦',
    badgeType: 'recommend',
    details: [
      '購買即送 3,000 點數金',
      '每日領取 300 點券',
      '有效期限 30 天',
      '標準版專屬邊框',
      '自動續訂可隨時取消',
    ],
  },
  {
    id: 'treasure-box',
    name: '春節福箱',
    description:
      '2026馬年新春限定福箱，CP值爆表！！購買立即獲得大量精彩內容物、稀有道具搖獎機會，還能參加活動最終的大獎摸彩活動……',
    priceInCents: 188800,
    image: '/images/treasure-box.jpg',
    category: '2026春節福箱',
    badge: '特別企劃',
    badgeType: 'special',
    details: [
      '限定春節外觀道具',
      '稀有道具搖獎機會',
      '大獎摸彩活動參加券',
      '春節限定頭飾',
      '隨機稀有坐騎碎片',
    ],
  },
  {
    id: 'treasure-box-pink-wings',
    name: '春節福箱x10【凌風起飛包】',
    description:
      '以優惠價購買組綁包，一次獲得 10x 春節福箱！保證出金獲得：機動版 - 紫魂刀劍翅膀！點擊查看「完整產品介紹」。',
    priceInCents: 1688800,
    image: '/images/treasure-box-pink-wings.jpg',
    category: '2026春節福箱',
    badge: '特別企劃',
    badgeType: 'special',
    details: [
      '10x 春節福箱',
      '保證獲得紫魂刀劍翅膀（機動版）',
      '額外贈送春節限定坐騎',
      '限定稱號「凌風飛行者」',
      '大獎摸彩活動參加券 x10',
    ],
  },
  {
    id: 'treasure-box-white-wings',
    name: '春節福箱x10【巡空穩航包】',
    description:
      '以優惠價購買組綁包，一次獲得 10x 春節福箱！保證出金獲得：持久版 - 白天使之翼！點擊查看「完整產品介紹」。',
    priceInCents: 1688800,
    image: '/images/treasure-box-white-wings.jpg',
    category: '2026春節福箱',
    badge: '特別企劃',
    badgeType: 'special',
    details: [
      '10x 春節福箱',
      '保證獲得白天使之翼（持久版）',
      '額外贈送春節限定坐騎',
      '限定稱號「巡空守護者」',
      '大獎摸彩活動參加券 x10',
    ],
  },
  {
    id: 'treasure-box-gold-wings',
    name: '春節福箱x20【御空尊爵包】',
    description:
      '最超值的組綁包，一次獲得 20x 春節福箱！保證二金起跳獲得：機動版 - 紫魂刀劍翅膀 + 持久版 - 白天使之翼！……',
    priceInCents: 2568800,
    image: '/images/treasure-box-gold-wings.jpg',
    category: '2026春節福箱',
    badge: '特別企劃',
    badgeType: 'special',
    details: [
      '20x 春節福箱',
      '保證獲得紫魂刀劍翅膀 + 白天使之翼',
      '額外贈送限定傳說坐騎',
      '限定稱號「御空尊爵」',
      '大獎摸彩活動參加券 x20',
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function formatPrice(priceInCents: number): string {
  return `NT$ ${Math.round(priceInCents / 100).toLocaleString('en-US')}`
}

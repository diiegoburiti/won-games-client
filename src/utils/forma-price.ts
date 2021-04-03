export default function formatPrice(price: number | bigint): string {
  if (price === 0) return 'Free'
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

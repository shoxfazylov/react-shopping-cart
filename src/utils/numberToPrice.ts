const currencies = [{ value: 'USD', symbol: '$' }]

export const numberToPrice = (price: number, currency: string = 'USD') => {
  const currencySymbol = currencies.find(({ value }) => value === currency)?.symbol

  return `${price} ${currencySymbol}`
}


const FormatIDR = (value: number): string => new Intl.NumberFormat("id-ID", { 
    style: "currency",
    // currencyDisplay: "code",
    currency: "IDR",
    // maximumSignificantDigits: 1,
    maximumFractionDigits: 0
  }).format(value)

const FormatPercent = (value: number): string => new Intl.NumberFormat("id-ID", {
  style: 'percent'
}).format(value / 100)

// eslint-disable-next-line
export default {
  FormatIDR,
  FormatPercent
}

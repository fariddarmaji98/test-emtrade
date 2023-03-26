import { NUMBER_FORMAT } from "@/utils"

interface PriceProps {
  price: number,
  discount: number,
  total_price: number
}
 
const Price = ({
  price,
  discount,
  total_price
}: PriceProps) => (<div className="flex flex-col gap-1">
  <div className="flex items-center gap-2">
    <span className="text-xs font-bold font-inter text-pink-700 bg-pink-200 p-0.5">
      {NUMBER_FORMAT.FormatPercent(discount)}
    </span>
    <span className="text-xs font-inter text-neutral-500 line-through">
      {NUMBER_FORMAT.FormatIDR(price).replace(/\s+/g, "")}
    </span>
  </div>
  <span className="text-lg font-inter text-neutral-700 font-bold">
    {NUMBER_FORMAT.FormatIDR(total_price).replace(/\s+/g, "")}
  </span>
</div>)
 
export default Price
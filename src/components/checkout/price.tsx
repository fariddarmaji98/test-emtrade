interface PriceProps {
  price: number,
  discount: number,
  total_price: number
}
 
const Price = ({
  price,
  discount,
  total_price
}: PriceProps) => {
  return (<div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold font-inter text-pink-700 bg-pink-200 p-0.5">
        {discount}%
      </span>
      <span className="text-xs font-inter text-neutral-500 line-through">
        {price}
      </span>
    </div>
    <span className="text-lg font-inter text-neutral-700 font-bold">
      {total_price}
    </span>
  </div>);
}
 
export default Price;
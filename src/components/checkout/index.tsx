import Button from "../button"
import Price from "./price"

interface CheckoutProps {
  discount: number,
  price: number,
  total_price: number
}
 
const Checkout = ({
  discount,
  price,
  total_price
}: CheckoutProps) => {
  return (<div className="w-full pt-5 pb-4 px-6 flex items-center justify-between shadow-cs-1">
    <Price discount={discount} price={price} total_price={total_price} />

    <Button warning>
      Beli
    </Button>
  </div>);
}
 
export default Checkout;
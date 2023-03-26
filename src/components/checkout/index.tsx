import Button from "../button"
import Price from "./price"
import Swal from "sweetalert2"

interface CheckoutProps {
  eventName: string,
  discount: number,
  price: number,
  total_price: number
}


const Checkout = ({
  eventName,
  discount,
  price,
  total_price
}: CheckoutProps) => {

  const handleCheckout = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      html: `Anda membeli event <b>${eventName}</b><br /> Lakukan pembayaran untuk mendapatkan akses.`
    })
  }

  return (<div className="w-full pt-5 pb-4 p-2 xxs:px-6 flex flex-col xxs:flex-row items-center justify-between shadow-cs-1">
    <Price discount={discount} price={price} total_price={total_price} />

    <Button warning onclick={handleCheckout}>
      Beli
    </Button>
  </div>)
}
 
export default Checkout
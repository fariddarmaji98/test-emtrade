import { HiArrowLeft } from 'react-icons/hi'
import Button from "../button"
import { ALERT } from "@/utils"

interface ServerErrorProps {
  statusCode: number,
  errorMessage: string
}
 
const ServerError = ({
  statusCode,
  errorMessage
}: ServerErrorProps) => (<div className="h-screen p-6 flex flex-col items-center justify-center gap-4">
  <span className="text-9xl font-bold text-neutral-500 font-inter">
    {statusCode}
  </span>
  <span className="text-xl font-semibold text-center text-neutral-400 font-inter max-w-md">
    {errorMessage}
  </span>
  <Button onclick={() => ALERT.Coomingsoon()} primary>
    <div className="flex items-center gap-2">
      <HiArrowLeft /> Kembali
    </div>
  </Button>
</div>)
 
export default ServerError
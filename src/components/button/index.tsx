import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode,
  primary?: boolean,
  warning?: boolean,
  onclick?: Function
}

const Button = ({
  children,
  onclick = () => {},
  primary,
  warning,
}: ButtonProps) => {
  
  let costumeClass: string = "border border-slate-700"

  if (warning) costumeClass = "bg-cs-warning"

  if (primary) costumeClass = "bg-blue-700"

  return (<button 
    className={`w-40 h-12 rounded-[100px] flex justify-center items-center ${costumeClass}`}
    onClick={() => onclick()}
  >
    <span className="text-base text-white font-semibold font-inter">
      {children}
    </span>
  </button>)
}
 
export default Button

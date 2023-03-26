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
  
  let costumeClass: string = "border border-neutral-700 text-neutral-700"

  if (warning) costumeClass = "bg-cs-warning hover:bg-orange-500 text-white"

  if (primary) costumeClass = "bg-blue-500 hover:bg-blue-700 text-white"

  return (<button 
    className={`
      w-full xxs:w-40 h-12 rounded-[100px] flex justify-center items-center hover:shadow-lg hover:duration-100
      ${costumeClass}
    `}
    onClick={() => onclick()}
  >
    <span className="text-base font-semibold font-inter">
      {children}
    </span>
  </button>)
}
 
export default Button

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode,
  warning?:boolean,
}

const Button = ({
  children,
  warning
}: ButtonProps) => {
  
  let costumeClass: string = "border border-slate-700"

  if (warning) {
    costumeClass = "bg-cs-warning"
  }

  return (<button 
    className={`w-40 h-12 rounded-[100px] flex justify-center items-center ${costumeClass}`}
  >
    <span className="text-base text-white font-semibold font-inter">
      {children}
    </span>
  </button>)
}
 
export default Button;

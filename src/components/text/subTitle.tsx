import { ReactNode } from "react"

interface SubTitleProps {
  children: ReactNode,
  costumeClass?: string
}
 
const SubTitle = ({
  children,
  costumeClass
}: SubTitleProps) => (<span className={`text-lg text-cs-black font-bold font-inter ${costumeClass}`}>
    {children}
  </span>)
 
export default SubTitle

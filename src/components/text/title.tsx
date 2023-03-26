import { ReactNode } from "react"

interface TitleProps {
  children: ReactNode,
  costumeClass?: string
}
 
const Title = ({
  children,
  costumeClass
}: TitleProps) => (<span className={`
    text-2xl text-cs-black font-bold font-inte break-words
    ${costumeClass}
  `}>
    {children}
  </span>)
 
export default Title

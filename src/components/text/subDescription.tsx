import { ReactNode } from "react";

interface SubDescriptionProps {
  children: ReactNode
}
 
const SubDescription = ({
  children
}: SubDescriptionProps) => (<span className={`
    text-sm text-cs-black font-inter
  `}>
    {children}
  </span>)
 
export default SubDescription;
